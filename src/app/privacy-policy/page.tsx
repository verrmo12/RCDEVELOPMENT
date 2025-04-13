"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, Cookie, Bell, Mail, Globe, User } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Add a spacer to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-20"></div>
      {/* Header with ambient glow */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gray-900/80 rounded-full border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Content with ambient sections */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              At RCDEVELOPMENT, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Database className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>

            <div className="pl-10 border-l border-gray-800 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you register on the website, express interest in obtaining information about us or our products and services, or otherwise contact us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Usage Data</h3>
                <p className="text-gray-300 leading-relaxed">
                  We may collect information about how you access and use our website, including your IP address, browser type, operating system, pages visited, and time spent on each page.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Eye className="h-5 w-5 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                We may use the information we collect for various purposes, including to:
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-6 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <User className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Provide, operate, and maintain our website and services.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <User className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Improve, personalize, and expand our website and services.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <User className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Understand and analyze how you use our website and services.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <User className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Develop new products, services, features, and functionality.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Cookie className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Cookies and Tracking Technologies</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-blue-500" />
                    <h4 className="font-semibold text-white">Essential Cookies</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                  </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="h-4 w-4 text-blue-500" />
                    <h4 className="font-semibold text-white">Analytics Cookies</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Lock className="h-5 w-5 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                <p className="text-gray-300 mb-4">
                  Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the website within a secure environment.
                </p>
              </div>
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Globe className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                Your information may be transferred to, and maintained on, computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                <p className="text-gray-300">
                  If you are located outside the United States and choose to provide information to us, please note that we transfer the information, including personal information, to the United States and process it there.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Mail className="h-5 w-5 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                <p className="text-gray-300 mb-2">
                  By email: <span className="text-cyan-400">privacy@rcdevelopment.com</span>
                </p>
                <p className="text-gray-300">
                  By visiting this page on our website:{" "}
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Contact Page
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-blue-400 shadow-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
            &copy; {new Date().getFullYear()} RCDEVELOPMENT. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
