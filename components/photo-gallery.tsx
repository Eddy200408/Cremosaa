"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  { src: "/images/1.png", caption: "O nosso primeiro encontro" },
  { src: "/images/12.jpg", caption: "Ano novo, amor novo" },
  { src: "/images/5.png", caption: "Santo Antao - Primeira viagem" },
  { src: "/images/2.png", caption: "Juntos no topo do mundo" },
  { src: "/images/8.png", caption: "Momentos de paz" },
  { src: "/images/4.png", caption: "De maos dadas, sempre" },
  { src: "/images/11.png", caption: "Santo Antao - Segunda viagem" },
  { src: "/images/momento-8.jpg", caption: "Palavras de amor" },
]

export function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedPhoto === null) return
      if (e.key === "Escape") setSelectedPhoto(null)
      if (e.key === "ArrowLeft") setSelectedPhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
      if (e.key === "ArrowRight") setSelectedPhoto((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : prev))
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhoto])

  return (
    <>
      <section ref={ref} className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
              As nossas memorias
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Galeria de Momentos
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base" style={{ fontFamily: "var(--font-body)" }}>
              Cada fot t conta um historia de kes kes momento k un t guarda sempre  na nha coração.
            </p>
            <div className="w-16 h-[1px] bg-primary/30 mx-auto mt-6" />
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className={`group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Heart className="w-6 h-6 text-primary mb-2" fill="currentColor" />
                  <span className="text-foreground text-xs md:text-sm text-center px-3 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    {photo.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>

         
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-label="Visualizador de fotos"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedPhoto(null)
            }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors z-10 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {selectedPhoto > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto - 1)
              }}
              className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors z-10 cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {selectedPhoto < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto + 1)
              }}
              className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors z-10 cursor-pointer"
              aria-label="Proxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].caption}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
              <p className="text-foreground text-center font-medium" style={{ fontFamily: "var(--font-body)" }}>
                {photos[selectedPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
