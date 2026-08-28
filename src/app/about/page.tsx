"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Users, Shield, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";

const values = [
  { icon: Shield, title: "Reliability", description: "We deliver on our promises with consistent, dependable service that your business can count on." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of technology trends to bring you cutting-edge solutions that drive competitive advantage." },
  { icon: Users, title: "Partnership", description: "Your success is our success. We build long-term relationships based on trust and mutual growth." },
  { icon: Heart, title: "Integrity", description: "We operate with transparency and honesty, always putting your business interests first." },
];

const team = [
  { name: "Michael Torres", role: "Founder & CEO", bio: "15+ years in IT leadership. Former VP of Technology at a Fortune 500 company." },
  { name: "Rachel Kim", role: "Director of Operations", bio: "Expert in IT service delivery and process optimization with 12 years of experience." },
  { name: "David Okafor", role: "Head of Cybersecurity", bio: "CISSP and CISM certified. Previously led security operations at a major financial institution." },
  { name: "Lisa Patel", role: "Cloud Solutions Architect", bio: "AWS and Azure certified architect with extensive experience in enterprise cloud migrations." },
  { name: "James Mitchell", role: "Senior Network Engineer", bio: "CCIE certified with deep expertise in enterprise networking and infrastructure design." },
  { name: "Anna Rodriguez", role: "Client Success Manager", bio: "Dedicated to ensuring every client achieves maximum value from their IT investments." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader title="About Etech Computer Services" subtitle="Empowering businesses through technology since 2009. We're more than an IT provider — we're your technology partner." />

      {/* Story */}
      <section ref={storyRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}>
              <p className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Our Story</p>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
                Started with a Mission to <span className="text-primary-600">Simplify IT</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-custom/60">
                <p>Founded in 2009 by Michael Torres, Etech Computer Services began with a simple idea: businesses deserve IT partners who speak their language, not just technical jargon.</p>
                <p>What started as a small consulting firm in Austin, Texas has grown into a full-service IT solutions provider serving over 500 clients across healthcare, finance, logistics, and more.</p>
                <p>Our team of 50+ certified engineers brings deep expertise across all major platforms, ensuring that every solution we deliver is tailored to your unique business needs.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Clients Served", variant: "primary" as const },
                  { value: "15+", label: "Years in Business", variant: "dark" as const },
                  { value: "50+", label: "Certified Engineers", variant: "dark" as const },
                  { value: "99.9%", label: "Client Retention", variant: "primary" as const },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.85 }} animate={storyInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const }} className={`flex flex-col items-center justify-center rounded-2xl p-6 text-center ${stat.variant === "primary" ? "bg-primary-50" : "bg-obsidian"}`}>
                    <p className={`font-display text-4xl font-black ${stat.variant === "primary" ? "text-primary-600" : "text-white"}`}>{stat.value}</p>
                    <p className={`mt-1 text-sm font-medium ${stat.variant === "primary" ? "text-slate-custom/90" : "text-slate-300"}`}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="dot" />

      {/* Mission & Vision */}
      <section ref={missionRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={missionInView ? "visible" : "hidden"} className="grid gap-8 sm:grid-cols-2">
            {[
              { icon: Target, title: "Our Mission", desc: "To empower businesses of all sizes with reliable, innovative, and cost-effective IT solutions that drive growth and operational excellence." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted IT partner for businesses navigating digital transformation, where technology seamlessly enables every business to reach its full potential." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl border border-primary-100 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(79,70,229,0.06)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50">
                  <item.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mt-6 font-display text-xl font-black text-obsidian">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-custom/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Values */}
      <section ref={valuesRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Our Values</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
              What Drives <span className="text-primary-600">Us</span>
            </motion.h2>
          </div>
          <motion.div variants={stagger} initial="hidden" animate={valuesInView ? "visible" : "hidden"} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl border border-primary-100 bg-white p-6 text-center shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(79,70,229,0.06)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-obsidian">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-custom/60">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="dot" />

      {/* Team */}
      <section ref={teamRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Leadership</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
              Meet Our <span className="text-primary-600">Team</span>
            </motion.h2>
          </div>
          <motion.div variants={stagger} initial="hidden" animate={teamInView ? "visible" : "hidden"} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(79,70,229,0.06)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-lg font-black text-primary-700">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-black text-obsidian">{member.name}</h3>
                <p className="text-sm font-bold text-primary-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-custom/60">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-obsidian py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">Work With <span className="text-gradient-primary">Us</span></h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">Ready to experience the Etech difference? Let&apos;s start a conversation about your IT needs.</p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
