"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={link}>
      <Card
        className={cn(
          "overflow-hidden transition-all duration-500 group border-0 shadow-lg h-full",
          isHovered ? "bg-gradient-to-br from-red-50 to-white transform -translate-y-2" : "bg-white",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 h-full flex flex-col">
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
              isHovered ? "bg-red-900 text-white shadow-lg" : "bg-red-100 text-red-900",
            )}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <div
            className={cn(
              "flex items-center text-red-900 font-medium transition-all duration-300",
              isHovered ? "translate-x-2" : "translate-x-0",
            )}
          >
            <span>Learn more</span>
            <ArrowRight
              className={cn("ml-2 h-4 w-4 transition-all duration-300", isHovered ? "translate-x-1" : "translate-x-0")}
            />
          </div>

          <div
            className={cn(
              "absolute bottom-0 left-0 h-1 bg-red-900 transition-all duration-500",
              isHovered ? "w-full" : "w-0",
            )}
          ></div>
        </CardContent>
      </Card>
    </Link>
  )
}
