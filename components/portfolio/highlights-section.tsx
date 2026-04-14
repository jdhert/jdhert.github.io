"use client"

import { Radar, ShieldCheck, Users, Wrench } from "lucide-react"
import { BentoCard } from "./bento-grid"
import { portfolio } from "@/lib/portfolio"

const icons = [ShieldCheck, Radar, Wrench] as const

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
        핵심 요약
      </h2>

      <div className="space-y-4">
        <BentoCard highlight>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-foreground/50">
                WHY THIS PORTFOLIO
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                문제를 빨리 좁히고, 운영 가능한 해법으로 연결합니다.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {portfolio.hiringPitch}
              </p>
            </div>

            <div className="rounded-3xl border border-white/45 bg-white/45 p-5 shadow-[0_16px_44px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-foreground/50">
                    COLLABORATION FIT
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    이런 팀과 특히 잘 맞습니다
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/75">
                {portfolio.fitAreas.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>

        <div className="grid gap-4 lg:grid-cols-3">
          {portfolio.decisionCards.map((card, index) => {
            const Icon = icons[index]

            return (
              <BentoCard key={card.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                      {card.value}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <div className="rounded-2xl bg-secondary/70 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </BentoCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
