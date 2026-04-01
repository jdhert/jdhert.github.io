"use client"

import { BentoCard } from "./bento-grid"
import { Github, MessageSquare, Film, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CS-ChatBot",
    description: "반복적인 운영 문의 대응을 줄이기 위해 만든 CS 챗봇 프로젝트",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
    tech: ["TypeScript", "NLP", "Chatbot"],
    problem: "운영/문의 대응 과정에서 반복적으로 확인해야 하는 정보를 빠르게 찾기 어려웠습니다.",
    role: "문의 흐름을 고려한 챗봇 구조를 설계하고, FAQ 자동 응답 기능을 구현했습니다.",
    outcome: "유지보수 효율성과 정보 접근성을 높일 수 있는 자동화 방향을 프로젝트로 구체화했습니다.",
    github: "https://github.com/jdhert/CS-ChatBot",
    size: "large",
  },
  {
    title: "SceneHive",
    description: "프론트엔드와 백엔드를 함께 설계하며 서비스 흐름을 구현한 웹 프로젝트",
    icon: Film,
    color: "text-accent",
    bgColor: "bg-accent/10",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    problem: "사용자 흐름과 데이터 흐름이 자연스럽게 이어지는 구조를 end-to-end로 구현해보고자 했습니다.",
    role: "RESTful API를 설계하고 프론트엔드와 연동하면서 화면과 서버 간 인터페이스를 맞췄습니다.",
    outcome: "서비스 구조 설계부터 API 연동까지 전 과정을 경험하며 풀스택 이해도를 넓혔습니다.",
    github: "https://github.com/jdhert/SceneHive",
    size: "medium",
  },
  {
    title: "Pet-Public",
    description: "반려동물 정보를 공유하고 소통할 수 있도록 만든 커뮤니티 서비스",
    icon: PawPrint,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    tech: ["Spring", "Vue", "MySQL"],
    problem: "게시판, 댓글, 좋아요 등 커뮤니티 핵심 기능이 자연스럽게 연결되는 구조가 필요했습니다.",
    role: "데이터 구조를 설계하고 사용자 중심의 소셜 기능을 구현했습니다.",
    outcome: "도메인 구조와 상호작용 기능을 함께 설계하며 커뮤니티 서비스 개발 경험을 쌓았습니다.",
    github: "https://github.com/jdhert/Pet-Public",
    size: "medium",
  },
]

export function ProjectsSection() {
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
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${project.bgColor}`}>
                      <Icon className={`w-5 h-5 ${project.color}`} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full h-9 w-9 hover:bg-secondary"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4 flex-grow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">문제</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">기여</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">의미</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
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
