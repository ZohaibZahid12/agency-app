"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Gift, ShieldCheck } from "lucide-react";
import { serviceIndustryOptions } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  businessName: string;
  fullName: string;
  phone: string;
  email: string;
  industry: string;
  website: string;
  challenges: string;
};

const initialState: FormState = {
  businessName: "",
  fullName: "",
  phone: "",
  email: "",
  industry: "",
  website: "",
  challenges: "",
};

const trustItems = [
  { icon: Gift, label: "100% free, no obligation" },
  { icon: Clock, label: "Same-day response" },
  { icon: ShieldCheck, label: "Custom project roadmap included" },
];

function fieldError(name: keyof FormState, value: string): string | null {
  if (name === "businessName" && !value.trim()) return "Company name is required.";
  if (name === "fullName" && !value.trim()) return "Your name is required.";
  if (name === "phone") {
    if (!value.trim()) return "Phone number is required.";
    if (!/^[\d\s()+-]{7,}$/.test(value)) return "Enter a valid phone number.";
  }
  if (name === "email") {
    if (!value.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
  }
  if (name === "industry" && !value) return "Please select a service.";
  return null;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const requiredFields: (keyof FormState)[] = [
    "businessName",
    "fullName",
    "phone",
    "email",
    "industry",
  ];

  const handleChange = (name: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const err = fieldError(name, value);
      setErrors((prev) => ({ ...prev, [name]: err ?? undefined }));
    }
  };

  const handleBlur = (name: keyof FormState) => {
    const err = fieldError(name, form[name]);
    setErrors((prev) => ({ ...prev, [name]: err ?? undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    requiredFields.forEach((field) => {
      const err = fieldError(field, form[field]);
      if (err) nextErrors[field] = err;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company_url: honeypot }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = (name: keyof FormState) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none",
      errors[name]
        ? "border-red-300 focus:border-red-400"
        : "border-ink-200 focus:border-brand-400"
    );

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-hero-radial" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Get started"
          title="Let's Build Something Real."
          description="Get a free technical audit of your product worth $2,000 — no strings attached."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 border-b border-ink-100 px-6 py-4 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-growth-50 text-growth-600">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-medium text-ink-700">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-growth-50 text-growth-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink-950">
                      You&rsquo;re all set, {form.fullName.split(" ")[0] || "there"}!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                      We received your request. Someone from our team will reach out to{" "}
                      <span className="font-medium text-ink-800">{form.email}</span> within one
                      business day with your free audit.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setForm(initialState);
                        setErrors({});
                        setSubmitted(false);
                      }}
                    >
                      Submit another request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    <div>
                      <label htmlFor="businessName" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Company name
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        value={form.businessName}
                        onChange={(e) => handleChange("businessName", e.target.value)}
                        onBlur={() => handleBlur("businessName")}
                        placeholder="Acme Inc."
                        className={inputClasses("businessName")}
                        aria-invalid={!!errors.businessName}
                      />
                      {errors.businessName && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.businessName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Your name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Alex Rivera"
                        className={inputClasses("fullName")}
                        aria-invalid={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        placeholder="(555) 012-4488"
                        className={inputClasses("phone")}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="alex@acme.com"
                        className={inputClasses("email")}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="industry" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        What do you need help with?
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={form.industry}
                        onChange={(e) => handleChange("industry", e.target.value)}
                        onBlur={() => handleBlur("industry")}
                        className={cn(inputClasses("industry"), !form.industry && "text-ink-300")}
                        aria-invalid={!!errors.industry}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceIndustryOptions.map((option) => (
                          <option key={option} value={option} className="text-ink-900">
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.industry}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="website" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Website <span className="font-normal text-ink-400">(optional)</span>
                      </label>
                      <input
                        id="website"
                        name="website"
                        value={form.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        placeholder="www.yourbusiness.com"
                        className={inputClasses("website")}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="challenges" className="mb-1.5 block text-sm font-semibold text-ink-800">
                        Current technical challenges{" "}
                        <span className="font-normal text-ink-400">(optional)</span>
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        value={form.challenges}
                        onChange={(e) => handleChange("challenges", e.target.value)}
                        placeholder="Tell us what's slowing your team down..."
                        rows={4}
                        className={cn(inputClasses("challenges"), "resize-none")}
                      />
                    </div>

                    <input
                      type="text"
                      name="company_url"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />

                    <div className="sm:col-span-2">
                      {submitError && (
                        <p
                          role="alert"
                          className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                        >
                          {submitError}
                        </p>
                      )}
                      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                        {submitting ? "Sending..." : "Get my free audit"}
                      </Button>
                      <p className="mt-3 text-center text-xs text-ink-400">
                        By submitting, you agree to be contacted about your free technical
                        audit. No spam, ever.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
