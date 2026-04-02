import { Film, MessageSquare, PawPrint, type LucideIcon } from "lucide-react"

export interface ProjectDetailItem {
  label: string
  text: string
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  cardPoint: string
  icon: LucideIcon
  color: string
  bgColor: string
  tech: string[]
  overview: string
  details: ProjectDetailItem[]
  highlights: ProjectHighlight[]
  strengths: string[]
  imageSrc?: string
  imageAlt?: string
  github: string
  size: "large" | "medium"
}

export const projects: Project[] = [
  {
    slug: "cs-chatbot",
    title: "CS-ChatBot",
    summary: "반복적인 운영 문의 대응을 줄이기 위해 만든 CS 챗봇 프로젝트",
    cardPoint: "반복 문의를 자동화 문제로 정의하고 FAQ 응답 흐름을 설계한 프로젝트입니다.",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
    tech: ["TypeScript", "NLP", "Chatbot"],
    overview:
      "운영·문의 대응 과정에서 반복적으로 확인해야 하는 정보를 더 빠르게 찾고 답변할 수 있도록, FAQ 중심의 응답 흐름을 설계한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "운영 담당자가 자주 묻는 질문과 업무 지식을 빠르게 찾기 어려운 문제를 줄이는 것이 목표였습니다.",
      },
      {
        label: "구현 내용",
        text: "문의 흐름을 고려한 챗봇 구조를 설계하고, FAQ 자동 응답 기능을 구현했습니다.",
      },
      {
        label: "의미",
        text: "운영 효율성과 정보 접근성을 높일 수 있는 자동화 방향을 프로젝트로 구체화했습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "운영 문의 대응을 줄이기 위한 자동화형 챗봇 프로젝트",
      },
      {
        label: "집중 포인트",
        value: "FAQ 응답 흐름과 지식 접근 경로를 빠르게 구성하는 데 집중했습니다.",
      },
      {
        label: "기대 효과",
        value: "반복 문의 대응 시간을 줄이고 운영 효율을 높일 수 있는 방향을 검증했습니다.",
      },
    ],
    strengths: [
      "반복 업무를 기능 요구사항이 아니라 운영 효율 문제로 정의한 경험",
      "TypeScript 기반으로 챗봇 응답 흐름과 FAQ 구조를 설계한 경험",
      "자동화가 실제 운영 부담을 어떻게 줄일지 관점까지 담아낸 프로젝트",
    ],
    imageSrc: "/projects/cs-chatbot-detail.png",
    imageAlt: "CS-ChatBot 프로젝트 화면",
    github: "https://github.com/jdhert/CS-ChatBot",
    size: "large",
  },
  {
    slug: "scenehive",
    title: "SceneHive",
    summary: "프론트엔드와 백엔드를 함께 설계하며 서비스 흐름을 구현한 웹 프로젝트",
    cardPoint: "프론트엔드와 백엔드 인터페이스를 end-to-end로 맞춘 경험이 담긴 프로젝트입니다.",
    icon: Film,
    color: "text-accent",
    bgColor: "bg-accent/10",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    overview:
      "사용자 화면 흐름과 서버 데이터 구조가 자연스럽게 이어지도록, 프론트엔드와 백엔드를 함께 설계하며 end-to-end 흐름을 구현한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "화면 흐름과 서버 데이터 구조가 어긋나지 않도록 처음부터 일관된 서비스 구조를 설계하는 데 집중했습니다.",
      },
      {
        label: "구현 내용",
        text: "RESTful API를 설계하고 프론트엔드와 연동하며 화면과 서버 간 인터페이스를 맞췄습니다.",
      },
      {
        label: "의미",
        text: "서비스 구조 설계부터 API 연동까지 전 과정을 경험하며 풀스택 이해도를 넓혔습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "화면과 서버를 함께 설계한 end-to-end 웹 서비스 프로젝트",
      },
      {
        label: "집중 포인트",
        value: "프론트엔드와 백엔드 사이의 인터페이스를 일관성 있게 맞추는 데 집중했습니다.",
      },
      {
        label: "기대 효과",
        value: "서비스 구조 설계부터 API 연동까지 전체 흐름을 경험하며 시야를 넓혔습니다.",
      },
    ],
    strengths: [
      "프론트엔드와 백엔드 인터페이스를 함께 설계하며 화면-데이터 흐름을 연결한 경험",
      "React, Spring Boot, PostgreSQL 조합으로 구조를 end-to-end로 구현한 경험",
      "기능 구현뿐 아니라 서비스 구조를 처음부터 맞춰본 경험이 드러나는 프로젝트",
    ],
    imageSrc: "/projects/scenehive-detail.png",
    imageAlt: "SceneHive 프로젝트 화면",
    github: "https://github.com/jdhert/SceneHive",
    size: "medium",
  },
  {
    slug: "pet-public",
    title: "Pet-Public",
    summary: "반려동물 정보를 공유하고 소통할 수 있도록 만든 커뮤니티 서비스",
    cardPoint: "게시글, 댓글, 좋아요가 자연스럽게 이어지는 커뮤니티 흐름 설계 경험이 담겨 있습니다.",
    icon: PawPrint,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    tech: ["Spring", "Vue", "MySQL"],
    overview:
      "반려동물 관련 정보를 공유하고 소통할 수 있도록, 게시글과 댓글 같은 커뮤니티 핵심 기능을 중심으로 만든 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "게시글 작성, 댓글, 좋아요 같은 커뮤니티 기능을 자연스럽게 연결하는 구조가 필요했습니다.",
      },
      {
        label: "구현 내용",
        text: "데이터 구조를 설계하고 사용자 중심의 커뮤니티 기능을 구현했습니다.",
      },
      {
        label: "의미",
        text: "도메인 구조와 상호작용 기능을 함께 설계하며 커뮤니티 서비스 개발 경험을 쌓았습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "반려동물 사용자를 위한 커뮤니티 플랫폼 프로젝트",
      },
      {
        label: "집중 포인트",
        value: "게시글, 댓글, 좋아요가 자연스럽게 연결되는 상호작용 구조를 설계했습니다.",
      },
      {
        label: "기대 효과",
        value: "커뮤니티 서비스에 필요한 도메인 모델과 흐름을 실제로 구현하며 감각을 넓혔습니다.",
      },
    ],
    strengths: [
      "커뮤니티 서비스의 기본 상호작용을 데이터 구조와 함께 설계한 경험",
      "Spring, Vue, MySQL 기반으로 CRUD 흐름을 실제 서비스처럼 구성한 경험",
      "도메인 중심 설계와 사용자 상호작용을 함께 고민한 프로젝트",
    ],
    github: "https://github.com/jdhert/Pet-Public",
    size: "medium",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
