"use client"

import { useRouter } from "next/navigation"
import { BentoCard } from "./bento-grid"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  const router = useRouter()

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        프로젝트
      </h2>

      <div className="space-y-4">
        <BentoCard highlight>
          <div className="space-y-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-foreground/50">
                  PROJECT GUIDE
                </p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  무엇을 보고 싶은지에 따라 먼저 볼 프로젝트가 다릅니다.
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                채용 담당자나 협업 관점에서 바로 판단할 수 있도록, 각 프로젝트가 특히 잘 보여주는
                포인트를 먼저 정리했습니다.
              </p>
            </div>

            <div className="grid gap-4">
              {projects.map((project) => {
                const Icon = project.icon
                const roleFact = project.facts.find((fact) => fact.label === "역할")
                const outcomeFact = project.facts.find((fact) => fact.label === "성과")

                return (
                  <div
                    key={`${project.slug}-guide`}
                    className="rounded-[1.75rem] border border-white/45 bg-white/45 p-5 shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
                  >
                    <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(240px,0.78fr)]">
                      <div className="flex min-w-0 items-start gap-3">
                        <div className={`mt-0.5 rounded-2xl p-3 ${project.bgColor}`}>
                          <Icon className={`h-5 w-5 ${project.color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold leading-tight text-foreground">
                              {project.title}
                            </h3>
                            <span className="rounded-full border border-white/45 bg-white/60 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-foreground/65">
                              {project.size === "large" ? "FEATURED" : "SELECTED"}
                            </span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span
                                key={`${project.slug}-${tech}-guide`}
                                className="rounded-full bg-secondary/75 px-2.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-secondary-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:hidden">
                            {roleFact && (
                              <div className="rounded-2xl bg-white/55 px-4 py-4">
                                <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                                  ROLE
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/80">
                                  {roleFact.value}
                                </p>
                              </div>
                            )}
                            {outcomeFact && (
                              <div className="rounded-2xl bg-white/55 px-4 py-4">
                                <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                                  OUTCOME
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/80">
                                  {outcomeFact.value}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="mt-5 flex flex-wrap gap-2 xl:hidden">
                            <Button
                              type="button"
                              size="sm"
                              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                              onClick={() => router.push(`/projects/${project.slug}`)}
                            >
                              상세 보기
                            </Button>
                            {project.serviceUrl && (
                              <Button
                                asChild
                                type="button"
                                size="sm"
                                variant="outline"
                                className="rounded-full glass-card border-0 hover:bg-white/80"
                              >
                                <a
                                  href={project.serviceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Globe className="mr-1 h-4 w-4" />
                                  서비스
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm leading-7 text-muted-foreground">
                          {project.recommendedFor}
                        </p>
                      </div>

                      <div className="hidden xl:block">
                        <div className="grid gap-3">
                          {roleFact && (
                            <div className="rounded-2xl bg-white/55 px-4 py-4">
                              <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                                ROLE
                              </p>
                              <p className="mt-2 text-sm leading-6 text-foreground/80">
                                {roleFact.value}
                              </p>
                            </div>
                          )}
                          {outcomeFact && (
                            <div className="rounded-2xl bg-white/55 px-4 py-4">
                              <p className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                                OUTCOME
                              </p>
                              <p className="mt-2 text-sm leading-6 text-foreground/80">
                                {outcomeFact.value}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          <Button
                            type="button"
                            size="sm"
                            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                            onClick={() => router.push(`/projects/${project.slug}`)}
                          >
                            상세 보기
                          </Button>
                          {project.serviceUrl && (
                            <Button
                              asChild
                              type="button"
                              size="sm"
                              variant="outline"
                              className="rounded-full glass-card border-0 hover:bg-white/80"
                            >
                              <a href={project.serviceUrl} target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-1 h-4 w-4" />
                                서비스
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </BentoCard>

        {projects.map((project, index) => {
          const Icon = project.icon

          return (
            <BentoCard 
              key={index} 
              highlight={project.size === "large"}
              className="group"
            >
              <div
                className="flex flex-col h-full -m-6 p-6 cursor-pointer"
                onClick={() => router.push(`/projects/${project.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    router.push(`/projects/${project.slug}`)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${project.title} 상세 페이지 이동`}
              >
                {project.imageSrc && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/45 bg-white/40 shadow-[0_16px_44px_rgba(0,0,0,0.08)]">
                    <div className="relative aspect-[16/9]">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt ?? `${project.title} preview`}
                        className="block h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-4 py-4">
                        <span className="text-xs font-semibold tracking-[0.16em] text-white/75">
                          PREVIEW
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-white">
                          Detail
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`p-2.5 rounded-xl ${project.bgColor}`}>
                      <Icon className={`w-5 h-5 ${project.color}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          프로젝트 보기
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {project.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-white/45 bg-white/50 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-foreground/70"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                        {project.cardPoint}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full h-9 w-9 hover:bg-secondary"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/60 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          )
        })}
      </div>
    </section>
  )
}
