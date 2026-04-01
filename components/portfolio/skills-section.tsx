"use client"

import { BentoCard, BentoGrid } from "./bento-grid"
import { Server, Layout, Database, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Java", "Spring", "Spring Boot"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Vue", "React", "Next.js"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    skills: ["MSSQL", "MariaDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Infra / Cloud",
    icon: Cloud,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    skills: ["AWS", "Oracle Cloud", "Docker"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        기술 스택
      </h2>

      <BentoGrid className="grid-cols-1 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <BentoCard 
              key={index}
              className={index === 0 ? "sm:col-span-2" : ""}
              highlight={index === 0}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${category.bgColor}`}>
                  <Icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
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
            </BentoCard>
          )
        })}
      </BentoGrid>
    </section>
  )
}
