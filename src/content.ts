export const meta = {
  name: "Umer Karachiwala",
  title: "Backend & Cloud Engineer",
  location: "Cork, Ireland",
  email: "karachiwalaumer2612@gmail.com",
  phone: "+353 0896591216",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/umerkarachiwala/" },
    { label: "GitHub", href: "https://github.com/Umer-2612" },
    { label: "Portfolio", href: "https://karachiwalaumer.netlify.app/" },
  ],
};

export const hero = {
  headline: "Backend & Cloud Engineer building resilient systems and AI automation.",
  subheadline:
    "Backend engineer with 2+ years of experience shipping production systems across distributed infrastructure, real-time AI pipelines, and large-scale platform tooling. Currently at Apple.",
  ctas: [
    { label: "Email", href: "mailto:karachiwalaumer2612@gmail.com" },
    { label: "Projects", href: "#projects" },
  ],
  chips: ["2+ yrs backend", "Currently at Apple", "Azure & AWS", "AI + compliance", "Teams & Zoom automation"],
  snapshots: [
    { title: "Focus", detail: "APIs, automation, AI features" },
    { title: "Deploy", detail: "Azure AKS, AWS EKS/EC2" },
    { title: "Stack", detail: "Java, Node.js, C#, Python" },
    { title: "Ops", detail: "CI/CD, logging, alerting" },
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Apple",
    period: "March 2026 – Present",
    location: "Cork, Ireland",
    summary: [
      "Contributing to Apple's internal SEO Manager platform managing metadata across 1M+ URLs, working across 4 distributed services built on Java (Spring Boot), Apache Cassandra, AWS SQS, and Solr.",
      "Built backend for Scheduled Updates and Revert Changeset features — enabling SEO editors to queue metadata changes at future timestamps and auto-revert campaign changes.",
      "Delivered 19 of 25 tracked workstreams in ~12 weeks across feature development, platform health fixes, and CI stability improvements.",
      "Optimised Cassandra consistency levels, simplified Solr search handlers, and eliminated redundant DB reads on metadata update flows, improving system reliability in production.",
      "Built internal Cassandra local setup documentation adopted by the team to eliminate dependency on shared development data.",
      "Collaborated on an internal GenAI Hackathon prototype using Apple's Claude integration to automate regulatory document tracking.",
    ],
    stack: ["Java", "Spring Boot", "Apache Cassandra", "AWS SQS", "Solr", "Distributed Systems"],
  },
  {
    role: "Jr Backend Engineer",
    company: "WebOsmotic Private Limited",
    period: "Apr 2024 – Jun 2025",
    location: "Remote / India",
    summary: [
      "Built a C# .NET Teams bot using Microsoft Graph Communications APIs that autonomously joins scheduled interviews across 5 enterprise clients, processing 100+ interview sessions.",
      "Engineered a sub-second latency stream relay over WebSockets from C# to a Python AI inference server for live transcription, speaker detection, and candidate analysis.",
      "Deployed the bot as an Azure multi-tenant service, handling bot registration, Graph API permissions, SSL config, and lifecycle management.",
      "Built document ingestion and vector search pipelines for narad.io, enabling ~90% reduction in manual compliance effort through RAG-based automated questionnaire responses with up to 98% accuracy.",
      "Owned Jenkins CI/CD as a shared service for a 12-person team — managed pipelines across Docker/AKS/Azure Pipelines and automated backend workflows.",
    ],
    stack: ["C#", ".NET", "Node.js", "TypeScript", "Azure AKS", "MongoDB", "Redis", "Docker"],
  },
];

export const projects = [
  {
    name: "Realtime Meeting Intelligence",
    summary: "AI meeting assistants for Teams (.NET) and Zoom (C++), streaming real-time audio/video via Microsoft PSI.",
    impact: "Architected the Teams media pipeline and refactored the Zoom SDK for high-throughput, low-latency handling. Containerized builds shipped to AWS EKS.",
    stack: [".NET", "C++", "Microsoft PSI", "AWS EKS", "Kustomize"],
  },
  {
    name: "Restaurant Platform (Australia)",
    summary: "Backend API layer with Stripe integration and admin controls for a live restaurant site.",
    impact: "Deployed on AWS EC2 with auto-restart scripts and health checks.",
    stack: ["Node.js", "Stripe", "AWS EC2"],
  },
  {
    name: "Multi-Agent Voice AI Framework",
    summary: "LangChain-inspired multi-agent framework for orchestrating GPT-driven business automation.",
    impact: "Implemented agent memory, tool integration, and autonomous reasoning loops. Real-time conversational agent with encrypted message queues.",
    stack: ["Python", "LangChain", "OpenAI", "Voice AI"],
  },
];

export const skills = {
  "Programming Languages": ["Java (Spring Boot)", "Node.js (Express)", "TypeScript", "Python", ".NET / C#", "C++"],
  "Cloud & Infrastructure": ["AWS (EKS, CloudFormation, EC2, AutoScaling)", "Azure (AKS, Bot Services, Pipelines)", "Docker", "Kubernetes", "Terraform"],
  "Databases & Search": ["Apache Cassandra", "MongoDB", "PostgreSQL", "Redis", "Solr", "OpenSearch"],
  "Integrations": ["Stripe", "Razorpay", "Microsoft Graph", "WhatsApp Graph APIs", "Socket.io"],
  "CI/CD": ["GitHub Actions", "Jenkins", "AWS CodePipeline", "Azure Pipelines"],
  "Monitoring": ["Splunk", "Prometheus", "CloudWatch", "ELK"],
};

export const credentials = {
  certs: [
    "AWS Cloud Quest: Generative AI Practitioner",
    "MongoDB: Search with MongoDB",
    "MongoDB: AI-Powered Search with MongoDB Vector Search",
    "AWS Cloud Quest: Cloud Practitioner",
    "AWS Cloud Quest: Cloud Essentials",
    "AWS Fundamentals of Machine Learning and Artificial Intelligence",
    "Web Development Bootcamp by Angela Yu",
  ],
  education: [
    "MSc Computing (DevOps), Atlantic Technological University (Sept 2025 – Present)",
    "B.Tech Computer Engineering, Bhagwan Mahavir College | CGPA: 8.48/10",
  ],
};

export const achievements = [
  'Employee of the Month ("The Challenge Seeker"), WebOsmotic — Recognized for backend excellence.',
  "FusionHack 2024 finalist: built a Go-based scheduling API with real-time orchestration.",
  "Solved 300+ algorithm problems across platforms; continued problem-solving practice.",
  "Peer coach for data structures/backend fundamentals; mentored 20+ students.",
];
