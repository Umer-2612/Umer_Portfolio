import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
  badges: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "WebOsmotic Pvt Ltd",
    role: "Jr Backend Developer",
    startDate: "2023-10-10",
    endDate: "2025-06-20",
    achievements: [
      "Led AWS S3 multi-file upload pipeline",
      "Built CI/CD with GitHub Actions & Terraform",
      "Dockerized microservices for scalability",
    ],
    badges: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker", "AWS"],
  },
  {
    company: "CodeInBound",
    role: "SDE Intern",
    startDate: "2023-03-01",
    endDate: "2023-05-31",
    achievements: [
      "Developed RESTful APIs for user management",
      "Automated deployments via CI/CD",
      "Integrated Jest tests & Git workflows",
    ],
    badges: ["React", "Node.js", "TypeScript", "PostgreSQL", "Git"],
  },
];

const formatPeriod = (start: Date, end: Date | null) => {
  const s = format(start, "MMM yyyy");
  const e = end ? format(end, "MMM yyyy") : "Present";
  return `${s} — ${e}`;
};

const ExperienceCard = ({ exp, idx }: { exp: ExperienceItem; idx: number }) => {
  const [open, setOpen] = useState(false);
  const start = new Date(exp.startDate);
  const end = exp.endDate ? new Date(exp.endDate) : null;

  return (
    <div className="relative mb-12 flex w-full max-w-xl mx-auto">
      {/* Timeline marker */}
      <div className="absolute left-4 top-3">
        <div className="w-3 h-3 bg-primary rounded-full border-2 border-dark"></div>
      </div>
      {/* Card */}
      <div className="ml-10 p-6 bg-secondary/20 backdrop-blur rounded-2xl border border-secondary/50 hover:border-primary transition w-full">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {exp.role}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1 text-primary" />
            <span>{formatPeriod(start, end)}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {exp.badges.map((b, i) => (
            <Badge
              key={i}
              variant="subtle"
              className="text-[11px] font-mono border-primary/30 bg-primary/10 text-primary"
            >
              {b}
            </Badge>
          ))}
        </div>

        <ul className="mt-4 text-sm text-foreground/80 space-y-1">
          {/* Show first two achievements by default */}
          {exp.achievements.slice(0, 2).map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        {exp.achievements.length > 2 && (
          <button
            className="mt-2 text-xs font-medium text-primary hover:underline"
            onClick={() => setOpen(true)}
          >
            +{exp.achievements.length - 2} more
          </button>
        )}

        {/* Modal for full achievements */}
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-dark/80">
            <div className="bg-dark p-6 rounded-xl max-w-md w-full">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Achievements
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <button
                className="mt-6 px-4 py-2 bg-primary rounded-full text-sm font-medium hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
          Experience
        </h2>
        {/* Timeline container */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/50"></div>
          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
