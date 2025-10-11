import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin, Server, Sparkles } from "lucide-react";

const statusChips = [
  "AIOps automation",
  "MLOps pipelines",
  "Backend reliability",
];

const nowBuilding = [
  "Assessment engines with GPT-assisted validation",
  "Real-time comms on SQS + Socket.io",
  "Voice/vision agents with monitored rollouts",
];

const heroMetrics = [
  { label: "Production systems owned", value: "6", accent: "bg-primary/20" },
  { label: "Release pipelines automated", value: "12+", accent: "bg-emerald/20" },
  { label: "Mean rollback rate", value: "<1%", accent: "bg-amber/20" },
];

const focusAreas = [
  "Backend services at scale",
  "Cloud infrastructure automation",
  "AIOps playbooks for proactive incident response",
  "MLOps guardrails from experiment to production",
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fdf5d6] via-white to-[#cfe3ff] dark:from-slate-950 dark:via-slate-900 dark:to-slate-900" />
      <div className="absolute left-10 top-10 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/3 rounded-full bg-[#ffdee2]/60 blur-3xl dark:bg-primary/10" />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8 text-left">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-sm backdrop-blur dark:bg-slate-900/60">
                <Sparkles className="mr-2 h-4 w-4" />
                platform architect
              </span>
              {statusChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-slate-900/10 px-4 py-2 text-xs font-semibold text-slate-600 backdrop-blur dark:bg-slate-300/10 dark:text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-[3.25rem]">
                Backend, DevOps, and AI ops that keep ambitious teams shipping
                calmly.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-200 md:text-xl">
                I'm <strong className="text-slate-900 dark:text-white">Umer Karachiwala</strong>,
                a systems engineer living between backend development, DevOps, and AIOps/MLOps.
                I translate product anxiety into resilient services, observability first,
                and automation that respects the humans on call.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-6" onClick={scrollToProjects}>
                View case studies
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
                <a
                  href="https://www.linkedin.com/in/umer-karachiwala/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-300">
                    {metric.label}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-slate-900 dark:text-white">
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium text-primary ${metric.accent}`} />
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/20 via-white to-transparent blur-2xl dark:from-primary/10 dark:via-slate-900 dark:to-transparent" />
            <div className="relative space-y-6 rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <div className="grid gap-3 rounded-2xl bg-white/90 p-6 shadow-sm dark:bg-slate-900/70">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-primary" />
                  Donegal, Ireland · Remote friendly
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300">
                  <Server className="h-4 w-4 text-primary" />
                  Node.js, TypeScript, Python, SQS, Terraform, Kubernetes
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-900/90 p-6 text-slate-100 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                  now building
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {nowBuilding.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 rounded-2xl bg-white/90 p-6 shadow-sm dark:bg-slate-900/70">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                  operational focus
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/90 p-4 text-slate-600 shadow-sm dark:bg-slate-900/70 dark:text-slate-200">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Start a conversation
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    karachiwalaumer2612@gmail.com
                  </p>
                </div>
                <Button variant="ghost" className="rounded-full dark:text-primary" asChild>
                  <a href="mailto:karachiwalaumer2612@gmail.com">
                    Say hi
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
