"use client"

import { BentoCard } from "./bento-grid"
import { Code2, Server, Database, Zap } from "lucide-react"
import { portfolio } from "@/lib/portfolio"

export function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        소개
      </h2>
      
      <div className="space-y-4">
        <BentoCard className="col-span-full">
          <p className="text-lg leading-relaxed text-foreground/90">
            안녕하세요, <span className="font-semibold text-primary">{portfolio.headline}</span>인{" "}
            {portfolio.name}입니다.
          </p>
        </BentoCard>

        <div className="grid grid-cols-2 gap-4">
          <BentoCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">백엔드 중심 개발</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Java/Spring 기반 백엔드 개발과 그룹웨어 플랫폼 운영 경험
            </p>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-accent/10">
                <Database className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">3,300+ 사용자 환경</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              대규모 사용자 환경에서의 서비스 안정성 확보 경험
            </p>
          </BentoCard>
        </div>

        <BentoCard>
          <p className="text-muted-foreground leading-relaxed">
            운영 환경에서 발생하는 <span className="text-foreground font-medium">장애 대응</span>,
            <span className="text-foreground font-medium"> 성능 저하 구간 분석</span>,
            <span className="text-foreground font-medium"> Deadlock 및 트랜잭션 이슈 개선</span>,
            <span className="text-foreground font-medium"> 레거시 코드 리팩토링</span>을 경험하며,
            실사용자 관점에서 안정적인 서비스를 만드는 역량을 쌓아왔습니다.
          </p>
        </BentoCard>

        <div className="grid grid-cols-2 gap-4">
          <BentoCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-chart-3/10">
                <Code2 className="w-5 h-5 text-chart-3" />
              </div>
              <h3 className="font-semibold text-foreground">유지보수 친화적 구조</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              유지보수가 용이한 코드 설계와 리팩토링
            </p>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-chart-4/10">
                <Zap className="w-5 h-5 text-chart-4" />
              </div>
              <h3 className="font-semibold text-foreground">서비스 전반 이해</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              프론트엔드 연동 및 전체 서비스 흐름 이해
            </p>
          </BentoCard>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {["문제 해결", "운영 환경", "안정성", "성능 개선", "유지보수"].map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1.5 text-xs font-medium rounded-full glass-card text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
