"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface AnimatedViewportProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in" | "rotate-in"
  delay?: number
  className?: string
}

export function AnimatedViewport({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
}: AnimatedViewportProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClass = `${animation}-viewport ${isVisible ? "visible" : ""}`

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
