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
            Do fundo do coracao
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Carta de Amor
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
                Sempre te digo que nao sou muito bom com palavras &mdash; a minha maneira sempre foi demonstrar
                o que sinto atraves de gestos, de olhares, de silencios que dizem mais do que eu
                conseguiria expressar. Mas hoje, resolvi quebrar esse meu jeito reservado e colocar
                tudo o que carrego dentro de mim: todo o meu afeto, toda a minha gratidao, todo o
                amor que sinto por ti.
              </p>

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                Tu foste o meu melhor presente de 2025. Comecamos a namorar no primeiro dia do ano,
                como se o universo quisesse dizer que tu serias o recomeco de tudo para mim. E seras,
                sem duvida, o meu presente de 2026, e de todos os anos que virao.{" "}
                <span className="text-primary font-semibold">Tu foste &mdash; e es &mdash; a melhor coisa que me aconteceu.</span>
              </p>

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                Tenho tanto a agradecer-te. Nos momentos em que eu nao estava bem, quando tudo parecia
                desmoronar-se, tu estavas la, firme, a segurar-me. Ensinaste-me o que e amar de
                verdade. Confesso que, inicialmente, tinha muito medo de me entregar, de baixar as
                minhas defesas e deixar alguem entrar tao profundamente na minha vida. Mas tu, com a
                tua paciencia infinita, com o teu carinho genuino, mostraste-me que amar nao e
                perder-se &mdash; e encontrar-se no outro.
              </p>

              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                Por tudo isso, pela mulher incrivel que es, pela forma como transformaste a minha vida,
                eu te agradeco. Agradeco cada sorriso, cada abraco, cada momento ao teu lado.{" "}
                <span className="text-primary font-semibold">
                  Tu es a minha certeza em meio a tantas duvidas, a minha paz em meio ao caos.
                </span>
              </p>

              <div className="pt-6 border-t border-border/30">
                <p className="text-primary italic text-lg md:text-xl font-serif">
                  Amo-te mais do que as palavras conseguem dizer, mas quis tentar.
                </p>
                <p className="text-foreground/70 mt-4 text-sm">
                  Para sempre teu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
