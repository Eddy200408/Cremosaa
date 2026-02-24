"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

export function LoveLetterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Do fundo de nha coracao
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Kel Cartinha
          </h2>
          <div className="w-16 h-[1px] bg-primary/30 mx-auto" />
        </div>

        {/* Letter card */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-card/40 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
            {/* Letter image header */}
            <div className="relative h-48 md:h-64">
              <Image
                src="/images/momento-8.jpg"
                alt="Carta de amor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <Heart className="w-8 h-8 text-primary mb-2" fill="currentColor" />
              </div>
            </div>

            {/* Letter content */}
            <div className="p-8 md:p-12 space-y-6" style={{ fontFamily: "var(--font-body)" }}>
             

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
               Ess website ene apenas um conjunto de pagina, cores, e codigo. Cada Detalhe k bh t oia li, foi pensod k txeu carinho, feito k alma, e construído k um unico proposito.{" "}
                <span className="text-primary font-semibold">Mostra, de forma mais sincera, tudo uk k un t sinti pa bh.</span>
              </p>

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
               Enquanto un tava t escreve cada linha de codigo e un tava ajusta cada detalhe ness site, era na bh k un tava t pensa. Proque p min, bh ne somente um pessoa especial p min, bh é ken ek t ilumina nhas dias, ek t fazeme erri sem tma fé, e k t dame mas sentido na td uk k un t faze.
              </p>

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                Ess site foi um pequeno forma p demonstra td nha carinho, admiraçao amor, k un t guarda dent de min{" "}
                <span className="text-primary font-semibold">
                  K td nha carinho. BH CREMOSOO, BH MUSSIN.
                </span>
              </p>

              <div className="pt-6 border-t border-border/30">
                <p className="text-primary italic text-lg md:text-xl font-serif">
                  Un t amob mais do k palavras t consigui dze, mas un cris tenta kkkk
                          </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
