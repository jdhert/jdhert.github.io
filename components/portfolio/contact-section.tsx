"use client"

import { BentoCard } from "./bento-grid"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolio } from "@/lib/portfolio"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        연락처
      </h2>

      <BentoCard highlight className="text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            함께 이야기해볼까요?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            백엔드 포지션, 협업, 이력서 관련 문의 모두 편하게 연락주세요.
            운영 환경을 더 안정적으로 만드는 일에 꾸준히 관심이 있습니다.
          </p>
          <p className="text-sm font-medium text-foreground mb-6">{portfolio.email}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              asChild 
              size="lg"
              className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <a href={`mailto:${portfolio.email}`}>
                <Mail className="w-4 h-4" />
                이메일 보내기
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="gap-2 rounded-full glass-card border-0 hover:bg-white/80"
            >
              <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub 프로필
              </a>
            </Button>
          </div>
        </div>
      </BentoCard>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{portfolio.name}</span>이 설계하고 구현했습니다
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Next.js와 Tailwind CSS로 제작했습니다
        </p>
      </footer>
    </section>
  )
}
