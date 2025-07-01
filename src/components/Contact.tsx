
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🐙' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Email', url: 'mailto:umer@example.com', icon: '📧' }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Terminal Style Contact Form */}
          <Card className="rounded-2xl border-0 bg-[#0D1117] text-green-400 font-mono">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <CardTitle className="text-green-400">Terminal</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p>umer@portfolio:~$ say_hello</p>
                <p className="text-gray-400 mb-4"># Enter your message below...</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">$ name:</p>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-transparent border-green-400/30 text-green-400 font-mono text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 mb-1">$ email:</p>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-transparent border-green-400/30 text-green-400 font-mono text-sm"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 mb-1">$ message:</p>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 bg-transparent border border-green-400/30 rounded text-green-400 font-mono text-sm min-h-[100px] resize-none"
                    placeholder="Hello Umer, I'd like to discuss..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-black font-mono text-sm rounded-xl"
                >
                  $ send_message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Always excited to discuss DevOps, cloud architecture, or potential collaborations. 
                Drop me a message and let's build something amazing together!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📍</span>
                  <span className="text-muted-foreground">Surat, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🌐</span>
                  <span className="text-muted-foreground">Available for remote work</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Social Links</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center space-x-2 bg-background rounded-2xl px-4 py-2 border hover:border-primary/50 transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span className="text-sm text-muted-foreground">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
