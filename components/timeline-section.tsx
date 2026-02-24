"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, MapPin, Calendar, Sparkles, Plane } from "lucide-react"
import Image from "next/image"

interface TimelineEvent {
  date: string
  title: string
  description: string
  image: string
  icon: React.ReactNode
  quote?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "18 de Dezembro, 2024",
    title: "O Primeiro Encontro",
    description:
      "O dia em que tudo comecou. Saimos pela primeira vez e, sem saber, estavamos a escrever o primeiro capitulo da nossa historia. Naquele momento, algo mudou dentro de mim.",
    image: "/images/1.png",
    icon: <Sparkles className="w-4 h-4" />,
    quote: "Tu foste o meu melhor presente.",
  },
  {
    date: "1 de Janeiro, 2025",
    title: "Comeco do Nosso Amor",
    description:
      "Comecamos a namorar no primeiro dia do ano, como se o universo quisesse dizer que tu serias o recomeco de tudo para mim. O melhor ano comecou contigo ao meu lado.",
    image: "/images/momento-2.jpg",
    icon: <Heart className="w-4 h-4" fill="currentColor" />,
    quote: "Tu foste, e es, a melhor coisa que me aconteceu.",
  },
  {
    date: "Inicio de 2025",
    title: "Os Primeiros Meses Juntos",
    description:
      "Aprendemos a conhecer-nos, a amar os defeitos e as qualidades um do outro. Cada dia ao teu lado era uma nova descoberta, um novo motivo para sorrir.",
    image: "/images/momento-6.jpg",
    icon: <Calendar className="w-4 h-4" />,
    quote: "Ensinaste-me o que e amar de verdade.",
  },
  {
    date: "2025",
    title: "Primeira Viagem - Santo Antao",
    description:
      "A nossa primeira aventura juntos. Santo Antao mostrou-nos paisagens incriveis, mas nenhuma se comparava a beleza de te ter ao meu lado. Cada montanha que subimos, cada vale que atravessamos, fortaleceu o nosso amor.",
    image: "/images/momento-3.jpg",
    icon: <Plane className="w-4 h-4" />,
    quote: "Contigo, cada destino e o lugar perfeito.",
  },
  {
    date: "2025",
    title: "Segunda Viagem - Santo Antao",
    description:
      "Voltamos ao lugar que se tornou nosso. As montanhas, o mar, as estradas sinuosas... tudo tinha um significado diferente porque estavamos juntos, mais fortes e mais apaixonados do que nunca.",
    image: "/images/6.png",
    icon: <MapPin className="w-4 h-4" />,
    quote: "Os melhores caminhos sao os que percorro contigo.",
  },
  {
    date: "2025 - 2026",
    title: "Crescer Juntos",
    description:
      "Nos momentos em que eu nao estava bem, quando tudo parecia desmoronar-se, tu estavas la, firme, a segurar-me. Com a tua paciencia infinita, com o teu carinho genuino, mostraste-me que amar nao e perder-se, e encontrar-se no outro.",
    image: "/images/8.png",
    icon: <Heart className="w-4 h-4" fill="currentColor" />,
    quote: "Tu es a minha certeza em meio a tantas duvidas, a minha paz em meio ao caos.",
  },
  {
    date: "Hoje e Sempre",
    title: "O Nosso Futuro",
    description:
      "Ja la vai mais de um ano juntos. Aprendi que amar e desacordar, e confrontar, e crescer juntos atraves dos desafios. Quero que cada conflito nos aproxime mais, que cada palavra dita seja um tijolo na construcao do nosso futuro.",
    image: "/images/9.png",
    icon: <Sparkles className="w-4 h-4" />,
    quote: "Seras, sem duvida, o meu presente de todos os anos que virao.",
  },
]

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative flex items-center mb-16 md:mb-24 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Center line dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center text-primary">
          {event.icon}
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-[calc(50%-3rem)] transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isEven ? "md:pr-8" : "md:pl-8"}`}
        style={{ transitionDelay: "0.1s" }}
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors duration-500">
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Mobile icon */}
            <div className="md:hidden absolute top-4 left-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-primary/40 flex items-center justify-center text-primary">
              {event.icon}
            </div>

            {/* Date badge */}
            <div className="absolute bottom-4 left-4">
              <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary border border-primary/20" style={{ fontFamily: "var(--font-body)" }}>
                {event.date}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="p-6">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
              {event.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4" style={{ fontFamily: "var(--font-body)" }}>
              {event.description}
            </p>
            {event.quote && (
              <blockquote className="border-l-2 border-primary/40 pl-4 italic text-primary/80 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {`"${event.quote}"`}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
            A nossa jornada
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Cada Momento Contigo
          </h2>
          <div className="w-16 h-[1px] bg-primary/30 mx-auto" />
        </div>

        {/* Timeline line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-48 bottom-32 w-[1px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

        {/* Timeline items */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
