"use client"

import { BentoCard } from "./bento-grid"
import { Building2, Calendar, ArrowUpRight } from "lucide-react"

const achievements = [
  {
    title: "운영 이슈 분석 및 장애 대응",
    description: "사용자 문의와 운영 상황을 바탕으로 원인을 빠르게 좁히고 문제를 해결했습니다.",
  },
  {
    title: "Deadlock / 트랜잭션 문제 개선",
    description: "운영 중 발생한 동시성 이슈를 분석하고 구조와 흐름을 정리해 안정성을 높였습니다.",
  },
  {
    title: "성능 저하 구간 최적화",
    description: "느린 구간을 확인하고 DB 쿼리 튜닝을 통해 응답 흐름을 개선했습니다.",
  },
  {
    title: "레거시 구조 리팩토링",
    description: "기존 코드를 분석해 유지보수가 쉬운 구조로 정리하고 개선 작업을 이어갔습니다.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        경험
      </h2>

      <BentoCard highlight className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">(주)코비젼</h3>
            </div>
            <p className="text-muted-foreground">그룹웨어 유지보수 담당 개발자 · CS사업팀</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground glass-card px-3 py-1.5 rounded-full w-fit">
            <Calendar className="w-4 h-4" />
            <span>2024.06 - 현재</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">주요 기술</h4>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring", "MSSQL", "Vue"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            그룹웨어 플랫폼 유지보수와 운영을 담당하며, 최대 3,300명 규모 사용자 환경에서 발생하는
            장애 대응, 성능 저하 분석, Deadlock 및 트랜잭션 이슈 개선, 레거시 코드 리팩토링을 수행했습니다.
          </p>
        </div>
      </BentoCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <BentoCard key={index}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold text-foreground text-sm leading-tight">
                {achievement.title}
              </h4>
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
