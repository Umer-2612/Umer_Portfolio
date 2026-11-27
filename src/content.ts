// Single source of truth for the page. Facts come from the CV (Umer Karachiwala.pdf)
// and the public READMEs of each repo. Add a `live` link only once it returns 200.

export const meta = {
  name: "Umer Karachiwala",
  domain: "umer-karachiwala.com",
  location: "Dublin, Ireland",
  email: "karachiwalaumer2612@gmail.com",
  phone: "+353 89 659 1216",
  phoneHref: "tel:+353896591216",
  cv: "/Umer_Karachiwala_CV.pdf",
  linkedin: "https://www.linkedin.com/in/umer-karachiwala/",
  github: "https://github.com/Umer-2612",
};

export const hero = {
  status: "Open to software engineer roles in Ireland",
  greeting: "Hi, I'm Umer.",
  headline: "I build apps from the screen to the server.",
  intro: "Full stack software engineer in Dublin. I make apps look good, run fast and stay up. 3+ years, including Apple.",
  badges: ["Previously at Apple", "MSc, 2:1", "Right to work in Ireland (Stamp 1G)"],
};

export const proofStrip = [
  { v: "900,000+", l: "Apple Store pages with searchable change history" },
  { v: "100+", l: "live sessions at once, at WebOsmotic" },
  { v: "3+", l: "years building software" },
  { v: "1", l: "open-source tool anyone can install" },
];

export interface Link { label: string; href: string }

export interface Project {
  id: string;
  name: string;
  kind: string;
  summary: string;
  detail: string;
  visual: "terminal" | "wave";
  stack: string[];
  links: Link[];
  live?: Link;
}

export const projects: Project[] = [
  {
    id: "mcp-eval-gate",
    visual: "terminal",
    name: "mcp-eval-gate",
    kind: "Open source",
    summary: "Tests the tools AI assistants rely on, and stops a release if they break.",
    detail: "It found a real bug in an official AI tool (the MCP filesystem server).",
    stack: ["Python", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/Umer-2612/mcp-eval-gate" },
      { label: "Write-up", href: "https://medium.com/@karachiwalaumer2612/mcp-server-testing-in-ci-the-bug-no-schema-check-can-see-39cfce248043" },
    ],
    live: { label: "pip install mcp-eval-gate", href: "https://pypi.org/project/mcp-eval-gate/" },
  },
  {
    id: "realtime-transcribe",
    visual: "wave",
    name: "realtime-transcribe",
    kind: "Open source",
    summary: "Turns speech into text, and knows when you've stopped talking.",
    detail: "Finished answers appear after 0.3 seconds of silence, not 1.5.",
    stack: ["Python", "WebSockets", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/Umer-2612/realtime-transcribe" }],
  },
];

export interface Role {
  company: string;
  role: string;
  from: string;
  to: string;
  place: string;
  plain: string;
  points: string[];
  stack: string;
}

export const experience: Role[] = [
  {
    company: "Apple",
    role: "Software Engineer, Online Store",
    from: "Mar 2026",
    to: "Sep 2026",
    place: "Cork, Ireland",
    plain: "Made the change history of 900,000+ Apple Store pages searchable.",
    points: [
      "Find any change to any page from **one search bar**.",
      "Stop bad edits before they go live, even when **scheduled 3 months out**.",
      "My AI hackathon project won **executive backing** to go live.",
    ],
    stack: "Java, Spring Boot, OpenSearch, Kafka, EKS",
  },
  {
    company: "WebOsmotic",
    role: "Software Engineer",
    from: "Oct 2023",
    to: "Jun 2025",
    place: "Surat, India",
    plain: "Kept a live platform smooth for 100+ sessions at once.",
    points: [
      "Ran the app on **AWS and Azure** cloud servers.",
      "Moved slow jobs to **background queues** so pages stayed quick.",
      "Kept each client's data **separate and secure**.",
    ],
    stack: "Node.js, C#, Python, Terraform",
  },
  {
    company: "Logic Infotech",
    role: "Software Engineer",
    from: "Mar 2022",
    to: "Sep 2023",
    place: "Surat, India",
    plain: "Built online stores, from the screen to the server.",
    points: [
      "Built the **React and Next.js** pages shoppers see.",
      "Built the **order and checkout** systems behind them.",
      "Added **Stripe and Razorpay** card payments.",
    ],
    stack: "React, Next.js, Node.js, MongoDB",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "TypeScript", "Node.js", "C#", "Python", "Go"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { group: "Backend", items: ["Spring Boot", "Kafka", "SQS", "Redis", "REST"] },
  { group: "Data", items: ["OpenSearch", "Cassandra", "PostgreSQL", "MongoDB"] },
  { group: "Cloud", items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"] },
];

export const education = [
  { degree: "MSc Computing in DevOps", school: "Atlantic Technological University", note: "2:1, 2025 to 2026" },
  { degree: "B.Tech Computer Engineering", school: "Bhagwan Mahavir College, Surat, India", note: "CGPA 8.48 / 10" },
];

const credly = (id: string, kind: "public_url" | "linked_in_profile" = "public_url") =>
  `https://www.credly.com/badges/${id}/${kind}`;

export const certGroups: { issuer: string; items: Link[] }[] = [
  {
    issuer: "AWS",
    items: [
      { label: "Cloud Practitioner", href: credly("606d2fd5-6070-472b-b85a-17a4cabab7c2", "linked_in_profile") },
      { label: "Generative AI Practitioner", href: credly("019efbe7-c545-4de6-99cf-b45587f30951", "linked_in_profile") },
      { label: "ML and AI Fundamentals", href: "https://drive.google.com/file/d/1h75fneLEfczamauyzlEg5lh1jv1Nqv_f/view?usp=sharing" },
    ],
  },
  {
    issuer: "MongoDB",
    items: [
      { label: "Cluster Reliability", href: credly("ac181593-8bf6-442d-924f-da19f3afc932") },
      { label: "Atlas Networking", href: credly("77c8a856-1898-47b6-a280-e0570ec94227") },
      { label: "Auth", href: credly("fd19231d-fc72-4fa7-8e97-dcd92c3bd4b1") },
      { label: "Search", href: credly("66883cdd-e909-4a6d-9117-5d74919ee482", "linked_in_profile") },
      { label: "Vector Search", href: credly("b5b6feb5-403a-4282-8cc4-4caa600fa5b7", "linked_in_profile") },
      { label: "AI Agents", href: credly("9a5aae8d-b780-46be-9317-5498dfbabf79") },
      { label: "RAG Apps", href: credly("700f0cc9-2603-4b51-bd35-97e1aa1fa3b0") },
      { label: "Memory for AI", href: credly("ffcb954a-a89c-4af1-b36b-57eee47ccbcb") },
    ],
  },
  {
    issuer: "Udemy",
    items: [{ label: "Web Development Bootcamp", href: "https://www.udemy.com/certificate/UC-59573590-40a6-4c8e-be8f-bba6c4b28cfd/" }],
  },
];

export const achievements: { text: string; href?: string }[] = [
  { text: "Employee of the Month, WebOsmotic", href: "https://drive.google.com/file/d/18CCXyxOvrz2bpNTOOw7rcuNQ1RmYRZpd/view?usp=sharing" },
  { text: "FusionHack 2024 finalist" },
  { text: "300+ LeetCode problems" },
];
