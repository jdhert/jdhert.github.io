import { Film, MessageSquare, PawPrint, type LucideIcon } from "lucide-react"

export interface ProjectDetailItem {
  label: string
  text: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  icon: LucideIcon
  color: string
  bgColor: string
  tech: string[]
  overview: string
  details: ProjectDetailItem[]
  github: string
  size: "large" | "medium"
}

export const projects: Project[] = [
  {
    slug: "cs-chatbot",
    title: "CS-ChatBot",
    summary: "반복적인 운영 문의 대응을 줄이기 위해 만든 CS 챗봇 프로젝트",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
    tech: ["TypeScript", "NLP", "Chatbot"],
    overview:
      "운영/문의 대응 과정에서 반복적으로 확인해야 하는 정보를 더 빠르게 찾고 답변할 수 있도록 만들었습니다.",
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
        text: "유지보수 효율성과 정보 접근성을 높일 수 있는 자동화 방향을 프로젝트로 구체화했습니다.",
      },
    ],
    github: "https://github.com/jdhert/CS-ChatBot",
    size: "large",
  },
  {
    slug: "scenehive",
    title: "SceneHive",
    summary: "프론트엔드와 백엔드를 함께 설계하며 서비스 흐름을 구현한 웹 프로젝트",
    icon: Film,
    color: "text-accent",
    bgColor: "bg-accent/10",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    overview:
      "사용자 흐름과 데이터 흐름이 자연스럽게 이어지는 구조를 end-to-end로 구현해보고자 진행한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "화면 흐름과 서버 데이터 구조가 어긋나지 않도록 처음부터 일관된 서비스 구조를 설계하는 데 집중했습니다.",
      },
      {
        label: "구현 내용",
        text: "RESTful API를 설계하고 프론트엔드와 연동하면서 화면과 서버 간 인터페이스를 맞췄습니다.",
      },
      {
        label: "의미",
        text: "서비스 구조 설계부터 API 연동까지 전 과정을 경험하며 풀스택 이해도를 넓혔습니다.",
      },
    ],
    github: "https://github.com/jdhert/SceneHive",
    size: "medium",
  },
  {
    slug: "pet-public",
    title: "Pet-Public",
    summary: "반려동물 정보를 공유하고 소통할 수 있도록 만든 커뮤니티 서비스",
    icon: PawPrint,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    tech: ["Spring", "Vue", "MySQL"],
    overview:
      "반려동물 관련 정보를 공유하고 소통할 수 있도록 커뮤니티 핵심 기능을 중심으로 구성한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "게시판, 댓글, 좋아요 같은 커뮤니티 핵심 기능이 자연스럽게 연결되는 구조가 필요했습니다.",
      },
      {
        label: "구현 내용",
        text: "데이터 구조를 설계하고 사용자 중심의 소셜 기능을 구현했습니다.",
      },
      {
        label: "의미",
        text: "도메인 구조와 상호작용 기능을 함께 설계하며 커뮤니티 서비스 개발 경험을 쌓았습니다.",
      },
    ],
    github: "https://github.com/jdhert/Pet-Public",
    size: "medium",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
