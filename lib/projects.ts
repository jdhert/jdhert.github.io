import { Film, MessageSquare, PawPrint, type LucideIcon } from "lucide-react"

export interface ProjectDetailItem {
  label: string
  text: string
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectLink {
  label: string
  href: string
  description: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  cardPoint: string
  recommendedFor: string
  icon: LucideIcon
  color: string
  bgColor: string
  tech: string[]
  badges: string[]
  facts: ProjectFact[]
  overview: string
  details: ProjectDetailItem[]
  highlights: ProjectHighlight[]
  strengths: string[]
  imageSrc?: string
  imageAlt?: string
  github: string
  serviceUrl?: string
  links?: ProjectLink[]
  size: "large" | "medium"
}

export const projects: Project[] = [
  {
    slug: "cs-chatbot",
    title: "CS-ChatBot",
    summary: "사내 매뉴얼·FAQ·운영 이력을 RAG로 검색해 답변하는 CS 챗봇 시스템",
    cardPoint: "44,955개 청크 기반 검색과 운영 smoke 4/4 통과를 통해 실제 운영 가능한 자동응답 흐름을 검증했습니다.",
    recommendedFor:
      "운영 자동화, RAG 품질 검증, 실제 서비스 배포 가능성을 보고 싶을 때 가장 먼저 보기 좋은 프로젝트",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
    tech: ["TypeScript", "RAG", "pgvector", "Gemini"],
    badges: ["개인", "RAG", "배포", "운영 검증"],
    facts: [
      { label: "기간", value: "2026.03 - 2026.04" },
      { label: "인원", value: "개인 프로젝트" },
      { label: "역할", value: "기획 · 개발 · 배포" },
      { label: "담당", value: "RAG 검색 · 챗 UI · 운영 배포" },
      { label: "성과", value: "Top1 37/37 · Smoke 4/4" },
    ],
    overview:
      "사내 매뉴얼, FAQ, 운영 이력 데이터를 PostgreSQL + pgvector에 적재하고, Rule 기반 검색과 Vector Similarity를 함께 사용하는 하이브리드 RAG 챗봇으로 운영 문의 답변 흐름을 구축한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "운영 담당자가 반복 문의마다 매뉴얼과 과거 처리 이력을 직접 찾아야 해서, 답변 속도와 일관성이 담당자 숙련도에 의존하는 문제가 있었습니다.",
      },
      {
        label: "구현 내용",
        text: "44,955개 임베딩 청크를 적재하고, pgvector 기반 유사도 검색과 Rule 기반 검색을 결합해 사용자의 질문에 관련 이력과 매뉴얼 후보를 함께 제공하도록 구성했습니다.",
      },
      {
        label: "의미",
        text: "운영 smoke 평가 4/4 통과, 50건 운영성 질의셋 기준 Top1 37/37·부정 질의 차단 13/13 결과로 서비스화 가능성을 검증했습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "사내 지원 시스템을 위한 RAG 기반 질의응답 챗봇 플랫폼",
      },
      {
        label: "집중 포인트",
        value: "Rule 검색, Vector Similarity, LLM reranking을 결합해 운영 이력과 매뉴얼 후보의 검색 정확도를 높이는 데 집중했습니다.",
      },
      {
        label: "기대 효과",
        value: "반복 문의에 대해 근거 이력과 매뉴얼을 함께 제시해 담당자의 검색 시간을 줄이고 답변 일관성을 높일 수 있는 구조를 만들었습니다.",
      },
    ],
    strengths: [
      "운영 문의를 단순 FAQ가 아니라 검색 품질과 응답 신뢰도 문제로 정의한 경험",
      "PostgreSQL, pgvector, Gemini Embedding 기반으로 RAG 검색 파이프라인을 구성한 경험",
      "운영 smoke와 평가 지표를 두어 실제 서비스 배포 후에도 품질을 확인할 수 있게 만든 프로젝트",
    ],
    imageSrc: "/projects/cs-chatbot-detail.png",
    imageAlt: "CS-ChatBot 프로젝트 화면",
    github: "https://github.com/jdhert/CS-ChatBot",
    serviceUrl: "https://csbotservice.com",
    links: [
      {
        label: "README",
        href: "https://github.com/jdhert/CS-ChatBot/blob/main/README.md",
        description: "RAG 구조, 운영 평가 지표, 배포 아키텍처를 확인할 수 있습니다.",
      },
      {
        label: "개요 문서",
        href: "https://github.com/jdhert/CS-ChatBot/blob/main/docs/CS-ChatBot_%EA%B0%9C%EC%9A%94.pdf",
        description: "프로젝트 목적과 구현 방향을 요약한 개요 문서입니다.",
      },
    ],
    size: "large",
  },
  {
    slug: "scenehive",
    title: "SceneHive",
    summary: "영화 탐색, 영화 클럽, 실시간 토론을 연결한 영화 커뮤니티 플랫폼",
    cardPoint: "TMDB 탐색 흐름과 영화 클럽·실시간 채팅·명대사/리뷰 아카이브를 하나의 서비스 흐름으로 연결했습니다.",
    recommendedFor:
      "풀스택 구성, 외부 API 연동, 실시간 기능이 포함된 end-to-end 웹서비스 경험을 보고 싶을 때 좋은 프로젝트",
    icon: Film,
    color: "text-accent",
    bgColor: "bg-accent/10",
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket"],
    badges: ["개인", "Full-stack", "WebSocket", "커뮤니티"],
    facts: [
      { label: "기간", value: "2026.02 - 2026.03" },
      { label: "인원", value: "개인 프로젝트" },
      { label: "역할", value: "기획 · Full-stack 개발" },
      { label: "담당", value: "TMDB 연동 · 인증 · 실시간 채팅" },
      { label: "성과", value: "탐색-커뮤니티 흐름 end-to-end 구현" },
    ],
    overview:
      "TMDB 기반 영화/TV/인물 탐색에서 즐겨찾기, 영화 클럽 참여, 실시간 채팅, 명대사와 리뷰 기록까지 이어지는 커뮤니티 흐름을 Next.js 프론트엔드와 Spring Boot 백엔드로 구현한 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "단순 영화 정보 조회를 넘어 사용자가 작품을 탐색한 뒤 커뮤니티 공간에서 대화하고 기록을 남기는 흐름까지 연결해야 했습니다.",
      },
      {
        label: "구현 내용",
        text: "TMDB API 연동, JWT/OAuth2 인증, 영화 클럽 Workspace, STOMP WebSocket 기반 실시간 채팅, 즐겨찾기와 알림 흐름을 프론트엔드와 백엔드 인터페이스에 맞춰 구현했습니다.",
      },
      {
        label: "의미",
        text: "외부 콘텐츠 데이터는 TMDB에서 조회하고, 커뮤니티 데이터는 로컬 DB에서 관리하는 구조를 통해 외부 API와 내부 도메인 모델을 분리해 설계한 경험을 쌓았습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "영화 탐색과 커뮤니티 기록을 결합한 end-to-end 웹 서비스 프로젝트",
      },
      {
        label: "집중 포인트",
        value: "TMDB 탐색, 인증, Workspace 멤버십, 실시간 채팅, 리뷰/메모 CRUD가 끊기지 않도록 API와 화면 흐름을 맞추는 데 집중했습니다.",
      },
      {
        label: "기대 효과",
        value: "외부 API 기반 콘텐츠와 내부 커뮤니티 데이터를 분리해 관리하면서 서비스 확장에 필요한 도메인 구조를 경험했습니다.",
      },
    ],
    strengths: [
      "Next.js 화면 흐름과 Spring Boot API 계약을 함께 맞추며 탐색-참여-기록 흐름을 연결한 경험",
      "JWT/OAuth2 인증, WebSocket 채팅, 알림, Workspace 멤버십을 하나의 커뮤니티 도메인으로 구성한 경험",
      "TMDB 외부 데이터와 PostgreSQL 내부 데이터를 역할별로 분리해 설계한 프로젝트",
    ],
    imageSrc: "/projects/scenehive-detail.png",
    imageAlt: "SceneHive 프로젝트 화면",
    github: "https://github.com/jdhert/SceneHive",
    links: [
      {
        label: "README",
        href: "https://github.com/jdhert/SceneHive/blob/main/README.md",
        description: "서비스 구조, 핵심 기능, 데이터 모델을 정리한 문서입니다.",
      },
      {
        label: "프로젝트 가이드",
        href: "https://github.com/jdhert/SceneHive/blob/main/PROJECT_GUIDE.md",
        description: "디렉터리 구조와 세부 설계를 더 깊게 볼 수 있는 가이드입니다.",
      },
    ],
    size: "medium",
  },
  {
    slug: "pet-public",
    title: "Pet-Public",
    summary: "반려동물 일상 기록, Q&A, 동반 장소 탐색을 제공하는 커뮤니티 서비스",
    cardPoint: "펫스타그램, Q&A, 다이어리, 카카오맵·공공 API 장소 검색을 연결해 반려동물 사용자 흐름을 구성했습니다.",
    recommendedFor:
      "팀 프로젝트 리딩, 커뮤니티 CRUD, 지도 API와 소셜 로그인 조합 경험을 보고 싶을 때 좋은 프로젝트",
    icon: PawPrint,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    tech: ["Spring", "Vue", "MySQL"],
    badges: ["5인 팀", "팀장", "지도 API", "커뮤니티"],
    facts: [
      { label: "기간", value: "2024.04 - 2024.06" },
      { label: "인원", value: "5인 팀 프로젝트" },
      { label: "역할", value: "팀장 · 개발" },
      { label: "담당", value: "Q&A · 다이어리 · 장소 검색 흐름" },
      { label: "성과", value: "소셜 로그인·지도·커뮤니티 기능 통합" },
    ],
    overview:
      "반려동물과 함께하는 일상을 기록하고, 경험을 공유하며, 동반 가능한 장소를 탐색할 수 있도록 펫스타그램, Q&A, 액티비티, 다이어리, 마이페이지 기능을 구성한 팀 프로젝트입니다.",
    details: [
      {
        label: "해결 과제",
        text: "반려동물 커뮤니티 사용자가 기록, 질문, 장소 탐색을 각각 따로 사용하는 것이 아니라 하나의 서비스 안에서 자연스럽게 오가도록 만드는 것이 과제였습니다.",
      },
      {
        label: "구현 내용",
        text: "자유게시판과 Q&A 답변 CRUD, 다이어리 CRUD, 소셜 로그인, 카카오맵 로드뷰와 공공 API 기반 장소 검색 흐름을 Spring/Vue/MySQL 기반으로 구현했습니다.",
      },
      {
        label: "의미",
        text: "팀장 역할로 기능 범위를 조율하며, 커뮤니티 상호작용과 위치 기반 정보 탐색을 함께 다루는 서비스 개발 경험을 쌓았습니다.",
      },
    ],
    highlights: [
      {
        label: "프로젝트 성격",
        value: "반려동물 일상 기록과 장소 탐색을 결합한 커뮤니티 플랫폼 프로젝트",
      },
      {
        label: "집중 포인트",
        value: "펫스타그램, Q&A, 다이어리, 액티비티 지도 기능이 사용자 목적별로 이어지도록 구성했습니다.",
      },
      {
        label: "기대 효과",
        value: "게시판 CRUD뿐 아니라 소셜 로그인, 지도·로드뷰, 공공 API 검색을 함께 다루며 실서비스형 기능 조합을 경험했습니다.",
      },
    ],
    strengths: [
      "반려동물 사용자 여정을 기록, 질문, 장소 탐색으로 나누고 화면 흐름에 맞춰 기능을 구성한 경험",
      "Spring, Vue, MySQL, MyBatis 기반으로 게시판/Q&A/다이어리 CRUD를 구현한 경험",
      "카카오맵 로드뷰와 공공 API 장소 검색을 커뮤니티 서비스에 연결한 프로젝트",
    ],
    imageSrc: "/projects/pet-public-detail.png",
    imageAlt: "Pet-Public 프로젝트 메인 화면",
    github: "https://github.com/jdhert/Pet-Public",
    links: [
      {
        label: "README",
        href: "https://github.com/jdhert/Pet-Public/blob/master/README.md",
        description: "기능 범위와 사용 기술, 배포 주소를 확인할 수 있습니다.",
      },
      {
        label: "Wiki",
        href: "https://github.com/jdhert/Pet-Public/wiki",
        description: "팀 프로젝트 진행 과정과 추가 자료를 볼 수 있습니다.",
      },
      {
        label: "PPT",
        href: "https://www.canva.com/design/DAGAtHJ__6E/w_r6gat_Xpq1i0Re05Ka5A/edit?utm_content=DAGAtHJ__6E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        description: "프로젝트 소개 자료로 흐름과 기능 설명을 빠르게 확인할 수 있습니다.",
      },
    ],
    size: "medium",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
