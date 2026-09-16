import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stacks } from "@/components/sections/Stacks";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Compare } from "@/components/sections/Compare";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Engagement } from "@/components/sections/Engagement";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stacks />
        <Services />
        <Stats />
        <Industries />
        <Process />
        <Compare />
        <CaseStudies />
        <Blog />
        <Testimonials />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
