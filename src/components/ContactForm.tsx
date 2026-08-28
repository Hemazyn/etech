"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  Headphones,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "(512) 555-1234",
    href: "tel:+15125551234",
    secondary: "Mon–Fri, 8am–6pm CST",
    action: "Call Us",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@etechcomputerservices.com",
    href: "mailto:info@etechcomputerservices.com",
    secondary: "We respond within 2 hours",
    action: "Send Email",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Technology Drive, Suite 200",
    href: "https://maps.google.com/?q=123+Technology+Drive+Suite+200+Austin+TX+78701",
    secondary: "Austin, TX 78701",
    action: "Get Directions",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 8:00 AM – 6:00 PM",
    href: "#",
    secondary: "24/7 Emergency Support Available",
    action: null,
  },
];

const services = [
  "Managed IT Services",
  "Cloud Solutions",
  "Cybersecurity",
  "IT Consulting",
  "Network Infrastructure",
  "IT Support & Help Desk",
  "Data Center Services",
  "Data Management",
  "Business Communication",
  "Other",
];

function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm text-obsidian transition-all hover:bg-primary-50/50 focus:outline-none focus:ring-2 focus:ring-primary-100"
      >
        <span className={value ? "text-obsidian" : "text-slate-custom/35"}>
          {value || "Select a service..."}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-slate-custom/30 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-primary-100 bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
          >
            {services.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(s);
                    setOpen(false);
                  }}
                  className={`w-full rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors ${
                    value === s
                      ? "bg-primary-50 font-semibold text-primary-600"
                      : "text-obsidian hover:bg-primary-50/60"
                  }`}
                >
                  {s}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="grid gap-3 sm:grid-cols-2">
        {contactMethods.map((method, i) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl border border-primary-50 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.03)] transition-all hover:border-primary-100 hover:shadow-[0_8px_24px_rgba(79,70,229,0.06)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                <method.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] text-primary-400 uppercase">
                  {method.label}
                </p>
                <a
                  href={method.href}
                  className="mt-1 block truncate text-sm font-bold text-obsidian transition-colors hover:text-primary-600"
                >
                  {method.value}
                </a>
                <p className="mt-0.5 text-xs text-slate-custom/40">
                  {method.secondary}
                </p>
                {method.action && (
                  <a
                    href={method.href}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    {method.action}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Service Interest (optional) */}
      <div className="rounded-2xl border border-primary-50 bg-primary-50/30 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50">
            <Headphones className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-obsidian">
              Let us know what you need
            </h3>
            <p className="text-xs text-slate-custom/40">
              Select a service and we&apos;ll connect you with the right team.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[11px] font-bold tracking-[0.1em] text-obsidian uppercase">
            Service of Interest
          </label>
          <div className="mt-2">
            <CustomSelect
              value={selectedService}
              onChange={setSelectedService}
            />
          </div>
        </div>
      </div>

      {/* Response Promise */}
      <div className="flex items-center gap-3 rounded-xl bg-primary-50/40 px-4 py-3">
        <MessageSquare className="h-4 w-4 shrink-0 text-primary-500" />
        <p className="text-xs text-slate-custom/50">
          <span className="font-semibold text-obsidian">
            Fast response guaranteed.
          </span>{" "}
          Our team typically responds within 2 hours during business hours.
        </p>
      </div>
    </div>
  );
}
