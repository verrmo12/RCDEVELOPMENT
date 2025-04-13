"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code, Layers, User, Mail, FileText, Scale, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const pathname = usePathname()

  // Track if we're on the homepage
  const isHomePage = pathname === "/"

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Only track sections on the homepage
      if (isHomePage) {
        // Get all sections
        const sections = ["services-section", "projects-section", "about-section", "contact-section"]

        // Find which section is currently in view
        let currentSection = ""
        let minDistance = Number.MAX_VALUE

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId)
          if (section) {
            const rect = section.getBoundingClientRect()
            // Calculate distance from the top of the viewport to the section
            // We want the section that is closest to the top but still visible
            const distance = Math.abs(rect.top)

            // If this section is closer to the top of the viewport than the previous closest
            if (distance < minDistance && rect.top <= 100) {
              minDistance = distance
              currentSection = sectionId
            }
          }
        })

        // If we're at the top of the page, set home as active
        if (window.scrollY < 100) {
          setActiveSection("")
        } else if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Handle section scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)

    // If we're on the homepage, scroll to the section
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(sectionId)
      }
    } else {
      // If we're on another page, navigate to homepage with the section hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity">
            <div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-white font-bold text-sm">RC</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-red-500/30 animate-pulse"></div>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
              RCDEVELOPMENT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem
              href="/"
              label="Home"
              icon={<Home className="h-4 w-4" />}
              isActive={isHomePage && activeSection === ""}
              onClick={() => {}}
            />
            <NavItem
              href="#services-section"
              label="Services"
              icon={<Code className="h-4 w-4" />}
              isActive={activeSection === "services-section"}
              onClick={() => scrollToSection("services-section")}
            />
            <NavItem
              href="#projects-section"
              label="Projects"
              icon={<Layers className="h-4 w-4" />}
              isActive={activeSection === "projects-section"}
              onClick={() => scrollToSection("projects-section")}
            />
            <NavItem
              href="#about-section"
              label="About"
              icon={<User className="h-4 w-4" />}
              isActive={activeSection === "about-section"}
              onClick={() => scrollToSection("about-section")}
            />
            <NavItem
              href="#contact-section"
              label="Contact"
              icon={<Mail className="h-4 w-4" />}
              isActive={activeSection === "contact-section"}
              onClick={() => scrollToSection("contact-section")}
            />
            <NavItem
              href="/privacy-policy"
              label="Privacy"
              icon={<FileText className="h-4 w-4" />}
              isActive={pathname === "/privacy-policy"}
              onClick={() => {}}
            />
            <NavItem
              href="/terms-of-service"
              label="Terms"
              icon={<Scale className="h-4 w-4" />}
              isActive={pathname === "/terms-of-service"}
              onClick={() => {}}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              <MobileNavItem
                href="/"
                label="Home"
                icon={<Home className="h-5 w-5" />}
                isActive={isHomePage && activeSection === ""}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                href="#services-section"
                label="Services"
                icon={<Code className="h-5 w-5" />}
                isActive={activeSection === "services-section"}
                onClick={() => scrollToSection("services-section")}
              />
              <MobileNavItem
                href="#projects-section"
                label="Projects"
                icon={<Layers className="h-5 w-5" />}
                isActive={activeSection === "projects-section"}
                onClick={() => scrollToSection("projects-section")}
              />
              <MobileNavItem
                href="#about-section"
                label="About"
                icon={<User className="h-5 w-5" />}
                isActive={activeSection === "about-section"}
                onClick={() => scrollToSection("about-section")}
              />
              <MobileNavItem
                href="#contact-section"
                label="Contact"
                icon={<Mail className="h-5 w-5" />}
                isActive={activeSection === "contact-section"}
                onClick={() => scrollToSection("contact-section")}
              />
              <MobileNavItem
                href="/privacy-policy"
                label="Privacy Policy"
                icon={<FileText className="h-5 w-5" />}
                isActive={pathname === "/privacy-policy"}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                href="/terms-of-service"
                label="Terms of Service"
                icon={<Scale className="h-5 w-5" />}
                isActive={pathname === "/terms-of-service"}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

interface NavItemProps {
  href: string
  label: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function NavItem({ href, label, icon, isActive, onClick }: NavItemProps) {
  return (
    <div className="relative group">
      {href.startsWith("#") ? (
        <button
          onClick={onClick}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          <span className="flex items-center">
            {icon}
            <span className="ml-2">{label}</span>
          </span>
        </button>
      ) : (
        <Link
          href={href}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive ? "text-white" : "text-gray-300 hover:text-white"
          }`}
          onClick={onClick}
        >
          <span className="flex items-center">
            {icon}
            <span className="ml-2">{label}</span>
          </span>
        </Link>
      )}

      {/* Animated underline - now shows for active items and on hover */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </div>
  )
}

function MobileNavItem({ href, label, icon, isActive, onClick }: NavItemProps) {
  return (
    <div className="relative">
      {href.startsWith("#") ? (
        <button
          onClick={onClick}
          className={`w-full flex items-center px-3 py-3 text-base font-medium transition-colors ${
            isActive ? "text-white bg-gray-800/50" : "text-gray-300 hover:text-white hover:bg-gray-800/30"
          }`}
        >
          <span className="flex items-center">
            <span className={`mr-3 ${isActive ? "text-blue-500" : ""}`}>{icon}</span>
            {label}
          </span>
        </button>
      ) : (
        <Link
          href={href}
          className={`w-full flex items-center px-3 py-3 text-base font-medium transition-colors ${
            isActive ? "text-white bg-gray-800/50" : "text-gray-300 hover:text-white hover:bg-gray-800/30"
          }`}
          onClick={onClick}
        >
          <span className="flex items-center">
            <span className={`mr-3 ${isActive ? "text-blue-500" : ""}`}>{icon}</span>
            {label}
          </span>
        </Link>
      )}

      {/* Left border indicator for active state */}
      {isActive && (
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-red-500"></span>
      )}
    </div>
  )
}
