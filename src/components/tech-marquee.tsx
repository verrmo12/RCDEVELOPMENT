"use client"

import { useEffect, useRef } from "react"

export function TechMarquee() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Jest",
    "Cypress",
    "Docker",
    "AWS",
    "Firebase",
    "Vercel",
  ]

  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const animation = marquee.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${marquee.scrollWidth / 2}px)` }],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
      },
    )

    return () => {
      animation.cancel()
    }
  }, [])

  // Duplicate the items to create a seamless loop
  const allItems = [...technologies, ...technologies]

  return (
    <div className="w-full overflow-hidden">
      <div ref={marqueeRef} className="whitespace-nowrap">
        {allItems.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className={`inline-block mx-4 text-sm font-medium ${
              index % 2 === 0
                ? "text-blue-500 shadow-blue-500 drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]"
                : "text-red-500 shadow-red-500 drop-shadow-[0_0_3px_rgba(239,68,68,0.5)]"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

