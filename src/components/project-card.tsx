"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="group cursor-pointer overflow-hidden border-blue-500/30 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500"
        onClick={() => setOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                +{tags.length - 2} more
              </Badge>
            )}
          </div>
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900/90 backdrop-blur-xl border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-gray-400">{description}</DialogDescription>
          </DialogHeader>
          <div className="relative h-64 my-4 rounded-lg overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-blue-500/50 text-blue-400">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(liveUrl, "_blank")
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="border-cyan-600 text-cyan-500 hover:bg-cyan-950 shadow-[0_0_15px_rgba(8,145,178,0.5)] hover:shadow-[0_0_20px_rgba(8,145,178,0.7)] transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(githubUrl, "_blank")
                }}
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
