"use client"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import HomeContent from "./HomeContent"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  // Hide footer during loading
  useEffect(() => {
    const footer = document.querySelector("footer")
    if (footer) footer.style.display = loading ? "none" : ""
    return () => {
      if (footer) footer.style.display = ""
    }
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">{loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}</AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ pointerEvents: loading ? "none" : "auto" }}>
        <HomeContent />
      </motion.div>
    </>
  )
}
