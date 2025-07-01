
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      company: "WebOsmotic Private Limited",
      role: "Jr Backend / DevOps Developer",
      period: "Sept 2023 – Jun 2025",
      location: "Remote",
      achievements: [
        "Led end-to-end development of multi-file upload pipeline to AWS S3",
        "Built CI/CD pipelines with GitHub Actions and Terraform",
        "Managed Kubernetes clusters on AWS EKS"
      ],
      technologies: ["AWS", "EKS", "GitHub Actions", "Terraform", "Node.js"]
    },
    {
      company: "CodeInBound",
      role: "Backend Intern",
      period: "Jan 2023 – Aug 2023",
      location: "Remote",
      achievements: [
        "Developed APIs and integrated CI pipelines",
        "Wrote automation scripts for deployment"
      ],
      technologies: ["Node.js", "CI/CD", "Automation", "APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building reliable systems and automating infrastructure
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary mb-3">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
