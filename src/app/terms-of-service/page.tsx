"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertTriangle, Ban, Gavel, Globe, Pencil, Clock, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Add a spacer to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-20"></div>
      {/* Header with ambient glow */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gray-900/80 rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <Scale className="h-8 w-8 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-300 mb-4">
            Terms of Service
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
              These Terms of Service ("Terms") govern your access to and use of the RCDEVELOPMENT website and services.
              Please read these Terms carefully. By accessing or using our services, you agree to be bound by these
              Terms and our Privacy Policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may modify these Terms at any time. If we do so, we'll let you know either by posting the modified
              Terms on the Site or through other communications. It's important that you review the Terms whenever we
              modify them because if you continue to use the Services after we have posted modified Terms on the Site,
              you are indicating to us that you agree to be bound by the modified Terms.
            </p>
          </section>

          {/* Using Our Services */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <FileText className="h-5 w-5 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Using Our Services</h2>
            </div>

            <div className="pl-10 border-l border-gray-800 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Eligibility</h3>
                <p className="text-gray-300 leading-relaxed">
                  You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent and
                  warrant that you are at least 18 years of age.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">User Accounts</h3>
                <p className="text-gray-300 leading-relaxed">
                  When you create an account with us, you must provide accurate, complete, and current information. You
                  are responsible for safeguarding your account, so please use a strong password and limit access to
                  your computer or device.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <Ban className="h-5 w-5 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Prohibited Activities</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                You agree not to engage in any of the following prohibited activities:
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-6 hover:border-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Using the Services for any illegal purpose or in violation of any local, state, national, or
                      international law.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Attempting to interfere with, compromise the system integrity or security, or decipher any
                      transmissions to or from the servers running the Services.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Imposing an unreasonable or disproportionately large load on our infrastructure.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                      Uploading invalid data, viruses, worms, or other software agents through the Services.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Gavel className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Intellectual Property Rights</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                The Services and its original content, features, and functionality are owned by RCDEVELOPMENT and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <h4 className="font-semibold text-white">Website Content</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    All content on our website, including text, graphics, logos, and images, is the property of
                    RCDEVELOPMENT.
                  </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Pencil className="h-4 w-4 text-blue-500" />
                    <h4 className="font-semibold text-white">Trademarks</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    All trademarks, service marks, and trade names used on the site are the property of their respective
                    owners.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-900/80 rounded-lg border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Clock className="h-5 w-5 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Termination</h2>
            </div>

            <div className="pl-10 border-l border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                <p className="text-gray-300 mb-4">
                  Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
                  account, you may simply discontinue using the Services.
                </p>
                <p className="text-gray-300">
                  All provisions of the Terms which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
                  limitations of liability.
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
                If you have any questions about these Terms, please contact us:
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                <p className="text-gray-300 mb-2">
                  By email: <span className="text-cyan-400">legal@rcdevelopment.com</span>
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
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
