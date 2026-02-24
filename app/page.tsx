import { HeroSection } from "@/components/hero-section"
import { CounterSection } from "@/components/counter-section"
import { TimelineSection } from "@/components/timeline-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { LoveLetterSection } from "@/components/love-letter-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Divider with glow */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <CounterSection />

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <TimelineSection />

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <PhotoGallery />

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <LoveLetterSection />

      <FooterSection />
    </main>
  )
}
