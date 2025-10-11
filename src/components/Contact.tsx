import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Rocket } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/umer-karachiwala",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/umer-karachiwala/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Email",
    url: "mailto:karachiwalaumer2612@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#dbeafe]/60 via-white to-transparent dark:from-slate-950/70 dark:via-slate-900 dark:to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Let's build your next release
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Tell me about your platform roadmap, DevOps challenges, or the
            product you want to ship in 2025.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Card className="rounded-3xl border-white/60 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
            <CardHeader className="space-y-3">
              <CardTitle className="text-left text-2xl text-slate-900 dark:text-white">
                Drop a message
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                I reply within 24 hours on weekdays. Share context, timelines,
                and the impact you're aiming for.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                      required
                      className="mt-1 rounded-2xl border-slate-200 bg-white px-4 py-2 text-slate-700 focus:border-primary focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                      required
                      className="mt-1 rounded-2xl border-slate-200 bg-white px-4 py-2 text-slate-700 focus:border-primary focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    What would you like to collaborate on?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    required
                    className="mt-1 min-h-[160px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    placeholder="Share the problem, desired outcome, and timelines…"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/90"
                >
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-3xl border-white/60 bg-white/80 p-6 text-left shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Preferred engagements
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>• DevOps / platform automation audits</li>
                    <li>• Backend feature builds and integrations</li>
                    <li>• AI augmentation inside production workflows</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-primary" />
                  Donegal, Ireland · Remote-friendly
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    The fastest way to reach me
                  </p>
                  <a
                    href="mailto:karachiwalaumer2612@gmail.com"
                    className="mt-1 inline-flex items-center text-sm text-primary underline-offset-4 hover:underline"
                  >
                    karachiwalaumer2612@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Connect elsewhere
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.icon}
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
