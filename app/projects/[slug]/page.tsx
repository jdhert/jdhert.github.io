import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
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
      siteName: `${portfolio.name} Resume`,
      locale: "ko_KR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${portfolio.name}`,
      description: project.summary,
      creator: "@jdhert",
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

          <BentoCard highlight className="p-8 lg:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-5">
                  <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${project.bgColor}`}>
                    <Icon className={`w-4 h-4 ${project.color}`} />
                    <span className="text-sm font-medium text-foreground/80">Project Detail</span>
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

              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/40 bg-white/35 p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                    프로젝트 개요
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/40 bg-gradient-to-br from-white/45 to-white/20 p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                    바로가기
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    저장소에서 코드 보기
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    구현 구조와 커밋 내역, 실제 코드 흐름은 GitHub 저장소에서 자세히 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                프로젝트 설명
              </h2>
              <span className="text-sm text-muted-foreground">
                {project.details.length}개의 핵심 포인트
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {project.details.map((detail, index) => (
                <BentoCard key={detail.label} className="h-full p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/50">
                        0{index + 1}
                      </span>
                      <div className={`h-2.5 w-2.5 rounded-full ${project.bgColor.replace("/10", "")}`} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{detail.label}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{detail.text}</p>
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
