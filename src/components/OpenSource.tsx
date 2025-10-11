import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Sparkles, Workflow } from "lucide-react";

const contributionTargets = [
  {
    name: "OpenTelemetry Collectors",
    focus:
      "Add processors/exporters for AWS CloudWatch or Azure Monitor to bridge AIOps observability gaps.",
    link: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Go", "Observability", "AIOps"],
    status: "Scoping issues",
  },
  {
    name: "Kubeflow Pipelines",
    focus:
      "Improve deployment guides or create Terraform module samples for managed services (EKS, GKE).",
    link: "https://github.com/kubeflow/pipelines",
    tags: ["MLOps", "Kubernetes", "Terraform"],
    status: "Designing sample stack",
  },
  {
    name: "LangChainJS",
    focus:
      "Contribute backend connectors, caching layers, or deployment recipes for Node.js inference workloads.",
    link: "https://github.com/langchain-ai/langchainjs",
    tags: ["Node.js", "AI", "DX"],
    status: "Planning PR outline",
  },
];

const starterPlays = [
  {
    title: "Write a deployment recipe",
    description:
      "Spin up a minimal GitHub repo with Terraform + GitHub Actions for deploying LangChain demos on AWS Lambda / Azure Functions.",
  },
  {
    title: "Create runbooks",
    description:
      "Document incident response or rollback steps for open issues; pair this with screenshots and dashboards for the project wiki.",
  },
  {
    title: "Ship sample datasets",
    description:
      "Package anonymised logs or telemetry to help observability projects test AIOps features without production data.",
  },
];

const OpenSource = () => {
  return (
    <section id="open-source" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ecfeff]/50 via-white to-transparent dark:from-slate-950/70 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Open source roadmap
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contributionTargets.map((target) => (
            <Card
              key={target.name}
              className="h-full rounded-3xl border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardHeader className="space-y-3">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20">
                  <GitBranch className="mr-2 h-3.5 w-3.5" />
                  Target repo
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">
                  <a
                    href={target.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    {target.name}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {target.focus}
                </p>
                <Badge
                  variant="secondary"
                  className="rounded-full bg-primary/10 text-xs font-medium text-primary dark:bg-primary/20"
                >
                  {target.status}
                </Badge>
                <div className="flex flex-wrap gap-2">
                  {target.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-primary/30 bg-primary/5 text-xs text-primary dark:border-primary/40 dark:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 rounded-3xl border-white/60 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
          <CardHeader className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary dark:bg-primary/20">
              <Workflow className="mr-2 h-4 w-4" />
              How to stand out
            </div>
            <CardTitle className="text-2xl text-slate-900 dark:text-white">
              Capture proof of work as you contribute
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 px-6 pb-8 pt-2 md:grid-cols-3 md:px-8">
            {starterPlays.map((play) => (
              <div
                key={play.title}
                className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-slate-900/70"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {play.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {play.description}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-white to-transparent p-5 shadow-sm dark:from-primary/20 dark:via-slate-900">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Bonus: story
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Every contribution → short LinkedIn post. Summarise the issue,
                solution, and link to the PR so recruiters see consistent
                momentum.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OpenSource;
