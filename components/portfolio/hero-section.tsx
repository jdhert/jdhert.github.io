"use client"

import { FileText, Github, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolio } from "@/lib/portfolio"
import { useEffect, useState, type CSSProperties } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const resumeRequestUrl = `mailto:${portfolio.email}?subject=${portfolio.resumeRequestSubject}&body=${portfolio.resumeRequestBody}`
  const revealStyle = (delay: number) =>
    ({ "--hero-delay": `${delay}ms` }) as CSSProperties

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute -left-12 top-[10%] h-40 w-40 rounded-full bg-primary/12 blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <div
          className={`absolute left-[14%] top-[14%] hidden h-20 w-20 rounded-full border border-white/60 bg-white/25 shadow-[0_18px_60px_rgba(130,91,255,0.18)] backdrop-blur-xl lg:block ${
            isVisible ? "hero-float-soft opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-[8%] top-[12%] hidden h-56 w-56 rounded-full border border-primary/18 bg-white/10 lg:block ${
            isVisible ? "hero-orbit opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-[10.5%] top-[21%] hidden h-4 w-4 rounded-full bg-accent/70 shadow-[0_0_28px_rgba(232,109,188,0.45)] lg:block ${
            isVisible ? "hero-orbit-dot opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute -bottom-2 left-[4%] hidden h-20 w-72 rounded-full bg-gradient-to-r from-primary/12 via-accent/8 to-transparent blur-3xl lg:block ${
            isVisible ? "hero-pan opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="space-y-6">
        {/* Badge */}
        <div
          className={`hero-reveal inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm font-medium text-foreground/80 ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(80)}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>장애 대응 · 병목 분석 · 구조 개선 중심</span>
        </div>

        {/* Name */}
        <h1
          className={`hero-reveal text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(180)}
        >
          <span className="text-gradient">{portfolio.name}</span>
        </h1>
        
        {/* Title */}
        <h2
          className={`hero-reveal text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(280)}
        >
          {portfolio.role}
        </h2>
        
        {/* Description */}
        <p
          className={`hero-reveal max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(380)}
        >
          {portfolio.headline}입니다. {portfolio.summary}
        </p>

        <div
          className={`hero-reveal grid gap-3 sm:grid-cols-3 ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(500)}
        >
          {portfolio.keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="hero-fact-card rounded-2xl border border-white/40 bg-white/45 px-4 py-4 shadow-[0_12px_30px_rgba(255,255,255,0.18)]"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                {fact.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <ul
          className={`hero-reveal space-y-2 text-sm sm:text-base text-muted-foreground ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(620)}
        >
          {portfolio.heroHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Buttons */}
        <div
          className={`hero-reveal flex flex-wrap gap-4 pt-4 ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(740)}
        >
          <Button 
            asChild 
            size="lg" 
            className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={resumeRequestUrl}>
              <FileText className="w-5 h-5" />
              이력서 요청
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="gap-2 rounded-full glass-card border-0 hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={`mailto:${portfolio.email}`}>
              <Mail className="w-5 h-5" />
              이메일 문의
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="gap-2 rounded-full glass-card border-0 hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
        <p
          className={`hero-reveal text-sm text-muted-foreground ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(840)}
        >
          {portfolio.resumeRequestNote}
        </p>

        {/* Social Links */}
        <div
          className={`hero-reveal flex flex-wrap items-center gap-4 pt-4 ${
            isVisible ? "is-visible" : ""
          }`}
          style={revealStyle(920)}
        >
          <a 
            href={portfolio.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:bg-white/80 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${portfolio.email}`}
            className="p-3 rounded-full glass-card hover:bg-white/80 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="text-sm text-muted-foreground">{portfolio.email}</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground">아래로 살펴보기</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
