const impactHighlights = [
  {
    title: "SLO-first delivery",
    metric: "99.9%",
    description: "availability maintained while shipping weekly releases.",
  },
  {
    title: "Automated toil removed",
    metric: "260+ hrs",
    description: "saved per quarter through CI/CD, IaC, and runbook automation.",
  },
  {
    title: "AI-infused workflows",
    metric: "3 platforms",
    description: "using GPT/LLM components with monitoring and guardrails.",
  },
];

const Impact = () => {
  return (
    <section
      id="impact"
      className="relative -mt-10 pb-16 pt-6 md:-mt-16 md:pt-0"
    >
      <div className="container mx-auto px-6">
        <div className="rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {impactHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/60 bg-white/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {item.title}
                </p>
                <p className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">
                  {item.metric}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
