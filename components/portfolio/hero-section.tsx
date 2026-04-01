"use client"

import { Github, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolio } from "@/lib/portfolio"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <div 
        className={`space-y-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground/80">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>백엔드 포지션에 열려 있습니다</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          <span className="text-gradient">{portfolio.name}</span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
          Backend Developer
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
          {portfolio.headline}입니다. 최대 3,300명 규모 그룹웨어 환경에서 운영 이슈를 분석하고,
          장애 대응과 성능 개선으로 서비스 안정성을 높여왔습니다.
        </p>

        <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
          {portfolio.heroHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            asChild 
            size="lg" 
            className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-6">
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
        <span className="text-sm text-muted-foreground">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
