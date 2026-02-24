"use client"

import { useEffect, useState } from "react"
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react"

function calculateTimeTogether() {
  const startDate = new Date(2025, 0, 1) // January 1, 2025
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30.44)
  const hours = Math.floor(diff / (1000 * 60 * 60))

  return { days, months, hours }
}

export function CounterSection() {
  const [time, setTime] = useState({ days: 0, months: 0, hours: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTime(calculateTimeTogether())
    setIsVisible(true)

    const interval = setInterval(() => {
      setTime(calculateTimeTogether())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: <Calendar className="w-5 h-5" />,
      value: time.days,
      label: "Dias juntos",
    },
    {
      icon: <Heart className="w-5 h-5" fill="currentColor" />,
      value: time.months,
      label: "Meses de amor",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      value: 2,
      label: "Viagens juntos",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      value: "\u221E",
      label: "Memorias para sempre",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">
                {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
