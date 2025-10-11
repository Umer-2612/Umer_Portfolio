import { Badge } from "@/components/ui/badge";
import MeImage from "../assets/Me.jpg";

const operatingPrinciples = [
  {
    title: "Move with telemetry",
    description:
      "Every feature and infra change ships with metrics, alerts, and dashboards so surprises are rare.",
  },
  {
    title: "Automate the grind",
    description:
      "If a release, migration, or incident step repeats twice, it becomes a workflow or a script.",
  },
  {
    title: "Design for handoff",
    description:
      "Docs, runbooks, and clean interfaces that let the next engineer (or AI assistant) pick up instantly.",
  },
];

const toolbelt = [
  "Node.js",
  "TypeScript",
  "Python",
  "AWS (S3, EC2, Lambda, SQS)",
  "Azure (Bot Services, AKS)",
  "GCP (Cloud Functions)",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "MongoDB",
  "Redis",
  "Kafka",
  "CloudWatch",
  "Azure Monitor",
];

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-br from-white via-[#f3f4ff] to-transparent dark:from-slate-950 dark:via-slate-900 dark:to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-primary/30 via-white to-transparent blur-2xl dark:from-primary/15 dark:via-slate-900 dark:to-transparent" />
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full bg-primary/10 p-3 shadow-lg">
                <img
                  src={MeImage}
                  alt="Umer Karachiwala"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                Umer Karachiwala
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.4em] text-primary">
                backend · devops · aiops
              </p>
              <p className="mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                2+ years balancing backend engineering with platform ops. I
                prototype fast, industrialise the winner, and make sure the
                system tells us how it feels.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-inner backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <h3 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                Building platforms that behave even when the roadmap gets spicy.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                At WebOsmotic I own the pipelines behind AI-driven assessment
                engines, real-time notifications, and collaboration bots. I
                obsess over shrinking lead time while keeping SLOs happy—AIOps
                for noise reduction, MLOps for trustworthy models, DevOps for
                the cadence, and backend craft to tie it together.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Whether it’s a greenfield experiment or refactoring stubborn
                legacy services, my north star is the same: measurable impact,
                fewer on-call pages, and engineers shipping with a smile.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {operatingPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-inner backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                toolbelt
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {toolbelt.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
