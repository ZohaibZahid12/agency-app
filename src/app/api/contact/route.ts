import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Lead = {
  businessName: string;
  fullName: string;
  phone: string;
  email: string;
  industry: string;
  website: string;
  challenges: string;
};

const fields: (keyof Lead)[] = [
  "businessName",
  "fullName",
  "phone",
  "email",
  "industry",
  "website",
  "challenges",
];

const labels: Record<keyof Lead, string> = {
  businessName: "Company",
  fullName: "Name",
  phone: "Phone",
  email: "Email",
  industry: "Service",
  website: "Website",
  challenges: "Challenges",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseLead(body: unknown): Lead | null {
  if (!body || typeof body !== "object") return null;
  const raw = body as Record<string, unknown>;
  const lead = {} as Lead;
  for (const field of fields) {
    const value = raw[field];
    if (value !== undefined && typeof value !== "string") return null;
    lead[field] = (value ?? "").trim().slice(0, field === "challenges" ? 5000 : 300);
  }
  if (!lead.businessName || !lead.fullName || !lead.industry) return null;
  if (!/^[\d\s()+-]{7,}$/.test(lead.phone)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return null;
  return lead;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company_url) {
    return NextResponse.json({ ok: true });
  }

  const lead = parseLead(body);
  if (!lead) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, LEADS_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEADS_TO_EMAIL) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "The form is temporarily unavailable. Please email us directly." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = fields
    .map((field) => {
      const value = lead[field] || "—";
      return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${labels[field]}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`;
    })
    .join("");
  const text = fields.map((field) => `${labels[field]}: ${lead[field] || "—"}`).join("\n");

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: LEADS_TO_EMAIL,
      replyTo: { name: lead.fullName, address: lead.email },
      subject: `New lead: ${lead.fullName} — ${lead.businessName}`,
      text: `New lead from the CodingCurves website\n\n${text}\n\nReceived: ${new Date().toISOString()}`,
      html: `<h2 style="font-family:sans-serif">New lead from the CodingCurves website</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table><p style="font-family:sans-serif;font-size:12px;color:#888">Received: ${new Date().toISOString()}</p>`,
    });
  } catch (error) {
    console.error("Contact form: failed to send lead email.", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
