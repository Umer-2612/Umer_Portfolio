<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img src="assets/header-light.svg" width="100%" alt="Umer Karachiwala, backend and DevOps engineer in Dublin. Live audio flows through WebSocket, FunASR and a turn model into a final transcript: Open to backend and platform roles.">
</picture>

I build backends that have to keep up with the real world: scheduled changes across hundreds of thousands of records, bots that sit in live calls, and speech pipelines that decide when someone has finished talking. Most recently a Software Engineer Intern at **Apple**.

**Open to backend, platform and DevOps roles.** &nbsp;[Portfolio](https://www.umer-karachiwala.com/) · [LinkedIn](https://www.linkedin.com/in/umer-karachiwala/) · [Email](mailto:karachiwalaumer2612@gmail.com)

## Selected work

### Scheduled SEO changes for 900K+ Apple Store URLs
<sub>Apple · Mar – Sep 2026 · Java, Spring Boot, Cassandra, OpenSearch, SNS/SQS</sub>

Business teams needed to plan SEO metadata changes for Apple Store pages ahead of time and undo them safely. I built **Scheduled Updates** and **Revert Changeset** across 5 services, so changes can be queued up to **3 months ahead**. I added checks that stop conflicting edits from corrupting live data, and fixed a Cassandra issue that **unblocked ~100 stuck changesets**, cutting resolution time by **~80%**. I also compared OpenSearch with Apple's managed Solr, then built changeset search on OpenSearch with SNS/SQS replication across data centres, so teams search before/after values across hundreds of thousands of records instead of opening each one.

### A Teams bot that joins interviews by itself
<sub>WebOsmotic · 2024 – 2025 · C#, .NET, Microsoft Graph, Azure, Python</sub>

Interviews on Microsoft Teams needed live transcription and speaker detection. I built a Microsoft Teams bot, deployed as an Azure multi-tenant service, that joins scheduled interviews on its own and streams audio over a **sub-second WebSocket pipeline** to a Python AI server for transcription and speaker detection, with reconnect handling when streams drop. I also built document ingestion and RAG questionnaire automation for narad.io, an AI-powered third-party risk platform.

### Knowing when a speaker is done
<sub>[realtime-transcribe](https://github.com/Umer-2612/realtime-transcribe) · 2026 · Python, FunASR, WebSockets, vogent-turn</sub>

Silence timers either cut people off or make every answer wait out the timeout. My self-hosted speech-to-text service streams live transcripts over WebSockets and asks a small turn-detection model after **300 ms** of silence whether the answer is finished. The model gets the recent audio, the transcript and the interviewer's question. If the model can't load, the service falls back to the plain timer.

## Now

| When | What |
|---|---|
| Sep 2026 | Added model-based turn detection to [realtime-transcribe](https://github.com/Umer-2612/realtime-transcribe) |
| Sep 2026 | Finished my Software Engineer internship at Apple |
| Aug 2026 | MSc dissertation: [measuring the carbon cost of CI/CD](https://github.com/Umer-2612/msc-devops-dissertation) across 5 open-source projects |

## Projects

| Project | What it does | Last commit |
|---|---|---|
| [realtime-transcribe](https://github.com/Umer-2612/realtime-transcribe) | Self-hosted WebSocket speech-to-text with model-based turn detection | ![](https://img.shields.io/github/last-commit/Umer-2612/realtime-transcribe?label=&style=flat-square&color=d9531e) |
| [realtime-meeting-intelligence](https://github.com/Umer-2612/realtime-meeting-intelligence) | Zoom (C++) and Teams (.NET) bots streaming live audio and video to a Python server on AWS EKS | ![](https://img.shields.io/github/last-commit/Umer-2612/realtime-meeting-intelligence?label=&style=flat-square&color=d9531e) |
| [msc-devops-dissertation](https://github.com/Umer-2612/msc-devops-dissertation) | *Greening the Pipeline*: CI/CD carbon emissions across HTTPie, got, Retrofit, resty and Gson, with a replication package | ![](https://img.shields.io/github/last-commit/Umer-2612/msc-devops-dissertation?label=&style=flat-square&color=d9531e) |
| [memory-core](https://github.com/Umer-2612/memory-core) | FastAPI memory service with semantic search on PostgreSQL + pgvector | ![](https://img.shields.io/github/last-commit/Umer-2612/memory-core?label=&style=flat-square&color=d9531e) |
| [FedSC-Risk](https://github.com/Umer-2612/FedSC-Risk) | Federated learning with differential privacy for supply chain risk | ![](https://img.shields.io/github/last-commit/Umer-2612/FedSC-Risk?label=&style=flat-square&color=d9531e) |

## Toolbox

| Area | Tools |
|---|---|
| Languages | Java, TypeScript, Python, C#, C++ |
| Backend | Spring Boot, Node.js / Express, FastAPI, .NET |
| Data and search | Cassandra, PostgreSQL, MongoDB, Redis, OpenSearch, Solr |
| Cloud and delivery | AWS (EKS, EC2, SQS/SNS, CloudFormation), Azure (AKS, Bot Service), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins |
| Observability | Splunk, Prometheus, CloudWatch, ELK |
| AI | RAG, pgvector, FunASR, turn detection, Claude and OpenAI APIs |

## Background

MSc Computing (DevOps), Atlantic Technological University, 2025 – 2026 · B.Tech Computer Engineering, Bhagwan Mahavir College, 2021 – 2025 (CGPA 8.48/10)

Led a team at Apple's internal GenAI Hackathon (shortlisted for sponsorship) · Employee of the Month at WebOsmotic · FusionHack 2024 finalist · Mentored 20+ students for coding interviews

---

<sub>Hiring for backend or platform work? The fastest way to reach me is [email](mailto:karachiwalaumer2612@gmail.com).</sub>
