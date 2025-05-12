"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { BookingModal } from "@/components/booking-modal"
import { PageHeader } from "@/components/page-header"
import {
  ArrowRight,
  Car,
  Wrench,
  FileCheck,
  ThermometerSnowflake,
  Zap,
  Gauge,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ModernNav />

      {/* Page Header */}
      <section className="min-h-[80vh] relative overflow-hidden">
  {/* Dynamic Background with Parallax Effect */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="absolute w-full h-full object-cover"
    >
      <source src="/videos/workshop-bg.mp4" type="video/mp4" />
    </video>
    {/* Updated gradient overlay to match reddish theme */}
    <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-red-900/20 to-black/90 z-20"></div>
  </div>
  
  {/* Updated Animated Geometric Elements with more red tones */}
  <div className="absolute inset-0 z-10">
    <div className="absolute top-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-red-700/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-40 sm:w-80 h-40 sm:h-80 bg-red-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/3 right-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
  
  {/* Floating Particles - updated to red tint */}
  <div className="absolute inset-0 z-10">
    {Array.from({ length: 20 }).map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-red-200 rounded-full opacity-30"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 7}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      ></div>
    ))}
  </div>
  
  {/* Content Container */}
  <div className="relative z-30 container mx-auto px-4 md:px-6 pt-20 sm:pt-28 md:pt-40 pb-20 sm:pb-24 md:pb-32 flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full"
    >
      <span className="block text-xs sm:text-sm md:text-base uppercase tracking-widest text-red-400 font-medium mb-2 sm:mb-4 text-center">
        Professional Auto Care
      </span>
      
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-center mb-4 sm:mb-6 leading-tight">
          Our <span className="relative inline-block">
            <span className="relative z-10">Services</span>
          </span>
        </h1>
        
        {/* Updated divider with stronger red */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-4 sm:mb-8"
        ></motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-base sm:text-xl md:text-2xl text-white/90 text-center max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed"
      >
        Comprehensive automotive services to keep your vehicle in peak condition
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col xs:flex-row gap-3 sm:gap-5 justify-center"
      >
        {/* Updated button colors to match the red theme */}
        <Button
          size="lg"
          className="group relative px-4 sm:px-8 py-3 sm:py-4 bg-red-800 hover:bg-red-900 text-white text-sm sm:text-base font-medium rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full xs:w-auto"
          onClick={() => setIsBookingModalOpen(true)}
        >
          <span className="relative z-10 flex items-center justify-center">
            Book a Service
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </Button>
        
        <Button
          size="lg" 
          variant="outline"
          className="group relative px-4 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500/30 hover:border-red-500/80 text-white text-sm sm:text-base font-medium rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm w-full xs:w-auto"
          asChild
        >
          <Link href="/pricing">
            <span className="relative z-10 flex items-center justify-center">
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
    
    {/* Scroll Indicator - updated to match red theme */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex"
    >
      <span className="text-white/70 text-xs sm:text-sm mb-2">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-red-500/30 rounded-full flex justify-center pt-1"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-600 rounded-full"
        ></motion.div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Stats Bar - updated to match the red theme */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-950/90 to-red-900/90 backdrop-blur-md z-30 py-4 sm:py-6 border-t border-red-500/20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        <div className="text-center">
          <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">6+</div>
          <div className="text-white/70 text-xs sm:text-sm">Service Types</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">10k+</div>
          <div className="text-white/70 text-xs sm:text-sm">Vehicles Serviced</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">100%</div>
          <div className="text-white/70 text-xs sm:text-sm">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">24h</div>
          <div className="text-white/70 text-xs sm:text-sm">Fast Turnaround</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Add this to your global CSS for the floating animation */}
  <style jsx global>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translateY(-20px) scale(1.5);
        opacity: 0.1;
      }
    }
    
    /* Add a custom breakpoint for extra small screens */
    @media (min-width: 480px) {
      .xs\\:flex-row {
        flex-direction: row;
      }
      .xs\\:w-auto {
        width: auto;
      }
    }
  `}</style>
</section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">
                Comprehensive Automotive Services
              </h2>
              <p className="text-gray-600">
                At GCS Autocare Grovedale, we offer a wide range of automotive services to keep your vehicle running
                smoothly and safely.
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 p-1 bg-gray-100 rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  All Services
                </TabsTrigger>
                <TabsTrigger
                  value="inspection"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Inspections
                </TabsTrigger>
                <TabsTrigger
                  value="maintenance"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Maintenance
                </TabsTrigger>
                <TabsTrigger
                  value="repairs"
                  className="rounded-full data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all duration-300"
                >
                  Repairs
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0.1}>
                  <ServiceCard
                    icon={<Car className="h-10 w-10" />}
                    title="Roadworthy Inspection"
                    description="Comprehensive vehicle inspections ensuring your car meets all safety standards."
                    link="/services/roadworthy"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <ServiceCard
                    icon={<Wrench className="h-10 w-10" />}
                    title="General Mechanical Services"
                    description="Complete mechanical repairs and maintenance for all vehicle makes and models."
                    link="/services/mechanical"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <ServiceCard
                    icon={<FileCheck className="h-10 w-10" />}
                    title="Logbook Service"
                    description="Manufacturer-specified servicing to maintain your new car warranty."
                    link="/services/logbook"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <ServiceCard
                    icon={<ThermometerSnowflake className="h-10 w-10" />}
                    title="Car AC Regas"
                    description="Air conditioning service and regas to keep your vehicle cool and comfortable."
                    link="/services/ac"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <ServiceCard
                    icon={<Zap className="h-10 w-10" />}
                    title="EV Services"
                    description="Specialized maintenance and repairs for electric and hybrid vehicles."
                    link="/services/ev"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <ServiceCard
                    icon={<Gauge className="h-10 w-10" />}
                    title="Tyre Change & Wheel Balancing"
                    description="Professional tyre fitting and wheel balancing for optimal performance and safety."
                    link="/services/tyres"
                  />
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="inspection" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0.1}>
                  <ServiceCard
                    icon={<Car className="h-10 w-10" />}
                    title="Roadworthy Inspection"
                    description="Comprehensive vehicle inspections ensuring your car meets all safety standards."
                    link="/services/roadworthy"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <ServiceCard
                    icon={<Gauge className="h-10 w-10" />}
                    title="Pre-Purchase Inspection"
                    description="Detailed inspection before buying a used car to identify any potential issues."
                    link="/services/pre-purchase"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <ServiceCard
                    icon={<FileCheck className="h-10 w-10" />}
                    title="Safety Inspection"
                    description="Thorough safety check to ensure your vehicle is safe to drive on the road."
                    link="/services/safety"
                  />
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0.1}>
                  <ServiceCard
                    icon={<FileCheck className="h-10 w-10" />}
                    title="Logbook Service"
                    description="Manufacturer-specified servicing to maintain your new car warranty."
                    link="/services/logbook"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <ServiceCard
                    icon={<ThermometerSnowflake className="h-10 w-10" />}
                    title="Car AC Regas"
                    description="Air conditioning service and regas to keep your vehicle cool and comfortable."
                    link="/services/ac"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <ServiceCard
                    icon={<Gauge className="h-10 w-10" />}
                    title="Tyre Change & Wheel Balancing"
                    description="Professional tyre fitting and wheel balancing for optimal performance and safety."
                    link="/services/tyres"
                  />
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="repairs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0.1}>
                  <ServiceCard
                    icon={<Wrench className="h-10 w-10" />}
                    title="General Mechanical Services"
                    description="Complete mechanical repairs and maintenance for all vehicle makes and models."
                    link="/services/mechanical"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <ServiceCard
                    icon={<Zap className="h-10 w-10" />}
                    title="EV Services"
                    description="Specialized maintenance and repairs for electric and hybrid vehicles."
                    link="/services/ev"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <ServiceCard
                    icon={<Car className="h-10 w-10" />}
                    title="Brake & Clutch Repairs"
                    description="Expert repair and replacement of brake and clutch components for optimal safety."
                    link="/services/brakes"
                  />
                </ScrollReveal>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">
                  Roadworthy Inspections
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our comprehensive roadworthy inspections ensure your vehicle meets all safety standards required by
                    VicRoads.
                  </p>
                  <p>
                    Whether you're selling your vehicle, re-registering it, or transferring ownership, our licensed
                    vehicle testers will provide a thorough inspection and issue a roadworthy certificate if your
                    vehicle passes.
                  </p>
                  <p>
                    If your vehicle doesn't pass, we'll provide a detailed report of the issues that need to be
                    addressed and can perform the necessary repairs to get your vehicle roadworthy.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Licensed Vehicle Testers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Quick Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-900 h-5 w-5" />
                    <span>Competitive Pricing</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button
                    className="bg-red-900 hover:bg-red-800 group relative overflow-hidden"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    <span className="relative z-10 flex items-center">
                      Book Inspection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
                    asChild
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-100 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/workshop.jpg"
                    alt="Roadworthy Inspection"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Our Service Process</h2>
              <p className="text-gray-600">
                We follow a streamlined process to ensure your vehicle receives the best care possible.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
                <p className="text-gray-600">Schedule your service online or by phone at a time that suits you.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vehicle Inspection</h3>
                <p className="text-gray-600">Our technicians perform a thorough inspection of your vehicle.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Service & Repairs</h3>
                <p className="text-gray-600">We perform the necessary services or repairs with your approval.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-900"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vehicle Return</h3>
                <p className="text-gray-600">We return your vehicle in optimal condition with a detailed report.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Book Your Service?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule your appointment today and experience the GCS Autocare Grovedale difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-900 hover:bg-gray-100"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <Image
                    src="/images/logo.png"
                    alt="GCS Autocare Grovedale Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold">GCS Autocare Grovedale</span>
              </div>
              <p className="text-gray-400 mb-6">
                Professional vehicle inspections and mechanical services with a commitment to quality and customer
                satisfaction.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-900"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-900"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services/roadworthy" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Roadworthy Inspection
                  </Link>
                </li>
                <li>
                  <Link href="/services/mechanical" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Mechanical Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/logbook" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Logbook Service
                  </Link>
                </li>
                <li>
                  <Link href="/services/ac" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    Car AC Regas
                  </Link>
                </li>
                <li>
                  <Link href="/services/ev" className="text-gray-300 hover:text-white flex items-center group">
                    <span className="w-2 h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                    EV Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-900"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>4/32 Essington St, Grovedale VIC 3216</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500 shrink-0" />
                  <a href="tel:0352705676" className="hover:text-red-500 transition-colors duration-300">
                    03 5270 5676
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500 shrink-0" />
                  <a href="tel:0490090995" className="hover:text-red-500 transition-colors duration-300">
                    0490 090 995
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-500 shrink-0" />
                  <a
                    href="mailto:info@roadworthygeelong.com.au"
                    className="hover:text-red-500 transition-colors duration-300"
                  >
                    info@roadworthygeelong.com.au
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-500 shrink-0" />
                  <span>Mon-Fri: 8am-5pm | Sat: 8am-12pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} GCS Autocare Grovedale. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-100">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-900 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-red-900 font-medium">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
