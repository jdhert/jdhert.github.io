import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Bug,
  Github,
  Globe,
  Lightbulb,
  RotateCcw,
} from "lucide-react"
import { AnimatedBackground } from "@/components/portfolio/animated-background"
import { MouseGradient } from "@/components/portfolio/mouse-gradient"
import { BentoCard } from "@/components/portfolio/bento-grid"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, projects } from "@/lib/projects"
import { portfolio } from "@/lib/portfolio"

export const dynamicParams = false

function compactText(text: string, maxLength: number) {
  const normalized = text.replace(/\s+/g, " ").trim()

  if (normalized.length <= maxLength) {
    return normalized
  }

  const separators = ["입니다. ", "했습니다. ", "합니다. ", ". ", ", ", " · ", " / "]

  for (const separator of separators) {
    const cutIndex = normalized.lastIndexOf(separator, maxLength)
    if (cutIndex > maxLength * 0.55) {
      return normalized.slice(0, cutIndex + separator.trimEnd().length).trim()
    }
  }

  return `${normalized.slice(0, maxLength).trimEnd()}...`
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: `Project Not Found | ${portfolio.name}`,
    }
  }

  return {
    title: `${project.title} | ${portfolio.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${portfolio.name}`,
      description: project.summary,
      url: `${portfolio.siteUrl}/projects/${project.slug}/`,
      siteName: `${portfolio.name} 포트폴리오`,
      locale: "ko_KR",
      type: "article",
      images: project.imageSrc
        ? [
            {
              url: project.imageSrc,
              alt: project.imageAlt ?? `${project.title} 대표 이미지`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${portfolio.name}`,
      description: project.summary,
      creator: "@jdhert",
      images: project.imageSrc ? [project.imageSrc] : undefined,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const Icon = project.icon
  const metricFacts = [project.facts[4], project.facts[1], project.facts[0]].filter(Boolean)
  const secondaryFacts = project.facts.slice(2, 4)

  return (
    <>
      <AnimatedBackground />
      <MouseGradient />

      <main className="relative z-10 min-h-screen px-6 py-12 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full glass-card border-0 hover:bg-white/80"
            >
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4" />
                프로젝트 목록으로
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-3">
              {project.serviceUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full glass-card border-0 hover:bg-white/80"
                >
                  <a href={project.serviceUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    서비스 보기
                  </a>
                </Button>
              )}

              {project.links?.[0] && (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full glass-card border-0 hover:bg-white/80"
                >
                  <a href={project.links[0].href} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4" />
                    문서 보기
                  </a>
                </Button>
              )}

              <Button
                asChild
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub 보기
                </a>
              </Button>
            </div>
          </div>

          <BentoCard highlight className="p-8 lg:p-10">
            <div className="space-y-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-start">
                <div className="space-y-4">
                  <div
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${project.bgColor}`}
                  >
                    <Icon className={`h-4 w-4 ${project.color}`} />
                    <span className="text-sm font-medium text-foreground/80">프로젝트 상세</span>
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                      {project.title}
                    </h1>
                    <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                      {compactText(project.summary, 96)}
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/40 bg-white/35 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
                <div className="grid gap-3 sm:grid-cols-3">
                  {metricFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-white/45 bg-white/45 px-4 py-4 shadow-[0_12px_30px_rgba(255,255,255,0.18)]"
                    >
                      <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-7 text-foreground/88">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {secondaryFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/45 bg-white/40 px-4 py-2.5"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.14em] text-foreground/50">
                        {fact.label}
                      </span>
                      <span className="text-sm font-medium text-foreground/80">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_360px]">
                <div className="space-y-5">
                  <div
                    className={`overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.08)] ${
                      project.serviceUrl ? "group" : ""
                    }`}
                  >
                    {project.imageSrc ? (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {project.serviceUrl && (
                          <a
                            href={project.serviceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} 서비스 URL 열기`}
                            className="absolute inset-0 z-10"
                          />
                        )}
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt ?? `${project.title} 프로젝트 이미지`}
                          className={`block h-full w-full object-cover object-top transition-transform duration-500 ${
                            project.serviceUrl ? "group-hover:scale-[1.02]" : ""
                          }`}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-6 py-6">
                          {project.serviceUrl ? (
                            <div className="flex items-end justify-between gap-4">
                              <div>
                                <p className="text-xs font-semibold tracking-[0.16em] text-white/70">
                                  SERVICE URL
                                </p>
                                <p className="mt-2 text-sm font-medium text-white">
                                  {project.serviceUrl}
                                </p>
                              </div>
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                                Open
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          ) : (
                            <p className="text-xs font-semibold tracking-[0.16em] text-white/70">
                              프로젝트 미리보기
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-gradient-to-br from-primary/20 via-white/40 to-accent/15 p-8">
                        {project.serviceUrl && (
                          <a
                            href={project.serviceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} 서비스 URL 열기`}
                            className="absolute inset-0 z-10"
                          />
                        )}
                        <div className="absolute inset-0 opacity-70">
                          <div className="absolute -left-12 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
                          <div className="absolute right-0 top-1/3 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
                          <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-chart-3/20 blur-3xl" />
                        </div>
                        <div className="relative">
                          <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                            {project.serviceUrl ? "SERVICE URL" : "프로젝트 미리보기"}
                          </p>
                          <h2 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h2>
                          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                            {project.serviceUrl
                              ? project.serviceUrl
                              : "대표 이미지가 없는 프로젝트입니다. 구조와 구현 포인트 위주로 확인할 수 있도록 정리했습니다."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
                    <div className="rounded-[2rem] border border-white/45 bg-white/50 p-6 shadow-[0_16px_40px_rgba(255,255,255,0.18)]">
                      <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-foreground/48">
                        프로젝트 개요
                      </p>
                      <p className="max-w-2xl text-[1.02rem] font-medium leading-8 text-foreground/86">
                        {compactText(project.overview, 140)}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight.label}
                          className="rounded-[1.5rem] border border-white/45 bg-gradient-to-br from-white/60 to-white/35 p-4 shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
                        >
                          <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/46">
                            {highlight.label}
                          </p>
                          <p className="mt-2 text-[13.5px] font-medium leading-6 text-foreground/78">
                            {compactText(highlight.value, 72)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[2rem] border border-white/40 bg-gradient-to-br from-white/45 to-white/20 p-6 lg:p-7">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/48">
                      이 프로젝트에서 보여준 점
                    </p>
                    <p className="mt-3 max-w-[28ch] text-[1.08rem] font-semibold leading-8 text-foreground/86">
                      {compactText(project.cardPoint, 86)}
                    </p>

                    <div className="mt-5 space-y-3">
                      {project.strengths.map((strength, index) => (
                        <div
                          key={strength}
                          className="flex items-start gap-3 rounded-2xl border border-white/30 bg-white/40 px-4 py-3.5"
                        >
                          <span className="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/80 text-[11px] font-semibold text-foreground/65">
                            {index + 1}
                          </span>
                          <p className="text-[14px] font-medium leading-6 text-foreground/82">
                            {compactText(strength, 68)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/35 bg-white/30 p-5">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/48">
                      바로가기
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.serviceUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="rounded-full glass-card border-0 hover:bg-white/80"
                        >
                          <a href={project.serviceUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4" />
                            서비스
                          </a>
                        </Button>
                      )}

                      <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="mt-5 grid gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl border border-white/30 bg-white/45 px-4 py-3.5 transition-colors hover:bg-white/60"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-[15px] font-semibold text-foreground">{link.label}</p>
                                <p className="mt-1 text-[13px] leading-6 text-muted-foreground">
                                  {link.description}
                                </p>
                              </div>
                              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-primary">
                아키텍처와 트러블슈팅
              </h2>
              <span className="text-sm text-muted-foreground">
                {project.architectureNodes.length}개 구조 요소 · {project.troubleshooting.length}개 해결 사례
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <BentoCard className="h-full p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <Boxes className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/46">
                      ARCHITECTURE
                    </p>
                    <h3 className="mt-2 text-[1.55rem] font-bold leading-tight text-foreground">
                      이 프로젝트를 어떤 구조로 풀었는지
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                  {compactText(project.architectureOverview, 132)}
                </p>

                <div className="mt-5 space-y-3">
                  {project.architectureNodes.map((node, index) => (
                    <div
                      key={node.name}
                      className="rounded-2xl border border-white/40 bg-white/45 px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[15px] font-semibold text-foreground">{node.name}</p>
                        <span className="text-xs font-semibold tracking-[0.16em] text-foreground/45">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-[13.5px] leading-6 text-muted-foreground">
                        {compactText(node.description, 72)}
                      </p>
                    </div>
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="h-full p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-accent/10 p-3">
                    <Bug className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/46">
                      TROUBLESHOOTING
                    </p>
                    <h3 className="mt-2 text-[1.55rem] font-bold leading-tight text-foreground">
                      문제 해결 요약
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {project.troubleshooting.map((item, index) => (
                    <div
                      key={`${item.issue}-${index}`}
                      className="rounded-[1.5rem] border border-white/40 bg-white/45 px-4 py-4 sm:px-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/42">
                          CASE 0{index + 1}
                        </p>
                        <span className="rounded-full bg-white/55 px-3 py-1 text-[11px] font-semibold text-foreground/54">
                          해결 사례
                        </span>
                      </div>

                      <p className="mt-3 text-[15px] font-semibold leading-7 text-foreground/88">
                        {compactText(item.issue, 58)}
                      </p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white/45 px-3.5 py-3">
                          <p className="text-[10px] font-semibold tracking-[0.18em] text-foreground/44">
                            해결 방향
                          </p>
                          <p className="mt-1.5 text-[13px] leading-6 text-muted-foreground">
                            {compactText(item.approach, 48)}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white/45 px-3.5 py-3">
                          <p className="text-[10px] font-semibold tracking-[0.18em] text-foreground/44">
                            결과
                          </p>
                          <p className="mt-1.5 text-[13px] font-medium leading-6 text-foreground/80">
                            {compactText(item.outcome, 48)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-primary">
                구현 포인트
              </h2>
              <span className="text-sm text-muted-foreground">{project.details.length}개 핵심 포인트</span>
            </div>

            <div className="grid gap-3">
              {project.details.map((detail, index) => (
                <BentoCard key={detail.label} className="p-5">
                  <div className="grid gap-3 sm:grid-cols-[72px_minmax(0,160px)_minmax(0,1fr)] sm:items-start">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/70 text-xs font-semibold tracking-[0.14em] text-foreground/55">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[1.02rem] font-semibold text-foreground">{detail.label}</h3>
                    </div>

                    <p className="text-[14px] leading-7 text-muted-foreground">
                      {compactText(detail.text, 108)}
                    </p>
                  </div>
                </BentoCard>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-primary">
                회고와 다음 개선점
              </h2>
              <span className="text-sm text-muted-foreground">프로젝트를 다시 본다면</span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <BentoCard className="h-full p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/46">
                      RETROSPECTIVE
                    </p>
                    <h3 className="mt-2 text-[1.4rem] font-bold leading-tight text-foreground">
                      이번 프로젝트를 통해 얻은 점
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-[14px] leading-7 text-muted-foreground">
                  {compactText(project.retrospective.reflection, 140)}
                </p>
              </BentoCard>

              <BentoCard className="h-full p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-accent/10 p-3">
                    <RotateCcw className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/46">
                      NEXT STEP
                    </p>
                    <h3 className="mt-2 text-[1.4rem] font-bold leading-tight text-foreground">
                      다시 만든다면 이렇게 개선하겠습니다
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-[14px] leading-7 text-muted-foreground">
                  {compactText(project.retrospective.nextStep, 140)}
                </p>
              </BentoCard>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
