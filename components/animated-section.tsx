"use client"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in"
  delay?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animationClass = isIntersecting ? `animate-${animation}` : "opacity-0"
  const delayClass = delay > 0 ? `animate-delay-${delay}` : ""

  return (
    <div ref={elementRef} className={`${animationClass} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
