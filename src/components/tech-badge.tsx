import React from "react"

interface TechBadgeProps {
  icon: React.ReactNode
  name: string
  color: string
}

export function TechBadge({ icon, name, color }: TechBadgeProps) {
  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    red: "bg-red-500/10 text-red-500 border-red-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${colorClasses[color as keyof typeof colorClasses]}`}>
      {icon}
      <span className="text-xs font-medium">{name}</span>
    </div>
  )
} 