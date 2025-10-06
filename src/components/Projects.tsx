import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Compliance Bot",
      description: "Built CI/CD pipeline for an AI-driven compliance platform with auto-scaling infra using AWS EKS and Terraform.",
      badges: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
      image: "🤖",
      architecture: "EKS Cluster → Auto Scaling Groups → Load Balancer → CI/CD Pipeline"
    },
    {
      title: "Real-time Alerting System",
      description: "Designed and deployed highly available alert system with Prometheus + Alertmanager integrated with Slack.",
      badges: ["Prometheus", "Grafana", "Slack API", "Docker"],
      image: "🚨",
      architecture: "Prometheus → Alertmanager → Slack Webhooks → Dashboard"
    },
    {
      title: "Multi-Cloud Migration",
      description: "Led infrastructure migration from on-premise to multi-cloud setup with 99.9% uptime during transition.",
      badges: ["AWS", "Azure", "Terraform", "Ansible"],
      image: "☁️",
      architecture: "On-Premise → AWS/Azure → Load Balancing → Monitoring"
    },
    {
      title: "Container Security Pipeline",
      description: "Implemented automated security scanning for container images with vulnerability assessment and remediation.",
      badges: ["Docker", "Trivy", "GitLab CI", "SAST"],
      image: "🛡️",
      architecture: "Git Push → Security Scan → Image Build → Deploy → Monitor"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Projects & Case Studies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl border-0 overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-6xl text-center mb-4">{project.image}</div>
                <CardTitle className="text-xl text-center">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl">
                  <strong>Architecture:</strong> {project.architecture}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="outline"
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary/10 transition-colors rounded-xl"
                >
                  View Architecture
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
