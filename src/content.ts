export const meta = {
  name: "Umer Karachiwala",
  title: "Backend & Cloud Engineer",
  location: "Donegal, Ireland (remote friendly)",
  email: "karachiwalaumer2612@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/umerkarachiwala/" },
    { label: "GitHub", href: "https://github.com/karachiwalaumer" },
    { label: "Portfolio", href: "https://karachiwalaumer.netlify.app/" },
  ],
};

export const hero = {
  headline: "Backend & Cloud Engineer building resilient APIs and AI automation.",
  subheadline: "Specialized in Microsoft Teams automation, compliance AI, and cloud-native rollouts on Azure and AWS.",
  summary: "I design backend systems that stay calm under heavy traffic, add AI insight where it matters, and back everything with observability and clean deployments.",
  ctas: [
    { label: "Email", href: "mailto:karachiwalaumer2612@gmail.com" },
    { label: "Projects", href: "#projects" },
  ],
  chips: ["2+ yrs backend", "Azure & AWS", "AI + compliance", "Teams & Zoom automation"],
  snapshots: [
    { title: "Focus", detail: "APIs, automation, AI features" },
    { title: "Deploy", detail: "Azure AKS, AWS EKS/EC2" },
    { title: "Stack", detail: "Node.js, TS, C#, Python" },
    { title: "Ops", detail: "CI/CD, logging, alerting" },
  ],
};

export const highlights = [
  {
    title: "Enterprise Teams automation",
    result: "Bots and messaging workflows for Microsoft Teams, ready for enterprise rollout.",
    details: ["Azure AKS deploys with CI/CD and observability.", "Async jobs + caching to keep responses fast on MongoDB/Redis."],
  },
  {
    title: "Compliance AI platform",
    result: "Document intelligence across PDF/DOCX/Excel with vector search and mapping.",
    details: ["Automated scoring and evidence linking via async workers.", "Reduced manual mapping and sped up compliance responses."],
  },
  {
    title: "Low-latency media insights",
    result: "Live insights during Teams/Zoom calls with routed audio/video streams.",
    details: ["Microsoft PSI pipeline with LRU routing for throughput.", "Containerized cross-platform builds shipped to AWS EKS."],
  },
];

export const experience = [
  {
    role: "Jr Backend Engineer",
    company: "WebOsmotic Private Limited",
    period: "Oct 2023 – Jun 2025",
    location: "Remote / India",
    summary: [
      "APIs with Node.js/TypeScript and C# for Teams authentication, messaging, and meeting workflows.",
      "Azure AKS delivery with CI/CD, logging, and alerting; tuned MongoDB/Redis for low latency.",
      "AI-driven document parsing and vector search to speed compliance answers across PDF/DOCX/Excel/images.",
    ],
    stack: ["Node.js", "TypeScript", "C#", "Azure AKS", "MongoDB", "Redis", "Docker"],
  },
  {
    role: "Software Engineer Intern",
    company: "CodeInBound",
    period: "Mar 2023 – Jun 2023",
    location: "Remote",
    summary: ["Python + Pandas pipelines for network signal processing.", "FastAPI services exposing predictions; collaborated on rollout and evaluation."],
    stack: ["Python", "Pandas", "FastAPI", "Docker"],
  },
];

export const projects = [
  {
    name: "Realtime Meeting Intelligence",
    summary: "Live insights for Teams/Zoom with PSI-routed audio/video streams.",
    impact: "Kept latency low for enterprise deployments; containerized cross-platform builds shipped to AWS EKS.",
    stack: [".NET", "C++", "Microsoft PSI", "AWS EKS", "Kustomize"],
  },
  {
    name: "Compliance Automation Platform",
    summary: "AI-assisted evidence and policy mapping for narad.io.",
    impact: "Automated ingestion and scoring for PDFs/DOCX/Excel/images; reduced manual compliance effort.",
    stack: ["Node.js", "TypeScript", "Azure AKS", "MongoDB", "Redis"],
  },
  {
    name: "Restaurant Platform",
    summary: "Stripe-powered ordering with admin controls.",
    impact: "Health-checked EC2 deploys with auto-restart scripts kept checkout failures low.",
    stack: ["Node.js", "Stripe", "AWS EC2"],
  },
];

export const skills = {
  backend: ["Node.js", "TypeScript", "Python (FastAPI)", "Golang", "C#", "REST/gRPC"],
  cloud: ["AWS (Lambda, SQS, API Gateway, EC2, ECS)", "Azure (Bot Service, AKS)", "Docker", "Kubernetes", "Terraform"],
  data: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "S3", "Queues & Webhooks"],
  reliability: ["Observability (Prometheus, ELK, CloudWatch)", "Retries & Backpressure", "Canary & feature flags", "Auth, Stripe, Twilio"],
};

export const credentials = {
  certs: [
    "AWS Cloud Quest: Generative AI Practitioner",
    "MongoDB: Search with MongoDB",
    "MongoDB: AI-Powered Search with MongoDB Vector Search",
    "AWS Cloud Quest: Cloud Practitioner",
  ],
  education: [
    "MSc Computing (DevOps), Atlantic Technological University (in progress)",
    "B.Tech Computer Engineering, Bhagwan Mahavir College | CGPA: 8.48/10",
  ],
};

export const achievements = [
  "FusionHack 2024 finalist: built a Go-based scheduling API with real-time orchestration.",
  "Solved 300+ algorithm problems across platforms; continued problem-solving practice.",
  "Peer coach for data structures/backend fundamentals; mentored 20+ students.",
];
