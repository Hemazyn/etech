"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const blogPosts = [
  { title: "10 Signs Your Business Needs a Managed IT Provider", excerpt: "Is your internal IT team overwhelmed? Here are the key indicators it's time to partner with a managed IT services provider.", category: "Managed IT", date: "Aug 20, 2025", readTime: "5 min read", featured: true },
  { title: "The Real Cost of a Data Breach in 2025", excerpt: "With cyber threats evolving rapidly, we break down the true financial and reputational cost of a data breach.", category: "Cybersecurity", date: "Aug 15, 2025", readTime: "7 min read", featured: true },
  { title: "Cloud Migration Checklist: What to Know Before You Move", excerpt: "Moving to the cloud? Use this comprehensive checklist for a smooth, secure, and cost-effective migration.", category: "Cloud", date: "Aug 10, 2025", readTime: "6 min read", featured: false },
  { title: "How to Build an Effective IT Disaster Recovery Plan", excerpt: "A step-by-step guide to creating a disaster recovery plan that minimizes downtime and protects critical data.", category: "IT Strategy", date: "Aug 5, 2025", readTime: "8 min read", featured: false },
  { title: "Why Zero Trust Architecture is No Longer Optional", excerpt: "Traditional perimeter security is dead. Learn why zero trust is now the standard for modern businesses.", category: "Cybersecurity", date: "Jul 30, 2025", readTime: "6 min read", featured: false },
  { title: "5 Ways IT Consulting Can Accelerate Your Growth", excerpt: "Strategic IT consulting isn't just for enterprises. Discover how SMBs can leverage consulting for competitive advantage.", category: "IT Strategy", date: "Jul 25, 2025", readTime: "4 min read", featured: false },
];

const categories = ["All Posts", "Managed IT", "Cybersecurity", "Cloud", "IT Strategy"];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

export default function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filtered = activeCategory === "All Posts" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen bg-white">
      <PageHeader title="Blog & Insights" subtitle="Expert perspectives on IT services, cybersecurity, cloud computing, and business technology strategy." highlight="Insights" />

      <section ref={ref} className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${activeCategory === cat ? "bg-primary-600 text-white shadow-[0_2px_8px_rgba(79,70,229,0.25)]" : "border border-primary-100 bg-white text-slate-custom/60 hover:border-primary-300 hover:text-obsidian"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Posts */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {featured.length > 0 && (
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {featured.map((post) => (
                    <motion.article key={post.title} variants={fadeUp} initial="hidden" animate="visible" whileHover={{ y: -6 }} className="group rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary-200 hover:shadow-[0_16px_48px_rgba(79,70,229,0.06)] sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-600"><Tag className="h-3 w-3" />{post.category}</span>
                        <span className="rounded-full bg-primary-600 px-3 py-1 text-[11px] font-bold text-white">Featured</span>
                      </div>
                      <h2 className="mt-4 font-display text-xl font-black tracking-tight text-obsidian transition-colors group-hover:text-primary-600">{post.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-custom/60">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-slate-custom/40">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 transition-colors group-hover:text-primary-700">Read More<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}

              {regular.length > 0 && (
                <div className={`${featured.length > 0 ? "mt-8" : "mt-10"} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
                  {regular.map((post) => (
                    <motion.article key={post.title} variants={fadeUp} initial="hidden" animate="visible" whileHover={{ y: -6 }} className="group rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary-200 hover:shadow-[0_16px_48px_rgba(79,70,229,0.06)]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary-50/60 px-3 py-1 text-[11px] font-bold text-primary-600/80"><Tag className="h-3 w-3" />{post.category}</span>
                      <h3 className="mt-3 font-display text-lg font-black tracking-tight text-obsidian transition-colors group-hover:text-primary-600">{post.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-custom/60">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-slate-custom/40">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
