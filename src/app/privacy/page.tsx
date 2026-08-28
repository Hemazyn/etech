import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Etech Computer Services privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        highlight="Privacy"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-custom/70">
            <p className="text-xs text-slate-custom/40">
              Last updated: August 28, 2026
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              1. Information We Collect
            </h2>
            <p>
              At Etech Computer Services, we collect information you provide
              directly to us, such as when you fill out a contact form, request
              a consultation, or subscribe to our newsletter. This may include:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and job title</li>
              <li>Service interests and project requirements</li>
              <li>Payment and billing information (for active clients)</li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you relevant IT insights and company updates</li>
              <li>Process transactions and manage your account</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our business,
              subject to confidentiality agreements.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:info@etechcomputerservices.com"
                className="text-primary-600 underline"
              >
                info@etechcomputerservices.com
              </a>
              .
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Email: info@etechcomputerservices.com</li>
              <li>Phone: (512) 555-1234</li>
              <li>
                Address: 123 Technology Drive, Suite 200, Austin, TX 78701
              </li>
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
