import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { format } from "date-fns";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  headline: string;
  achievements: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "WebOsmotic Private Limited",
    role: "Jr Backend Developer",
    startDate: "2023-09-01",
    endDate: "2025-06-01",
    location: "Surat · Onsite",
    headline:
      "Shipped AI-assisted assessment tooling, real-time engagement, and observability guardrails across multi-cloud.",
    achievements: [
      "Designed an S3-powered ingestion pipeline with GPT validation that shrinks content upload time from hours to minutes.",
      "Automated real-time notifications on Node.js + SQS + Socket.io for 10k+ instructors and candidates.",
      "Dockerised Microsoft Teams bots, wired GitHub Actions + Terraform for hands-off releases.",
      "Rolled out CloudWatch + Azure Monitor with automated anomaly detection and IAM guardrails tied to support workflows.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "SQS",
    ],
  },
  {
    company: "Code InBound",
    role: "SDE Intern",
    startDate: "2023-03-01",
    endDate: "2023-06-01",
    location: "Delhi · Remote",
    headline:
      "Accelerated a network monitoring product with React delivery, CI discipline, and collaborative shipping.",
    achievements: [
      "Implemented production-ready React components and improved sprint velocity across monitoring modules.",
      "Partnered with senior engineers on reviews, tests, and agile rituals to raise release confidence.",
    ],
    stack: ["React", "Node.js", "TypeScript", "Jest", "Agile"],
  },
];

const formatPeriod = (start: string, end: string | null) => {
  const s = format(new Date(start), "MMM yyyy");
  const e = end ? format(new Date(end), "MMM yyyy") : "Present";
  return `${s} — ${e}`;
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-[#f8fafc] via-white to-transparent dark:from-slate-950 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Experience snapshots
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Where AIOps, MLOps, DevOps, and backend intersect to unblock product
            teams.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="relative h-full rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-xs text-slate-500 dark:text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/70">
                      <CalendarDays className="h-3.5 w-3.5 text-primary" />
                      {formatPeriod(exp.startDate, exp.endDate)}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {exp.headline}
                </p>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-full border-primary/30 bg-primary/5 text-xs text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary/90"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
