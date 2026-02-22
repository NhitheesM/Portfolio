import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Travel Planner",
      description: "An intelligent agent that plans personalized travel itineraries based on user preferences, budget, and real-time flight data.",
      tags: ["LangChain", "Next.js", "OpenAI"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Customer Support Bot",
      description: "A context-aware support bot capable of handling complex queries, processing refunds, and scheduling appointments using function calling.",
      tags: ["Python", "FastAPI", "Vector DB"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Personal Finance Assistant",
      description: "A secure agent that analyzes bank statements, categorizes expenses, and provides actionable insights for budgeting.",
      tags: ["React", "n8n", "Plaid API"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Legal Document Analyzer",
      description: "Simplifies legal jargon by summarizing contracts and highlighting critical clauses using advanced NLP models.",
      tags: ["TypeScript", "HuggingFace", "Supabase"],
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">AI Agent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the capabilities of autonomous agents and LLMs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="h-48 bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                   {/* Placeholder for project screenshot */}
                   <span className="text-4xl">🤖</span>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
