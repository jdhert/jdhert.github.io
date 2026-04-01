"use client"

import { BentoCard } from "./bento-grid"
import { Award, Calendar } from "lucide-react"

const certificates = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024.06",
    highlight: true,
  },
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    date: "2024.06",
    highlight: false,
  },
  {
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회",
    date: "2024.06",
    highlight: false,
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 scroll-mt-24">
      <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
        자격증
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <BentoCard 
            key={index} 
            highlight={cert.highlight}
            className="text-center"
          >
            <div className="flex flex-col items-center">
              <div className={`p-3 rounded-2xl mb-4 ${cert.highlight ? 'bg-primary/10' : 'bg-secondary'}`}>
                <Award className={`w-6 h-6 ${cert.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {cert.date}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
