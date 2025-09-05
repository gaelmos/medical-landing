"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToStats = () => {
    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-primary text-primary-foreground py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">QUE SERVICIOS OFRECEMOS</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance">
          Revolucionando la detección del cáncer de páncreas con inteligencia artificial
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3"
          onClick={scrollToStats}
        >
          Conocer Más
        </Button>
      </div>
    </section>
  )
}
