import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Etech Computer Services cookie policy. Learn about the cookies we use and how to manage them.",
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on our website."
        highlight="Cookie"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-custom/70">
            <p className="text-xs text-slate-custom/40">
              Last updated: August 28, 2026
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help us understand how you use our site and
              improve your experience.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              2. Cookies We Use
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Essential cookies:</strong> Required for the website to
                function properly (e.g., session management, security).
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how
                visitors interact with our website (e.g., page views, traffic
                sources).
              </li>
              <li>
                <strong>Marketing cookies:</strong> Used to deliver relevant
                advertisements and track campaign performance.
              </li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              3. Managing Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings.
              Most browsers allow you to block or delete cookies. Note that
              disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              4. Third-Party Cookies
            </h2>
            <p>
              Some cookies are set by third-party services that appear on our
              pages, such as analytics providers. We do not control these
              cookies and recommend reviewing the respective privacy policies.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              5. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>

            <h2 className="mt-8 font-display text-xl font-black text-obsidian">
              6. Contact Us
            </h2>
            <p>
              Questions about our cookie practices? Contact us at{" "}
              <a
                href="mailto:info@etechcomputerservices.com"
                className="text-primary-600 underline"
              >
                info@etechcomputerservices.com
              </a>
              .
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
