import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    type: "Certification",
    description:
      "Hands-on labs covering core AWS services, architecture best practices, and cost-aware design.",
    year: "2024",
    icon: "☁️",
  },
  {
    title: "AWS Cloud Quest: Cloud Essentials",
    type: "Certification",
    description:
      "Practical exploration of compute, storage, networking, and IAM fundamentals across AWS.",
    year: "2024",
    icon: "🛠️",
  },
  {
    title: "Employee of the Month — “The Challenge Seeker”",
    type: "Award",
    description:
      "Recognised at WebOsmotic for backend ownership, rapid iteration, and raising platform reliability.",
    year: "2024",
    icon: "🏆",
  },
  {
    title: "Angela Yu Web Development Bootcamp",
    type: "Certification",
    description:
      "Comprehensive full-stack programme spanning modern frontend, backend, and deployment workflows.",
    year: "2022",
    icon: "📚",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-full bg-gradient-to-t from-[#fde68a]/40 via-white to-transparent dark:from-slate-950/70 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Certifications & recognition
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Continuous learning keeps my tooling sharp and my teams confident.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <Card
              key={item.title}
              className="h-full rounded-3xl border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full border-primary/30 bg-primary/5 text-xs text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary/90"
                      >
                        {item.type}
                      </Badge>
                      <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
