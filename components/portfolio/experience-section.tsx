"use client"

import { BentoCard } from "./bento-grid"
import { Building2, Calendar, ArrowUpRight } from "lucide-react"

const achievements = [
  {
    title: "운영 문의를 장애 대응 단서로 전환",
    description: "사용자 문의와 운영 상황을 함께 보며 문제 원인을 빠르게 좁히고 대응 흐름을 정리했습니다.",
  },
  {
    title: "Deadlock / 트랜잭션 이슈 분석",
    description: "운영 중 발생한 동시성 문제를 추적하고 처리 순서와 구조를 점검하며 안정성을 높였습니다.",
  },
  {
    title: "느린 구간 쿼리 튜닝",
    description: "성능 저하가 체감되는 구간을 찾아 DB 쿼리와 조회 흐름을 손보며 응답 흐름을 개선했습니다.",
  },
  {
    title: "레거시 코드 구조 정리",
    description: "기존 코드를 분석해 유지보수가 쉬운 구조로 정리하고 이후 개선 작업이 이어질 수 있게 만들었습니다.",
  },
]

const experienceFacts = [
  {
    label: "운영 환경",
    value: "최대 3,300명 규모 그룹웨어 서비스",
  },
  {
    label: "핵심 이슈",
    value: "Deadlock, 트랜잭션 충돌, 느린 쿼리",
  },
  {
    label: "개선 방식",
    value: "원인 분석 후 구조와 흐름을 함께 수정",
  },
  {
    label: "강점",
    value: "단순 수정이 아닌 재발 방지 중심 접근",
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
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {experienceFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white/45 px-4 py-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/80">{fact.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            그룹웨어 플랫폼 유지보수와 운영을 담당하며, 최대 3,300명 규모 사용자 환경에서 발생하는
            장애 대응, 성능 저하 분석, Deadlock 및 트랜잭션 이슈 개선, 레거시 코드 리팩토링을 수행했습니다.
            단순 수정에 그치지 않고 원인 분석과 재발 방지 관점으로 접근한 경험이 강점입니다.
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
