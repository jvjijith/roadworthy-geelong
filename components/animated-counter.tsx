"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
}

export function AnimatedCounter({ end, duration = 2, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const startValue = 0
    const endValue = end

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Delay start if needed
    const delayTimeout = setTimeout(() => {
      timerRef.current = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)

        // Easing function for smoother animation
        const easeOutQuad = (t: number) => t * (2 - t)
        const easedProgress = easeOutQuad(progress)

        countRef.current = Math.floor(startValue + (endValue - startValue) * easedProgress)
        setCount(countRef.current)

        if (progress === 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current)
          }
        }
      }, 16) // ~60fps
    }, delay * 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      clearTimeout(delayTimeout)
    }
  }, [end, duration, delay, isInView])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  )
}
