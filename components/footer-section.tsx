"use client"

import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="relative py-16 md:py-24 px-6 text-center">
      {/* Divider */}
      <div className="w-24 h-[1px] bg-primary/20 mx-auto mb-12" />

      <div className="max-w-2xl mx-auto">
        <Heart className="w-8 h-8 text-primary mx-auto mb-6 animate-pulse" fill="currentColor" />

        <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Para sempre bossa, Cremosaa
        </h3>


        <div className="flex items-center justify-center gap-2 text-primary/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          <span>Feito com</span>
          <Heart className="w-3 h-3" fill="currentColor" />
          <span>p pssoa mais especial dess mundo</span>
        </div>

        <p className="text-muted-foreground/30 text-xs mt-6" style={{ fontFamily: "var(--font-body)" }}>
          24.02.2026
        </p>
      </div>
    </footer>
  )
}
