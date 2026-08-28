import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Etech Computer Services terms of service. Read the terms governing your use of our services.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader
        title="Terms of Service"
        subtitle="The terms and conditions governing your use of our services."
        highlight="Terms"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-custom/70">
            <p className="text-xs text-slate-custom/40">
              Last updated: August 28, 2026
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services of Etech Computer Services
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              2. Services
            </h2>
            <p>
              Etech Computer Services provides managed IT services, cloud
              solutions, cybersecurity, IT consulting, and related technology
              services. Specific service details, scope, and pricing are defined
              in individual service agreements or statements of work.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              3. Service Level Agreements
            </h2>
            <p>
              For clients with active service agreements, uptime guarantees,
              response times, and support coverage are defined in the
              applicable SLA. Emergency support is available 24/7 for critical
              issues.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              4. Intellectual Property
            </h2>
            <p>
              All proprietary methodologies, tools, and materials developed by
              Etech remain our intellectual property unless explicitly
              transferred in writing. Client data and systems remain the
              property of the client at all times.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              5. Limitation of Liability
            </h2>
            <p>
              Etech Computer Services shall not be liable for indirect,
              incidental, or consequential damages. Our total liability shall
              not exceed the fees paid for the specific service giving rise to
              the claim during the twelve (12) months preceding the incident.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              6. Termination
            </h2>
            <p>
              Either party may terminate services with thirty (30) days
              written notice. Outstanding obligations, including data migration
              and transition assistance, will be handled per the termination
              clause in your service agreement.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of Texas. Any
              disputes shall be resolved in the courts of Travis County, Texas.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              8. Contact
            </h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:info@etechcomputerservices.com"
                className="text-primary-600 underline"
              >
                info@etechcomputerservices.com
              </a>{" "}
              or call (512) 555-1234.
            </p>
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
