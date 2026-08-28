"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Building2, ArrowRight, TrendingUp, Clock, DollarSign, Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const caseStudies = [
  { industry: "Healthcare", client: "Meridian Healthcare Network", title: "Complete IT Infrastructure Overhaul for a 12-Facility Healthcare Network", challenge: "Meridian was struggling with outdated infrastructure across 12 facilities, frequent downtime, and HIPAA compliance concerns.", solution: "We implemented a unified cloud-based infrastructure with automated failover, deployed enterprise-grade cybersecurity, and established 24/7 monitoring.", results: [{ metric: "95%", label: "Reduction in Downtime" }, { metric: "$340K", label: "Annual Cost Savings" }, { metric: "100%", label: "HIPAA Compliance" }], duration: "8 months", icon: Shield },
  { industry: "Financial Services", client: "Apex Financial Group", title: "Cloud Migration & Digital Transformation for a Growing Financial Firm", challenge: "Apex needed to modernize legacy systems, enable remote work, and ensure SOC 2 compliance.", solution: "Migrated 100% of infrastructure to hybrid cloud, implemented zero-trust security, and deployed a secure remote work platform.", results: [{ metric: "40%", label: "Reduced IT Costs" }, { metric: "60%", label: "Faster Processing" }, { metric: "SOC 2", label: "Fully Compliant" }], duration: "6 months", icon: TrendingUp },
  { industry: "Logistics", client: "Greenfield Logistics", title: "End-to-End Managed IT Services for a National Logistics Provider", challenge: "Greenfield was managing IT in-house with limited resources, leading to slow response times and security gaps.", solution: "Became their fully managed IT partner — handling everything from help desk to infrastructure management.", results: [{ metric: "99.99%", label: "System Uptime" }, { metric: "30%", label: "Faster Issue Resolution" }, { metric: "24/7", label: "Support Coverage" }], duration: "Ongoing", icon: Clock },
  { industry: "Manufacturing", client: "Precision Manufacturing Co.", title: "Network Infrastructure Redesign for a Multi-Site Manufacturing Operation", challenge: "Inconsistent connectivity, slow data transfer, and no centralized network management across three plants.", solution: "Designed and deployed a high-availability SD-WAN solution connecting all sites with centralized management.", results: [{ metric: "3x", label: "Faster Data Transfer" }, { metric: "$180K", label: "Network Cost Savings" }, { metric: "Zero", label: "Unplanned Downtime" }], duration: "5 months", icon: Building2 },
  { industry: "Legal", client: "Harrison & Associates", title: "Cybersecurity & Compliance Program for a Law Firm", challenge: "Sensitive client data required stringent security measures and bar association compliance.", solution: "Implemented comprehensive cybersecurity including endpoint protection, DLP, awareness training, and quarterly pen testing.", results: [{ metric: "100%", label: "Compliance Score" }, { metric: "Zero", label: "Security Incidents" }, { metric: "92%", label: "Phishing Test Pass" }], duration: "3 months", icon: Shield },
  { industry: "Education", client: "Austin ISD", title: "K-12 Technology Modernization for 45 Schools Across the District", challenge: "Aging IT infrastructure across 45 schools with no centralized management.", solution: "Deployed centralized cloud management, modernized network infrastructure at every campus, and established dedicated help desk.", results: [{ metric: "45", label: "Schools Upgraded" }, { metric: "15K+", label: "Devices Managed" }, { metric: "4 hrs", label: "Avg. Support Response" }], duration: "14 months", icon: DollarSign },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

export default function CaseStudiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader title="Case Studies" subtitle="Real results from real businesses. See how we've helped organizations transform their technology." highlight="Studies" />

      <section ref={ref} className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-6">
            {caseStudies.map((study) => (
              <motion.div key={study.client} variants={fadeUp} whileHover={{ y: -4 }} className="group rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary-200 hover:shadow-[0_16px_48px_rgba(79,70,229,0.06)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-600">{study.industry}</span>
                    <h3 className="mt-3 font-display text-xl font-black tracking-tight text-obsidian sm:text-2xl">{study.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-custom/40">{study.client}</p>
                  </div>
                  <study.icon className="hidden h-8 w-8 shrink-0 text-primary-200 sm:block" />
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary-400 uppercase">Challenge</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-custom/60">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary-400 uppercase">Solution</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-custom/60">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-primary-100 pt-6">
                  {study.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-2xl font-black text-primary-600">{r.metric}</p>
                      <p className="text-xs text-slate-custom/40">{r.label}</p>
                    </div>
                  ))}
                  <div className="ml-auto"><p className="text-xs text-slate-custom/30">Duration: {study.duration}</p></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-obsidian py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0"><div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[140px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">Ready to Be Our Next <span className="text-gradient-primary">Success Story</span>?</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">Let&apos;s discuss how Etech can transform your IT infrastructure.</p>
            <div className="mt-8"><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]">Start Your Transformation<ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
