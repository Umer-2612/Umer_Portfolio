import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const buildLog = [
  {
    title: "AIOps playbook: Assessment pipeline telemetry",
    status: "Drafting",
    eta: "publishing late Feb",
    summary:
      "Deep-dive on the AWS S3 + GPT + CloudWatch combo powering automated assessments, including cost controls and alert wiring.",
  },
  {
    title: "Video walkthrough: Real-time notifications at scale",
    status: "Recording",
    eta: "scripts ready",
    summary:
      "Seven-minute Loom demo of SQS + Socket.io fan-out strategies, retries, and chaos experiments.",
  },
  {
    title: "MLOps case study: Interview analytics feedback loop",
    status: "Researching",
    eta: "collecting metrics",
    summary:
      "Storyboarding how we built a retraining pipeline that keeps AI interview insights trustworthy with human-in-the-loop approvals.",
  },
];

const visibilityMoves = [
  {
    label: "LinkedIn",
    detail: "Weekly build-in-public post + carousel snippet from the freshest log update.",
  },
  {
    label: "Medium / Hashnode",
    detail: "Long-form breakdown with diagrams, architecture callouts, and GitHub gists.",
  },
  {
    label: "Loom / YouTube",
    detail: "Short-form walkthroughs of dashboards, pipelines, or failure drills—perfect recruiter snacks.",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fdf2f8]/50 via-white to-transparent dark:from-slate-950/70 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Build log
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            What I'm scripting, writing, and filming right now—so you can preview the next drops.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {buildLog.map((log) => (
            <Card
              key={log.title}
              className="h-full rounded-[28px] border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardHeader className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  {log.status}
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">
                  {log.title}
                </CardTitle>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  {log.eta}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {log.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 rounded-[28px] border-white/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
          <CardHeader className="px-0 pb-4">
            <CardTitle className="text-left text-xl text-slate-900 dark:text-white">
              How I syndicate every release
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 px-0 md:flex-row md:justify-between">
            {visibilityMoves.map((move) => (
              <div key={move.label} className="rounded-2xl bg-white/80 p-4 dark:bg-slate-900/70">
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/30 bg-primary/5 text-xs text-primary dark:border-primary/40 dark:bg-primary/10"
                >
                  {move.label}
                </Badge>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {move.detail}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Insights;
