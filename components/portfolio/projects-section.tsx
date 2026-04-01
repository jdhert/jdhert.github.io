"use client"

import { useRouter } from "next/navigation"
import { BentoCard } from "./bento-grid"
import { ArrowUpRight, Github } from "lucide-react"
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
