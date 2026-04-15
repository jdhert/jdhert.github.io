"use client"

import { BentoCard, BentoGrid } from "./bento-grid"
import { Cloud, Database, Layout, Server } from "lucide-react"
import { portfolio } from "@/lib/portfolio"

const skillMeta = {
  backend: {
    icon: Server,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  frontend: {
    icon: Layout,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  database: {
    icon: Database,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  infra: {
    icon: Cloud,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
} as const

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        기술 스택
      </h2>

      <div className="space-y-4">
        <BentoCard highlight>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-foreground/50">
                기술 활용 기준
              </p>
              <h3 className="mt-3 max-w-lg text-[clamp(1.9rem,2.3vw,2.5rem)] font-bold leading-[1.18] text-balance text-foreground">
                실무와 프로젝트에서 실제로 써본 기술 위주로 정리했습니다.
              </h3>
            </div>

            <ul className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base lg:pt-1">
              {portfolio.skillApproach.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </BentoCard>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2">
          {portfolio.skillEvidence.map((category, index) => {
            const meta = skillMeta[category.key]
            const Icon = meta.icon

            return (
              <BentoCard
                key={category.key}
                className={index === 0 ? "sm:col-span-2" : ""}
                highlight={index === 0}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${meta.bgColor}`}>
                    <Icon className={`w-5 h-5 ${meta.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.summary}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/45 bg-white/45 px-4 py-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                    활용 맥락
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/80">{category.evidence}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                    관련 경험
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.related.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/45 bg-white/55 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-foreground/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}
