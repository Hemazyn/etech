"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import HomeContent from "./HomeContent"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}</AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <HomeContent />
        </motion.div>
      )}
    </>
  )
}
