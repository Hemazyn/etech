import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "SLA Agreement",
  description:
    "Etech Computer Services service level agreement. Our commitment to uptime, response times, and support.",
};

const tiers = [
  {
    name: "Essential",
    uptime: "99.9%",
    response: "4 hours",
    resolution: "24 hours",
    support: "Business hours (M-F)",
    monitoring: "8×5",
  },
  {
    name: "Professional",
    uptime: "99.95%",
    response: "2 hours",
    resolution: "12 hours",
    support: "Extended hours (M-Sat)",
    monitoring: "16×7",
  },
  {
    name: "Enterprise",
    uptime: "99.99%",
    response: "15 minutes",
    resolution: "4 hours",
    support: "24/7/365",
    monitoring: "24×7",
  },
];

export default function SLAPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader
        title="SLA Agreement"
        subtitle="Our service level commitments and support guarantees for every engagement tier."
        highlight="SLA"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* SLA Tiers */}
          <div className="overflow-hidden rounded-2xl border border-primary-100">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-primary-100 bg-primary-50/50">
                    <th className="px-6 py-4 text-[11px] font-bold tracking-[0.15em] text-obsidian uppercase">
                      Metric
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.name}
                        className="px-6 py-4 text-[11px] font-bold tracking-[0.15em] text-primary-600 uppercase"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50">
                  {[
                    { label: "Guaranteed Uptime", key: "uptime" as const },
                    { label: "Initial Response", key: "response" as const },
                    {
                      label: "Target Resolution",
                      key: "resolution" as const,
                    },
                    { label: "Support Hours", key: "support" as const },
                    { label: "Monitoring", key: "monitoring" as const },
                  ].map((row) => (
                    <tr key={row.label} className="transition-colors hover:bg-primary-50/30">
                      <td className="px-6 py-4 font-semibold text-obsidian">
                        {row.label}
                      </td>
                      {tiers.map((tier) => (
                        <td
                          key={tier.name}
                          className="px-6 py-4 text-slate-custom/60"
                        >
                          {tier[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate mt-16 max-w-none text-sm leading-relaxed text-slate-custom/70">
            <h2 className="font-display text-xl font-black text-obsidian">
              1. Uptime Guarantee
            </h2>
            <p>
              Etech Computer Services guarantees system availability as defined
              in your service tier. Uptime is measured on a monthly basis,
              excluding scheduled maintenance windows communicated at least 72
              hours in advance.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              2. Response & Resolution Times
            </h2>
            <p>
              Response times begin when a support ticket is opened. Severity
              levels are classified as:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Critical (P1):</strong> Complete service outage or
                security breach. Immediate response.
              </li>
              <li>
                <strong>High (P2):</strong> Major functionality impaired.
                Response within your tier commitment.
              </li>
              <li>
                <strong>Medium (P3):</strong> Partial functionality loss.
                Next business day response.
              </li>
              <li>
                <strong>Low (P4):</strong> General inquiries and feature
                requests. Within 48 hours.
              </li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              3. Service Credits
            </h2>
            <p>
              If uptime falls below the guaranteed threshold, clients are
              eligible for service credits:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>99.0% – 99.9%: 5% credit on monthly fees</li>
              <li>95.0% – 99.0%: 10% credit on monthly fees</li>
              <li>Below 95.0%: 25% credit on monthly fees</li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              4. Scheduled Maintenance
            </h2>
            <p>
              Routine maintenance is performed during off-peak hours
              (Saturday 10 PM – Sunday 6 AM CST). Emergency maintenance may
              occur at any time with as much advance notice as practical.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              5. Escalation Process
            </h2>
            <p>
              Issues unresolved within the target resolution time are
              automatically escalated:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Level 1: Support Engineer</li>
              <li>Level 2: Senior Engineer</li>
              <li>Level 3: Engineering Manager</li>
              <li>Level 4: Director of Operations</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-primary-100 pt-8">
            <Link
              href="/contact"
              className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              ← Back to Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
