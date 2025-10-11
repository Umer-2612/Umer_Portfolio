import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Assessment Automation Platform · WebOsmotic",
    challenge:
      "Product teams struggled to launch new assessments quickly; quality checks were manual and releases unpredictable.",
    solution: [
      "Multi-file ingestion pipeline on AWS S3 with GPT validation and queue-backed processing.",
      "GitHub Actions + Terraform pipelines that deploy backend, infra, and observability in lockstep.",
      "AIOps layer detecting scoring anomalies and routing alerts to support + WhatsApp channels.",
    ],
    impact: [
      "New assessments go live in <15 minutes (down from hours).",
      "Zero failed releases in the last 6 months.",
      "Support tickets related to scoring dropped by 60%.",
    ],
    stack: ["Node.js", "AWS S3", "Terraform", "GitHub Actions", "CloudWatch"],
  },
  {
    title: "Restaurant Experience Platform · Freelance",
    challenge:
      "Indie restaurant needed a digital ordering + reservation flow without adding operational overhead.",
    solution: [
      "Full-stack ordering with live inventory, reservation windows, and Stripe-powered payments.",
      "Configurable admin portal for menus and promotions with audit trails.",
      "Automated deployment scripts so updates roll out in minutes.",
    ],
    impact: [
      "30% increase in table utilisation during peak weeks.",
      "Zero downtime migrations during seasonal menu changes.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
  },
  {
    title: "Zoom Interview Bot",
    challenge:
      "Talent teams needed real-time insights from remote interviews without extra manual review work.",
    solution: [
      "Zoom-integrated agent capturing audio/video, generating transcripts, and tagging behaviours.",
      "Serverless MLOps loop retraining models with curated feedback to keep accuracy high.",
      "Dashboards showing candidate sentiment, speaking ratios, and risk alerts.",
    ],
    impact: [
      "Review time per interview reduced by 60%.",
      "Model drift detection prevented insight degradation during hiring spikes.",
    ],
    stack: ["Zoom SDK", "Python", "AWS Lambda", "AssemblyAI", "MLOps"],
  },
  {
    title: "AI Voice Agent",
    challenge:
      "Support pilots needed a voice-first assistant with instant responses and safe fallbacks.",
    solution: [
      "Streaming speech recognition + TTS (AssemblyAI + ElevenLabs) for <250ms responses.",
      "WebSocket backend orchestrating context, escalation rules, and live agent handoff.",
      "Observability dashboard monitoring latency, sentiment, and escalation counts.",
    ],
    impact: [
      "First-response time improved by 4x.",
      "Fallback routing ensured 100% coverage for sensitive calls.",
    ],
    stack: ["Node.js", "WebSockets", "AssemblyAI", "ElevenLabs", "Redis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#bfdbfe]/40 via-white to-transparent dark:from-slate-950/80 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Case studies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A closer look at how I blend backend, DevOps, and AI/ML operations for real product wins.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="group h-full rounded-[28px] border-white/70 bg-white/80 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {study.title}
                </CardTitle>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  challenge
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {study.challenge}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    approach
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {study.solution.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    impact
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {study.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.stack.map((badge) => (
                    <Badge
                      key={badge}
                      variant="outline"
                      className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 group-hover:border-primary/40 group-hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition hover:underline">
                  Walk through this build
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
