"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Headphones, Globe, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(512) 555-1234",
    href: "tel:+15125551234",
    secondary: "Mon–Fri, 8am–6pm CST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@etechcomputerservices.com",
    href: "mailto:info@etechcomputerservices.com",
    secondary: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Technology Drive, Suite 200",
    href: "https://maps.google.com/?q=123+Technology+Drive+Suite+200+Austin+TX+78701",
    secondary: "Austin, TX 78701",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 8:00 AM – 6:00 PM",
    href: "#",
    secondary: "24/7 Emergency Support Available",
  },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader title="Get in Touch" subtitle="Have a question or ready to get started? Reach out and we'll respond within 2 hours." highlight="Touch" />

      <section ref={ref} className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Contact Methods */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }} className="lg:col-span-3">
              <div className="rounded-2xl border border-primary-50 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50">
                    <Headphones className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-black text-obsidian">How to Reach Us</h2>
                    <p className="text-sm text-slate-custom/40">Choose the method that works best for you</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {contactMethods.map((method, i) => (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                      className="group flex items-start gap-4 rounded-xl border border-primary-50 bg-white p-5 transition-all hover:border-primary-100 hover:shadow-[0_8px_24px_rgba(79,70,229,0.06)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                        <method.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-primary-400 uppercase">{method.label}</p>
                        <a href={method.href} className="mt-1 block truncate text-sm font-bold text-obsidian transition-colors hover:text-primary-600">
                          {method.value}
                        </a>
                        <p className="mt-0.5 text-xs text-slate-custom/40">{method.secondary}</p>
                        {method.href !== "#" && (
                          <a href={method.href} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700">
                            {method.label === "Call Us" ? "Call Now" : method.label === "Email Us" ? "Send Email" : "Get Directions"}
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Response Promise */}
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-primary-50/40 px-4 py-3">
                  <Globe className="h-4 w-4 shrink-0 text-primary-500" />
                  <p className="text-xs text-slate-custom/50">
                    <span className="font-semibold text-obsidian">Fast response guaranteed.</span>{" "}
                    Our team typically responds within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Map / Quick Actions */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }} className="lg:col-span-2">
              {/* Map placeholder */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="overflow-hidden rounded-2xl border border-primary-50 bg-primary-50/30">
                <div className="flex h-48 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-primary-200" />
                    <p className="mt-2 text-sm font-medium text-slate-custom/40">123 Technology Drive, Suite 200</p>
                    <p className="text-xs text-slate-custom/30">Austin, TX 78701</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }} className="mt-4 space-y-3">
                <Link href="/services" className="flex items-center justify-between rounded-xl border border-primary-50 bg-white p-4 transition-all hover:border-primary-100 hover:shadow-[0_8px_24px_rgba(79,70,229,0.06)]">
                  <div>
                    <p className="text-sm font-bold text-obsidian">Explore Our Services</p>
                    <p className="text-xs text-slate-custom/40">See what we can do for your business</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-400" />
                </Link>
                <Link href="/case-studies" className="flex items-center justify-between rounded-xl border border-primary-50 bg-white p-4 transition-all hover:border-primary-100 hover:shadow-[0_8px_24px_rgba(79,70,229,0.06)]">
                  <div>
                    <p className="text-sm font-bold text-obsidian">View Case Studies</p>
                    <p className="text-xs text-slate-custom/40">Real results from real clients</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-400" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
