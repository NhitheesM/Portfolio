import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Code, Bot, Workflow } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      icon: Code,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      title: "AI Agents",
      icon: Bot,
      items: ["LangChain", "OpenAI API", "Anthropic Claude", "Local LLMs", "Prompt Engineering", "RAG"]
    },
    {
      title: "Automation & Workflows",
      icon: Workflow,
      items: ["n8n", "API Integration", "Web Scraping", "Cron Jobs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and intelligent automations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary" className="px-3 py-1 text-sm font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
