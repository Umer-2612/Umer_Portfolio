import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const educationHistory = [
  {
    institution: "Atlantic Technological University (ATU)",
    program: "Master of Science in Computing in DevOps",
    location: "Letterkenny, Ireland",
    period: "Sept 2025 – Present",
    highlight: "Focusing on platform engineering, SRE practices, and cloud-native automation.",
  },
  {
    institution:
      "Bhagwan Mahavir College of Engineering & Technology, Surat",
    program: "Bachelor of Technology in Computer Engineering",
    location: "Surat, Gujarat",
    period: "July 2021 – May 2025",
    highlight: "Graduated with 8.48/10 CGPA while driving community tech initiatives.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-white via-[#f8fafc] to-transparent dark:from-slate-950 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Blending academic rigour with hands-on platform engineering work.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {educationHistory.map((item) => (
            <Card
              key={item.institution}
              className="rounded-3xl border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                <div className="space-y-2 text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.highlight}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300 md:text-right">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {item.institution}
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <MapPin className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
