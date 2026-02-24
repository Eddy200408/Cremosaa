"use client"

import { useEffect, useState } from "react"
import { Heart, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-hearts.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              width: `${16 + i * 4}px`,
              height: `${16 + i * 4}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary/80 uppercase tracking-[0.3em] text-sm mb-6">
            Uma historia de amor
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 text-balance leading-tight">
            Keli eh pa BH,{" "}
            <span className="text-primary italic">Cremosaa</span>
          </h1>

          <div className="w-24 h-[1px] bg-primary/40 mx-auto my-8" />

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Desde primeiro olhar na escola ate infinito. Ess li eh nós historia,
            feito k txeu amor, vivid k coracao.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-primary/60">
            <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>18 Dezembro 2024</span>
            <Heart className="w-3 h-3" fill="currentColor" />
            <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>Para sempre</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href="#timeline" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-body)" }}>Descobrir</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
