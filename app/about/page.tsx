"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernNav } from "@/components/modern-nav"
import { ArrowRight, CheckCircle, Users, Award, Clock, PenToolIcon as Tool } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ModernNav />

      {/* Hero Section */}
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
  
  {/* Updated Animated Geometric Elements with more red tones - responsive sizes */}
  <div className="absolute inset-0 z-10">
    <div className="absolute top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-red-700/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-red-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/3 right-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
  
  {/* Floating Particles - updated to red tint */}
  <div className="absolute inset-0 z-10 hidden sm:block">
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
  
  {/* Content Container - improved responsive padding */}
  <div className="relative z-30 container mx-auto px-4 md:px-6 pt-28 sm:pt-32 md:pt-40 pb-24 sm:pb-28 md:pb-32 flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full"
    >
      <span className="block text-xs sm:text-sm md:text-base uppercase tracking-widest text-red-400 font-medium mb-2 sm:mb-4 text-center">
        Established 2008
      </span>
      
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-center mb-4 sm:mb-6 leading-tight">
          About <span className="relative inline-block">
            <span className="relative z-10">GCS Autocare</span>
          </span> Grovedale
        </h1>
        
        {/* Updated divider with stronger red */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xl mx-auto mb-4 sm:mb-8"
        ></motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-base sm:text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
      >
        Your trusted partner for vehicle inspections and mechanical services in Geelong since 2008
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center w-full max-w-md sm:max-w-none mx-auto"
      >
        {/* Updated button colors to match the red theme */}
        <a 
          href="#our-story" 
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
        >
          <span className="relative z-10 flex items-center justify-center">
            Our Story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </a>
        
        <a 
          href="/services" 
          className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500/30 hover:border-red-500/80 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm text-center"
        >
          <span className="relative z-10 flex items-center justify-center">
            Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </motion.div>
    </motion.div>
    
    {/* Scroll Indicator - updated to match red theme - hidden on small screens */}
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
  
  {/* Stats Bar - updated to match the red theme and be responsive */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-950/90 to-red-900/90 backdrop-blur-md z-30 py-4 sm:py-6 border-t border-red-500/20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">15+</div>
          <div className="text-white/70 text-xs sm:text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">10k+</div>
          <div className="text-white/70 text-xs sm:text-sm">Vehicles Serviced</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">5</div>
          <div className="text-white/70 text-xs sm:text-sm">Expert Mechanics</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0 sm:mb-1">4.9</div>
          <div className="text-white/70 text-xs sm:text-sm">Customer Rating</div>
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
  `}</style>
</section>

      {/* Our Story Section - Added ID for scroll target */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    GCS Autocare Grovedale was founded in 2008 with a simple mission: to provide honest, reliable, and
                    professional vehicle inspection and mechanical services to the Geelong community.
                  </p>
                  <p>
                    What started as a small workshop with just two mechanics has grown into a trusted name in the
                    automotive industry, serving thousands of satisfied customers across Geelong and surrounding areas.
                  </p>
                  <p>
                    Our team of experienced technicians is committed to delivering exceptional service, using the latest
                    diagnostic equipment and techniques to ensure your vehicle is safe, reliable, and performing at its
                    best.
                  </p>
                </div>
                <div className="mt-8">
                  <Button className="bg-red-900 hover:bg-red-800 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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
                    src="/images/our-story.avif"
                    alt="GCS Autocare Grovedale Workshop"
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

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Our Values</h2>
              <p className="text-gray-600">
                At GCS Autocare Grovedale, our values guide everything we do. We're committed to providing exceptional
                service with integrity, expertise, and a customer-first approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600 flex-grow">
                  We believe in honest communication and transparent pricing. No hidden fees, no unnecessary repairs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600 flex-grow">
                  Your satisfaction is our priority. We go above and beyond to ensure you receive exceptional service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600 flex-grow">
                  We strive for excellence in everything we do, from customer service to technical expertise.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p className="text-gray-600 flex-grow">
                  We respect your time and work efficiently to get you back on the road as quickly as possible.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                Our experienced team of certified mechanics and technicians is dedicated to providing you with the
                highest quality service.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-64 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="John Smith" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Smith</h3>
                  <p className="text-red-900 font-medium mb-3">Lead Mechanic</p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience, John leads our team of mechanics and specializes in diagnostic
                    troubleshooting.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tool className="h-4 w-4 mr-2" />
                    <span>Certified Master Technician</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-red-900 font-medium mb-3">Service Manager</p>
                  <p className="text-gray-600 mb-4">
                    Sarah ensures that all services are completed to the highest standards and oversees customer
                    satisfaction.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tool className="h-4 w-4 mr-2" />
                    <span>Customer Service Specialist</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Michael Brown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Brown</h3>
                  <p className="text-red-900 font-medium mb-3">EV Specialist</p>
                  <p className="text-gray-600 mb-4">
                    Michael specializes in electric and hybrid vehicles, keeping up with the latest technologies and
                    service techniques.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tool className="h-4 w-4 mr-2" />
                    <span>EV Certified Technician</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white">
              View All Team Members
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Book your vehicle inspection or service today and see why GCS Autocare Grovedale is the trusted choice for
                vehicle care in Geelong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100">
                  Book an Appointment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/10">
                  Contact Us
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
                    className="text-red-500 mt-0.5 shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>4/32 Essington St, Grovedale VIC 3216</span>
                </li>
                <li className="flex items-center gap-3">
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
                    className="text-red-500 shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:0352705676" className="hover:text-red-500 transition-colors duration-300">
                    03 5270 5676
                  </a>
                </li>
                <li className="flex items-center gap-3">
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
                    className="text-red-500 shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:0490090995" className="hover:text-red-500 transition-colors duration-300">
                    0490 090 995
                  </a>
                </li>
                <li className="flex items-center gap-3">
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
                    className="text-red-500 shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a
                    href="mailto:info@roadworthygeelong.com.au"
                    className="hover:text-red-500 transition-colors duration-300"
                  >
                    info@roadworthygeelong.com.au
                  </a>
                </li>
                <li className="flex items-center gap-3">
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
                    className="text-red-500 shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
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
    </div>
  )
}
