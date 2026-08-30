"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Monitor, Settings, Database, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";

const services = [
  { icon: Monitor, number: "01", title: "Computer Sales", description: "New and refurbished desktops, laptops, and all-in-ones from top brands like Dell, HP, and Lenovo.", features: ["New & refurbished desktops", "Business laptops & notebooks", "All-in-one workstations", "Custom-built PCs", "Bulk ordering for businesses", "Warranty included on all sales"] },
  { icon: Settings, number: "02", title: "Computer Repairs", description: "Fast, reliable hardware and software repairs. Most jobs completed same-day.", features: ["Screen & display replacement", "Keyboard & trackpad repair", "Battery replacement", "Motherboard & component repair", "Virus & malware removal", "OS reinstallation & recovery"] },
  { icon: Database, number: "03", title: "Data Recovery", description: "Don't lose your important files. We specialize in recovering data from damaged or failing drives.", features: ["Hard drive recovery", "SSD data recovery", "USB & flash drive recovery", "RAID array recovery", "Deleted file recovery", "Free diagnostic assessment"] },
  { icon: Mail, number: "04", title: "Peripherals & Accessories", description: "Monitors, printers, networking gear, and everything you need to set up your workspace.", features: ["Monitors & displays", "Printers & scanners", "Keyboards & mice", "Cables & adapters", "UPS & power protection", "Webcams & audio equipment"] },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

function ServiceSection({ service }: { service: (typeof services)[0] }) {
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
      <PageHeader title="Our Services" subtitle="Quality computer sales, expert repairs, and reliable tech solutions. More services coming soon." highlight="Services" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((s) => <ServiceSection key={s.title} service={s} />)}
          </div>
        </div>
      </section>

      <SectionDivider variant="dot" />

      <section ref={processRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Our Process</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
              How It <span className="text-primary-600">Works</span>
            </motion.h2>
          </div>
          <motion.div variants={stagger} initial="hidden" animate={processInView ? "visible" : "hidden"} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{ step: "01", title: "Consultation", desc: "Tell us what you need — we'll help you find the right equipment or repair solution." }, { step: "02", title: "Quote", desc: "We provide a transparent, no-obligation quote with competitive pricing." }, { step: "03", title: "Delivery or Repair", desc: "We deliver your new equipment or complete repairs, often same-day." }, { step: "04", title: "Support", desc: "Ongoing support and warranty coverage to keep you covered." }].map((item) => (
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
            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">Need Help <span className="text-gradient-primary">Choosing</span>?</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">Not sure what you need? We&apos;ll help you find the right solution at the right price.</p>
            <div className="mt-8"><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]">Get a Free Quote<ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
