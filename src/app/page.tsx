"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Shield,
  Database,
  Rocket,
  Cpu,
  BrainCircuit,
  Layers,
  Server,
  ShieldCheck,
  Paintbrush,
  GitBranch,
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { TechMarquee } from "@/components/tech-marquee"
import { Navbar } from "@/components/navbar"

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Add a spacer to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-20"></div>
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 flex justify-center">
        <div className="max-w-2xl w-full space-y-6 text-center">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300 shadow-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              Recon Developer
            </span>
          </h1>
         <p className="text-xl md:text-2xl font-medium text-red-500 shadow-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">
            Creative Full-Stack Developer & Cybersecurity Enthusiast
         </p>
        <div className="flex justify-center">
          <Button
           onClick={scrollToContact}
           className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)] hover:shadow-[0_0_20px_rgba(8,145,178,0.7)] transition-all duration-300"
          >
            Hire Me
          </Button>
         </div>
       </div>
      </section>


      {/* Services Section */}
      <section id="services-section" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Creating responsive, modern web applications with cutting-edge technologies and frameworks."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              glowColor="blue"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Implementing robust security measures to protect your applications and data from threats."
              icon={<Shield className="h-10 w-10 text-red-500" />}
              glowColor="red"
            />
            <ServiceCard
              title="API Development"
              description="Building scalable, efficient APIs that connect your services and power your applications."
              icon={<Database className="h-10 w-10 text-blue-500" />}
              glowColor="blue"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="RCMOVIES"
              description="A modern streaming platform with a vast collection of movies and TV shows, featuring a sleek dark interface and responsive design."
              image="/rcmovies.png"
              tags={["React", "Next.js", "API Integration", "Tailwind CSS"]}
              githubUrl="https://github.com/verrmo12/RCMOVIES-RC"
              liveUrl="https://rcmovies.online"
            />



          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-950 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        {/* Ambient background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative w-full max-w-md mx-auto aspect-square group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <Image
                  src="/developer-coding.png"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="relative z-20 rounded-lg border border-gray-800 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-700"
                />

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg z-30 opacity-70 group-hover:w-16 group-hover:h-16 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-red-500 rounded-br-lg z-30 opacity-70 group-hover:w-16 group-hover:h-16 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-900/80 rounded-lg border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Code className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="p-2 mt-1 bg-gray-900/80 rounded-lg border border-gray-800 group-hover:border-blue-500 transition-colors duration-300">
                    <Rocket className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate full-stack developer with over 2 years of experience building modern web
                    applications. My journey began with a fascination for how things work on the web, which led me to
                    dive deep into both frontend and backend technologies.
                  </p>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-2 mt-1 bg-gray-900/80 rounded-lg border border-gray-800 group-hover:border-red-500 transition-colors duration-300">
                    <Shield className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    With a background in cybersecurity, I bring a unique perspective to development, ensuring that
                    applications are not only functional and beautiful but also secure and robust.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-cyan-500" />
                  <span>Tech Stack</span>
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <TechBadge icon={<BrainCircuit className="h-4 w-4" />} name="React" color="blue" />
                  <TechBadge icon={<Layers className="h-4 w-4" />} name="Next.js" color="cyan" />
                  <TechBadge icon={<Server className="h-4 w-4" />} name="Node.js" color="red" />
                  <TechBadge icon={<ShieldCheck className="h-4 w-4" />} name="Security" color="purple" />
                  <TechBadge icon={<Database className="h-4 w-4" />} name="MongoDB" color="green" />
                  <TechBadge icon={<Paintbrush className="h-4 w-4" />} name="Tailwind" color="blue" />
                  <TechBadge icon={<GitBranch className="h-4 w-4" />} name="Git" color="red" />
                  <TechBadge icon={<Globe className="h-4 w-4" />} name="REST API" color="cyan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-black relative overflow-hidden">
        {/* Ambient background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
            Get In Touch
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-full">
                  <Mail className="h-10 w-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </div>

                <h3 className="text-2xl font-bold text-white">Contact Me</h3>

                <p className="text-gray-300 max-w-lg">
                  Have a project in mind or want to discuss potential opportunities? Feel free to reach out via email or
                  connect with me on social media.
                </p>

                <a
                  href="mailto:anouarknanoua@gmail.com"
                  className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 hover:from-blue-300 hover:to-cyan-200 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>anouarknanoua@gmail.com</span>
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </a>

                <div className="flex gap-6 pt-4">
                  <SocialIcon href="https://github.com/verrmo12" icon={<Github className="h-6 w-6" />} color="blue" />
                  <SocialIcon href="https://linkedin.com" icon={<Linkedin className="h-6 w-6" />} color="red" />
                  <SocialIcon href="https://x.com/Apatinum969" icon={<Twitter className="h-6 w-6" />} color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <TechMarquee />
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-sm text-blue-400 shadow-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
              &copy; {new Date().getFullYear()} RCDEVELOPMENT. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600 mx-2">|</span>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({
  title,
  description,
  icon,
  glowColor,
}: {
  title: string
  description: string
  icon: React.ReactNode
  glowColor: string
}) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor === "blue" ? "from-blue-500/10 to-blue-500/5" : "from-red-500/10 to-red-500/5"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  )
}

function TechBadge({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) {
  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/40 text-blue-400 group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    red: "bg-red-500/10 border-red-500/40 text-red-400 group-hover:border-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.3)]",
    cyan: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 group-hover:border-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]",
    purple:
      "bg-purple-500/10 border-purple-500/40 text-purple-400 group-hover:border-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]",
    green:
      "bg-green-500/10 border-green-500/40 text-green-400 group-hover:border-green-500 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
  }

  return (
    <div
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-300`}
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function SocialIcon({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border ${color === "blue" ? "border-blue-500 text-blue-500 hover:bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "border-red-500 text-red-500 hover:bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.5)]"} transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]`}
    >
      {icon}
    </Link>
  )
}
