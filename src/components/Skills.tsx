
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS", "Azure", "GCP"],
      description: "Multi-cloud infrastructure management"
    },
    {
      title: "Containers & Orchestration",
      icon: "🐳",
      skills: ["Docker", "Kubernetes", "Helm"],
      description: "Container lifecycle & orchestration"
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: ["Terraform", "CloudFormation"],
      description: "Automate cloud infra setup"
    },
    {
      title: "CI/CD Pipelines",
      icon: "⚡",
      skills: ["GitHub Actions", "Jenkins", "GitLab CI"],
      description: "Automated deployment pipelines"
    },
    {
      title: "Monitoring & Observability",
      icon: "📊",
      skills: ["Prometheus", "Grafana", "ELK Stack"],
      description: "Real-time system monitoring"
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Node.js", "Bash", "TypeScript"],
      description: "Automation & scripting"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills & Toolbox</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl border-0 bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-xs hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
