"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Monitor, Cloud, Shield, Settings, Wifi, Headphones, Server, Database, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";

const services = [
  { icon: Monitor, number: "01", title: "Managed IT Services", description: "We take full responsibility for your IT environment, providing proactive monitoring, maintenance, and support.", features: ["24/7 network monitoring", "Proactive system maintenance", "Help desk support", "Patch management", "Asset lifecycle management", "Vendor coordination"] },
  { icon: Cloud, number: "02", title: "Cloud Solutions", description: "Migrate to the cloud seamlessly, optimize your infrastructure for cost and performance.", features: ["AWS, Azure & GCP expertise", "Cloud migration planning", "Cost optimization", "Hybrid cloud architecture", "Cloud security & compliance", "Disaster recovery"] },
  { icon: Shield, number: "03", title: "Cybersecurity", description: "Protect your business with multi-layered security strategies, threat detection, and compliance support.", features: ["Threat detection & response", "Penetration testing", "Security awareness training", "Compliance (HIPAA, SOC 2, PCI)", "Firewall & endpoint protection", "Incident response planning"] },
  { icon: Settings, number: "04", title: "IT Consulting", description: "Strategic technology planning aligned with your business objectives.", features: ["Technology roadmapping", "Digital transformation", "IT budget planning", "Vendor evaluation", "Process optimization", "M&A IT due diligence"] },
  { icon: Wifi, number: "05", title: "Network Infrastructure", description: "Design, deploy, and manage robust network infrastructure that keeps your business connected.", features: ["Network design & architecture", "WAN & LAN optimization", "Wireless solutions", "SD-WAN implementation", "Network security", "Remote access solutions"] },
  { icon: Headphones, number: "06", title: "IT Support & Help Desk", description: "Responsive, knowledgeable support for your team. Our help desk resolves issues quickly.", features: ["Multi-channel support", "On-site and remote support", "Software troubleshooting", "Hardware repair & replacement", "User onboarding & offboarding", "SLA-backed response times"] },
  { icon: Server, number: "07", title: "Data Center Services", description: "Comprehensive data center management, from colocation to on-premise optimization.", features: ["Server management", "Capacity planning", "Power & cooling optimization", "Hardware lifecycle management", "Rack & stack services", "Environmental monitoring"] },
  { icon: Database, number: "08", title: "Data Management", description: "Ensure your data is organized, accessible, protected, and leveraged as a strategic asset.", features: ["Database administration", "Data backup & recovery", "Data governance", "Analytics & BI setup", "Data migration", "Data lifecycle management"] },
  { icon: Mail, number: "09", title: "Business Communication", description: "Unified communication solutions including email, VoIP, video conferencing, and collaboration tools.", features: ["Microsoft 365 deployment", "VoIP phone systems", "Video conferencing setup", "Team collaboration tools", "Email security", "UC platform management"] },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

function ServiceSection({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }} className="grid items-start gap-10 lg:grid-cols-12">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-xs font-black text-primary-600">{service.number}</span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50">
            <service.icon className="h-5 w-5 text-primary-600" strokeWidth={1.75} />
          </div>
        </div>
        <h3 className="mt-4 font-display text-2xl font-black tracking-tight text-obsidian sm:text-3xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-custom/60">{service.description}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="lg:col-span-8">
        <div className="rounded-2xl border border-primary-100 bg-primary-50/30 p-6 sm:p-8">
          <h4 className="mb-4 text-[11px] font-bold tracking-[0.2em] text-primary-400 uppercase">What&apos;s Included</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.features.map((f, i) => (
              <motion.div key={f} initial={{ opacity: 0, x: 15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }} className="flex items-center gap-3 text-sm text-slate-custom/60">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" />{f}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader title="Our IT Services" subtitle="From managed IT to cybersecurity, we deliver comprehensive technology solutions that keep your business running at peak performance." highlight="Services" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((s, i) => <ServiceSection key={s.title} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <SectionDivider variant="dot" />

      <section ref={processRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Our Process</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
              How We <span className="text-primary-600">Work</span>
            </motion.h2>
          </div>
          <motion.div variants={stagger} initial="hidden" animate={processInView ? "visible" : "hidden"} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{ step: "01", title: "Discovery", desc: "We assess your current IT environment, identify pain points, and understand your goals." }, { step: "02", title: "Strategy", desc: "Our team develops a tailored technology roadmap aligned with your objectives." }, { step: "03", title: "Implementation", desc: "We deploy solutions with minimal disruption using proven methodologies." }, { step: "04", title: "Optimization", desc: "Continuous monitoring, support, and improvement for maximum value." }].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-lg font-black text-white">{item.step}</div>
                <h3 className="mt-4 font-display text-lg font-black text-obsidian">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-custom/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-obsidian py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0"><div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[140px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">Need a <span className="text-gradient-primary">Custom</span> Solution?</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">Every business is different. Let&apos;s discuss your specific needs.</p>
            <div className="mt-8"><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]">Get a Free Assessment<ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
