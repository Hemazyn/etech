"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Clock,
  Star,
  ShoppingCart,
  Wrench,
  Smartphone,
  HardDrive,
} from "lucide-react"
import Button from "@/components/Button"
import SectionDivider from "@/components/SectionDivider"

const services = [
  { icon: ShoppingCart, title: "Computer Sales", description: "New and refurbished computers, laptops, and peripherals tailored to your business needs." },
  { icon: Smartphone, title: "Mobile Device Sales", description: "Smartphones, tablets, and accessories from top brands with business pricing." },
  { icon: Wrench, title: "Computer Repairs", description: "Fast, reliable hardware and software repairs with same-day turnaround available." },
  { icon: HardDrive, title: "Data Recovery", description: "Retrieve lost data from damaged or failing drives with our specialized recovery tools." },
]

const typingWords = [
  "Computer Sales",
  "Expert Repairs",
  "Device Solutions",
  "Data Recovery",
  "Tech Support",
  "Business IT",
]

const stats = [
  { value: "1000+", label: "Devices Sold", icon: ShoppingCart },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Repairs Completed", icon: Wrench },
  { value: "24h", label: "Turnaround Time", icon: Zap },
]

const testimonials = [
  { name: "Sarah Mitchell", role: "Office Manager, Apex Financial", quote: "Etech helped us upgrade 50 workstations seamlessly. Their sales team found the perfect fit for our budget and needs.", rating: 5 },
  { name: "James Rodriguez", role: "Owner, Rodriguez Law Firm", quote: "My laptop crashed right before a major deadline. Etech had it repaired and back to me the same day. Lifesavers!", rating: 5 },
  { name: "Emily Chen", role: "Director, Greenfield Logistics", quote: "We buy all our equipment from Etech now. Great prices, honest advice, and their repair team is always responsive.", rating: 5 },
]

const whyChooseUs = [
  "Wide selection of new & refurbished computers",
  "Same-day repairs for most hardware issues",
  "Competitive pricing with no hidden fees",
  "15+ years of trusted service in Austin",
  "Data recovery from any storage device",
  "Expert advice to find the right fit for your budget",
]

// Typing text — premium typewriter effect
function TypingText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const typeSpeed = 65
  const deleteSpeed = 35
  const pauseEnd = 2200
  const pauseStart = 400

  const tick = useCallback(() => {
    const currentWord = typingWords[wordIndex]

    if (isPaused) return

    if (!isDeleting) {
      // Typing
      setText(currentWord.slice(0, text.length + 1))
      if (text.length + 1 === currentWord.length) {
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), pauseEnd)
        setIsDeleting(true)
      }
    } else {
      // Deleting
      setText(currentWord.slice(0, text.length - 1))
      if (text.length - 1 === 0) {
        setIsDeleting(false)
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setWordIndex((prev) => (prev + 1) % typingWords.length)
        }, pauseStart)
      }
    }
  }, [text, isDeleting, isPaused, wordIndex])

  useEffect(() => {
    if (isPaused) return
    const speed = isDeleting ? deleteSpeed : typeSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, isPaused])

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient-primary">{text}</span>
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.05em] bg-primary-500" style={{ animation: "blink 1s step-end infinite" }} />
    </span>
  )
}

// Hero — FAANG-level premium design
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-[max(800px,30vh)] items-center justify-center overflow-hidden">
      {/* Background — layered radial gradients, no noise */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 50%),
          radial-gradient(ellipse 60% 60% at 80% 50%, rgba(6,182,212,0.04) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(99,102,241,0.03) 0%, transparent 50%)
        `,
        }}
      />

      {/* Subtle dot grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.3]" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mb-8">
          <span className="border-primary-100 bg-primary-50/50 text-primary-600 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary-500 relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            Trusted by 500+ businesses nationwide
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="font-display text-obsidian text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] font-black tracking-[-0.03em]">
          Your trusted partner
          <br />
          in <TypingText />
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="text-slate-custom/50 mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
          Quality computer sales, expert repairs, and reliable tech solutions for businesses and individuals in Austin.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Services
          </Button>
        </motion.div>

        {/* Trust row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["No lock-in contracts", "Free initial assessment", "Same-day repairs available"].map((text, i) => (
            <motion.span key={text} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.1 }} className="text-slate-custom/40 flex items-center gap-2 text-xs font-medium">
              <CheckCircle2 className="text-primary-400 h-3.5 w-3.5" />
              {text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-white to-transparent" />

      {/* Blink keyframes */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

// Stats
function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-center gap-4 rounded-2xl border border-primary-100 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                <stat.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="font-display text-2xl font-black tracking-tight text-obsidian">{stat.value}</p>
                <p className="text-xs text-slate-custom/50 sm:text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services
function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
            What We Do
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl lg:text-5xl">
            Sales & Repairs <span className="text-primary-600">You Can Trust</span>
          </motion.h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary-200 hover:shadow-[0_16px_48px_rgba(79,70,229,0.08)]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary-500/0 transition-all duration-300 group-hover:bg-primary-500 group-hover:w-1.5" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                <service.icon className="h-6 w-6 text-primary-600 transition-transform group-hover:scale-110" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-lg font-black tracking-tight text-obsidian">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-custom/60">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 text-center">
          <Button href="/contact" variant="outline">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Why Choose Us
function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
              Why Choose Us
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
              Quality Gear, <span className="text-primary-600">Expert Repairs</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm leading-relaxed text-slate-custom/60 sm:text-base">
              With over 15 years serving Austin, we&apos;ve built a reputation for honest advice, quality equipment, and fast repairs that keep your business running.
            </motion.p>
            <div className="mt-8 space-y-3">
              {whyChooseUs.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: -25 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <span className="text-sm text-slate-custom/60">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.8 }} className="mt-8">
              <Button href="/contact">Get a Free Quote</Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}>
            <div className="rounded-2xl border border-primary-100 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
              <div className="space-y-6">
                {[
                  { icon: ShoppingCart, title: "Quality Equipment", desc: "New & refurbished computers from trusted brands" },
                  { icon: Clock, title: "Fast Turnaround", desc: "Same-day repairs for most issues" },
                  { icon: Users, title: "Trusted Since 2009", desc: "15+ years serving Austin businesses" },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                        <item.icon className="h-7 w-7 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-black text-obsidian">{item.title}</p>
                        <p className="text-sm text-slate-custom/50">{item.desc}</p>
                      </div>
                    </div>
                    {i < 2 && <div className="my-4 h-px bg-primary-100" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
            Testimonials
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
            What Our Clients <span className="text-primary-600">Say</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all hover:shadow-[0_12px_40px_rgba(79,70,229,0.06)] sm:p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-custom/70 sm:text-base">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-obsidian">{t.name}</p>
                  <p className="text-xs text-slate-custom/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-primary-400/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Upgrade <span className="text-gradient-primary">Your Tech</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="mt-5 text-base leading-relaxed text-slate-300">
            Whether you need new equipment or a quick repair, we&apos;re here to help. Get a free quote today.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+15125551234" className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">
              Or call (512) 555-1234
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Export
export default function HomeContent() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <SectionDivider variant="dot" />
      <StatsBar />
      <SectionDivider variant="gradient" />
      <ServicesGrid />
      <SectionDivider variant="dot" />
      <WhyChooseUs />
      <SectionDivider variant="gradient" />
      <Testimonials />
      <CTASection />
    </div>
  )
}
