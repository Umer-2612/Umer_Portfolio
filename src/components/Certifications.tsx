import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const achievements = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      status: "Certified",
      icon: "🏆",
      date: "2024"
    },
    {
      title: "Kubernetes Administrator – CKA",
      status: "Certified",
      icon: "⎈",
      date: "2024"
    },
    {
      title: "HashiCorp Terraform Associate",
      status: "Certified",
      icon: "🏗️",
      date: "2023"
    },
    {
      title: "Top 10% LeetCode Rating",
      status: "Achievement",
      icon: "💻",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Certifications & Achievements</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl border-0"
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={achievement.status === 'Certified' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        ✅ {achievement.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
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

export default Certifications;
