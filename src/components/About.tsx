
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const techStack = [
    'Node.js', 'Python', 'TypeScript', 'AWS', 'Azure', 'Kubernetes',
    'Docker', 'Helm', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Umer Karachiwala, a DevOps Engineer passionate about creating scalable, 
                resilient, and automated infrastructure. With 2 years of experience, I specialize 
                in cloud platforms (AWS, Azure), Kubernetes, CI/CD pipelines, and infrastructure-as-code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in <strong className="text-foreground">shipping fast</strong>, 
                <strong className="text-foreground"> monitoring always</strong>, and 
                <strong className="text-foreground"> automating everything</strong>.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
