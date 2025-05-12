"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { motion, AnimatePresence } from "framer-motion"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl"
          >
            <div className="sticky top-0 z-20 bg-gradient-to-r from-red-900 to-red-800 p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Book Your Service</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-white/80 mt-1">Fill out the form below and we'll get back to you shortly</p>
            </div>
            <div className="p-6">
              <BookingForm onComplete={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
