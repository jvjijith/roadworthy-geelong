"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export interface ServiceDetails {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  features: string[]
  price?: string
}

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceDetails | null
  onBookNow: () => void
}

export function ServiceModal({ isOpen, onClose, service, onBookNow }: ServiceModalProps) {
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

  if (!isMounted || !service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl mt-16 md:mt-0"
          >
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <Image src={service.image || "/images/workshop.jpg"} alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  {service.price && <p className="text-white/80 text-lg">Starting from {service.price}</p>}
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-red-900 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                  onClick={() => {
                    onClose()
                    onBookNow()
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
