import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const playbooks = [
  {
    title: "AIOps telemetry loops",
    description:
      "Correlate logs, metrics, and traces with anomaly detection that escalates only when a human should care.",
    signals: ["Amazon CloudWatch", "Azure Monitor", "Prometheus", "Grafana"],
  },
  {
    title: "MLOps delivery ramps",
    description:
      "Take experiments to production with automated evals, shadow traffic, and rollback switches.",
    signals: ["Transformers", "PyTorch", "LangChain", "TensorFlow"],
  },
  {
    title: "DevOps velocity engines",
    description:
      "Design CI/CD, IaC, and release workflows that keep velocity high without sacrificing SLOs.",
    signals: ["GitHub Actions", "Terraform", "Docker", "Kubernetes"],
  },
  {
    title: "Backend service mesh",
    description:
      "Resilient APIs, event pipelines, and automation scripts that give product features a stable spine.",
    signals: ["Node.js", "TypeScript", "Python", "Express"],
  },
  {
    title: "Data & messaging fabric",
    description:
      "Low-latency queues, caches, and streams to keep real-time experiences responsive.",
    signals: ["SQS", "Kafka", "MongoDB", "Redis"],
  },
  {
    title: "Reliability rituals",
    description:
      "Incident runbooks, blameless reviews, and proactive chaos drills that prevent 2 a.m. firefights.",
    signals: ["Runbooks", "SLOs", "Synthetic tests", "Chaos drills"],
  },
];

const companionTools = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Docker",
  "Helm",
  "Serverless",
  "Git",
  "Bash",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Supabase",
  "AssemblyAI",
  "ElevenLabs",
  "Stripe",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-full bg-gradient-to-t from-[#fef3c7]/60 via-white to-transparent dark:from-slate-950/70 dark:via-slate-900 dark:to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Platform playbooks
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            The systems thinking I bring when backend, DevOps, AIOps, and MLOps collide.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {playbooks.map((playbook) => (
            <Card
              key={playbook.title}
              className="group h-full rounded-[28px] border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg text-slate-900 dark:text-white">
                  {playbook.title}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {playbook.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  signals
                </p>
                <div className="flex flex-wrap gap-2">
                  {playbook.signals.map((signal) => (
                    <Badge
                      key={signal}
                      variant="outline"
                      className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 group-hover:border-primary/40 group-hover:text-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                    >
                      {signal}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-inner backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Companion tools
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {companionTools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
