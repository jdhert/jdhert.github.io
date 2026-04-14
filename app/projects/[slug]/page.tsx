import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react"
import { AnimatedBackground } from "@/components/portfolio/animated-background"
import { MouseGradient } from "@/components/portfolio/mouse-gradient"
import { BentoCard } from "@/components/portfolio/bento-grid"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, projects } from "@/lib/projects"
import { portfolio } from "@/lib/portfolio"

export const dynamicParams = false

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

  return (
    <>
      <AnimatedBackground />
      <MouseGradient />

      <main className="relative z-10 min-h-screen px-6 py-12 lg:px-24">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full glass-card border-0 hover:bg-white/80"
            >
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4" />
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
                    <Globe className="w-4 h-4" />
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
                    <ArrowUpRight className="w-4 h-4" />
                    문서 보기
                  </a>
                </Button>
              )}

              <Button
                asChild
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub 보기
                </a>
              </Button>
            </div>
          </div>

          <BentoCard highlight className="p-8 lg:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-5">
                  <div
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${project.bgColor}`}
                  >
                    <Icon className={`w-4 h-4 ${project.color}`} />
                    <span className="text-sm font-medium text-foreground/80">프로젝트 상세</span>
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                      {project.title}
                    </h1>
                    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/35 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                    기술 스택
                  </p>
                  <div className="flex max-w-sm flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {project.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/45 bg-white/45 px-4 py-4 shadow-[0_12px_30px_rgba(255,255,255,0.18)]"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/80">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5">
                  <div
                    className={`self-start overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.08)] ${
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
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                              {project.serviceUrl ? "SERVICE URL" : "프로젝트 미리보기"}
                            </p>
                            {project.serviceUrl && (
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80">
                                Open
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </span>
                            )}
                          </div>
                          <h2 className="mt-3 text-2xl font-semibold text-foreground">
                            {project.title}
                          </h2>
                          {project.serviceUrl ? (
                            <p className="mt-3 max-w-lg break-all text-sm leading-relaxed text-muted-foreground">
                              {project.serviceUrl}
                            </p>
                          ) : (
                            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                              아직 상세 스크린샷이 없는 프로젝트입니다. 추후 실제 화면이나 흐름을
                              추가하면 더 입체적으로 보여줄 수 있습니다.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="rounded-[2rem] border border-white/45 bg-white/50 p-6 shadow-[0_16px_40px_rgba(255,255,255,0.18)]">
                    <p className="mb-4 text-sm font-semibold text-foreground/70">프로젝트 개요</p>
                    <p className="text-[17px] font-medium leading-8 text-foreground/85">
                      {project.overview}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-[1.75rem] border border-white/45 bg-gradient-to-br from-white/60 to-white/35 p-5 shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
                      >
                        <p className="text-sm font-semibold text-foreground/70">
                          {highlight.label}
                        </p>
                        <p className="mt-3 text-[15px] font-medium leading-7 text-foreground/80">
                          {highlight.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-fit rounded-[2rem] border border-white/40 bg-gradient-to-br from-white/45 to-white/20 p-6 lg:p-7">
                  <p className="mb-3 text-sm font-semibold text-foreground/70">
                    이 프로젝트에서 보여준 점
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.cardPoint}
                  </p>

                  <div className="mt-6 space-y-4">
                    {project.strengths.map((strength, index) => (
                      <div key={strength} className="rounded-2xl bg-white/45 px-4 py-4">
                        <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                          핵심 포인트 {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                          {strength}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/35 bg-white/30 p-4">
                    <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                      바로가기
                    </p>

                    {project.serviceUrl && (
                      <div className="mt-3 rounded-2xl border border-white/30 bg-white/45 p-4">
                        <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                          SERVICE URL
                        </p>
                        <a
                          href={project.serviceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          실제 서비스 바로가기
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                        <p className="mt-2 break-all text-sm leading-relaxed text-muted-foreground">
                          {project.serviceUrl}
                        </p>
                      </div>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      저장소에서 코드 보기
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      구현 구조와 커밋 이력, 실제 코드 흐름은 GitHub 저장소에서 자세히 확인할 수
                      있습니다.
                    </p>

                    {project.links && project.links.length > 0 && (
                      <div className="mt-5 space-y-3">
                        <p className="text-xs font-semibold tracking-[0.16em] text-foreground/55">
                          참고 자료
                        </p>
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl border border-white/30 bg-white/45 px-4 py-4 transition-colors hover:bg-white/60"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold text-foreground">{link.label}</p>
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-primary">
                구현 포인트
              </h2>
              <span className="text-sm text-muted-foreground">
                {project.details.length}개의 상세 포인트
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {project.details.map((detail, index) => (
                <BentoCard key={detail.label} className="h-full p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold tracking-[0.16em] text-foreground/50">
                        0{index + 1}
                      </span>
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${project.bgColor.replace("/10", "")}`}
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {detail.label}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {detail.text}
                      </p>
                    </div>
                  </div>
                </BentoCard>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
