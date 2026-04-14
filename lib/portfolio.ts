export const portfolio = {
  name: "박세한",
  role: "운영 이슈를 구조적으로 해결하는 백엔드 개발자",
  email: "kkuladong12@gmail.com",
  githubUrl: "https://github.com/jdhert",
  siteUrl: "https://jdhert.github.io",
  defaultOgImage: "/projects/cs-chatbot-detail.png",
  resumeRequestSubject: "박세한 이력서 요청",
  resumeRequestBody:
    "안녕하세요. 포트폴리오를 보고 연락드립니다.%0D%0A%0D%0A이력서 PDF 공유 부탁드립니다.",
  resumeRequestNote: "PDF 이력서는 요청 주시면 바로 전달드릴 수 있습니다.",
  headline: "운영 환경의 병목을 분석하고, 안정적인 구조로 개선하는 백엔드 개발자",
  summary:
    "최대 3,300명 규모 그룹웨어 운영 환경에서 장애 대응, 쿼리 분석, 레거시 개선을 경험했습니다.",
  heroHighlights: [
    "운영 이슈를 빠르게 좁히고 구조적으로 정리합니다.",
    "Deadlock, 느린 쿼리, 레거시 개선 경험이 있습니다.",
  ],
  keyFacts: [
    {
      label: "운영 환경",
      value: "최대 3,300명 규모 그룹웨어 서비스",
    },
    {
      label: "집중 영역",
      value: "장애 대응, Deadlock 분석, 쿼리 튜닝",
    },
    {
      label: "업무 방식",
      value: "문제를 빠르게 좁히고 구조적으로 개선",
    },
  ],
  hiringPitch:
    "운영 환경의 문제를 빠르게 좁히고, 개선 가능한 구조로 연결하는 백엔드 개발자입니다.",
  decisionCards: [
    {
      title: "운영 이슈 대응 경험",
      value: "3,300명+ 환경",
      description: "실사용자 환경에서 장애 대응과 안정성 개선을 경험했습니다.",
    },
    {
      title: "분석 중심 문제 해결",
      value: "Deadlock · 쿼리",
      description: "흐름과 병목 지점을 좁혀가며 문제를 해결했습니다.",
    },
    {
      title: "개선까지 연결하는 개발",
      value: "구조 · 유지보수",
      description: "임시 대응에 그치지 않고 구조 개선까지 연결했습니다.",
    },
  ],
  fitAreas: [
    "운영 중 발생하는 장애나 병목을 빠르게 정리해야 하는 팀",
    "레거시 구조를 유지보수 가능한 형태로 다듬어야 하는 서비스",
  ],
  workStyle: [
    "문제를 먼저 좁히고 원인 후보를 빠르게 구조화합니다.",
    "수정 이후에도 설명 가능한 상태를 남기려 합니다.",
  ],
  skillApproach: [
    "실무 운영 환경에서 반복적으로 다룬 기술과, 프로젝트로 확장해본 기술을 구분해 정리했습니다.",
    "이름만 아는 기술보다 실제 문제 해결에 사용한 기술 위주로 남겼습니다.",
    "백엔드 중심이지만 화면, 데이터, 배포까지 이어지는 흐름 단위로 이해하고 있습니다.",
  ],
  skillEvidence: [
    {
      key: "backend",
      title: "Backend",
      summary: "운영 이슈 대응과 서비스 기능 구현 모두에서 가장 오래 집중한 영역입니다.",
      skills: ["Java", "Spring", "Spring Boot", "MyBatis"],
      evidence:
        "그룹웨어 유지보수, CS-ChatBot API 구성, SceneHive 백엔드 설계처럼 실제 운영과 기능 개발 양쪽에서 반복 사용했습니다.",
      related: ["운영 유지보수", "CS-ChatBot", "SceneHive", "Pet-Public"],
    },
    {
      key: "frontend",
      title: "Frontend",
      summary: "화면을 예쁘게 만드는 것보다, 서비스 흐름이 끊기지 않게 연결하는 관점으로 다뤘습니다.",
      skills: ["Vue", "React", "Next.js", "TypeScript"],
      evidence:
        "SceneHive와 포트폴리오에서는 Next.js/React를, Pet-Public에서는 Vue를 사용하며 화면과 API 흐름을 맞췄습니다.",
      related: ["SceneHive", "포트폴리오", "Pet-Public"],
    },
    {
      key: "database",
      title: "Database",
      summary: "저장 구조를 설계하는 것보다 더 자주, 느린 구간과 운영 데이터를 읽어내는 역할로 깊게 다뤘습니다.",
      skills: ["MSSQL", "MySQL", "MariaDB", "PostgreSQL", "pgvector"],
      evidence:
        "실무에서는 MSSQL 기반 장애 원인 분석과 쿼리 튜닝을, 개인 프로젝트에서는 PostgreSQL과 pgvector 기반 검색 구조를 경험했습니다.",
      related: ["운영 유지보수", "CS-ChatBot", "SceneHive", "Pet-Public"],
    },
    {
      key: "infra",
      title: "Infra / Cloud",
      summary: "배포 자체보다도, 서비스가 실제로 동작하고 검증되는 흐름을 만드는 데 초점을 맞췄습니다.",
      skills: ["AWS", "Oracle Cloud", "Docker", "Vercel"],
      evidence:
        "CS-ChatBot 배포와 포트폴리오 운영처럼, 개발 결과물이 실제 URL과 운영 검증으로 이어지도록 정리했습니다.",
      related: ["CS-ChatBot", "포트폴리오"],
    },
  ],
} as const
