import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';

const Workflows = () => {
  const workflows = [
    {
      title: "LinkedIn Automation From X Posts",
      description: "Automate LinkedIn content creation from trending AI tweets with no execution cost. Fetches latest trending AI tweets automatically and processes content.",
      price: "$10",
      tags: ["Social Media", "Beginner"],
      link: "#"
    },
    {
      title: "Daily Validated Business Ideas using n8n and Upwork",
      description: "Automate business idea discovery from Upwork with n8n and AI. Log ideas to Google Sheets. Filters by budget and extracts job descriptions.",
      price: "$25",
      tags: ["Business Automation", "Beginner"],
      link: "#"
    },
    {
      title: "Deep Research using n8n automation to generate report using Tavily",
      description: "Automate deep research and report generation on any topic using n8n, Tavily, and AI. Scrapes and synthesizes information from multiple online sources.",
      price: "$25",
      tags: ["Research", "Intermediate"],
      link: "#"
    },
    {
      title: "Domain Name Generator n8n workflow using ScrapingDog",
      description: "Use n8n, ScrapingDog, and AI to generate creative and available domain names based on keywords.",
      price: "$25",
      tags: ["Business", "Beginner"],
      link: "#"
    },
    {
      title: "Facebook Ads Competitive Analysis using Gemini and Open AI",
      description: "Use n8n with Gemini and OpenAI to automatically analyze competitor Facebook Ads for strategic insights. Extracts ad copy and visuals.",
      price: "$25",
      tags: ["Marketing", "Advanced"],
      link: "#"
    },
    {
      title: "Stock Market AI Agent using n8n and Apify",
      description: "An n8n workflow using Apify and AI to create a stock market analysis agent. Scrapes financial news and stock data.",
      price: "$25",
      tags: ["Finance", "Advanced"],
      link: "#"
    },
    {
      title: "Track & Audit Influencers on Instagram with n8n Automation Workflow with AI",
      description: "Automate Instagram influencer monitoring with n8n and AI. Gather data, analyze engagement, and log findings to a Google Sheet.",
      price: "$50",
      tags: ["Social Media", "Intermediate"],
      link: "#"
    },
    {
      title: "Track New Competitors In Marketing Using ScrapingDog",
      description: "Automate competitor tracking by monitoring search results with n8n, ScrapingDog, and AI. Regularly scrapes search engine results.",
      price: "$25",
      tags: ["Marketing", "Intermediate"],
      link: "#"
    },
    {
      title: "Track Product Mentions on X (Formerly Twitter)",
      description: "Automate X brand monitoring. Track mentions, analyze sentiment with AI, and get alerts with this n8n workflow.",
      price: "Free",
      tags: ["Social Media", "Beginner"],
      link: "#"
    }
  ];

  return (
    <section id="workflows" className="py-20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">Automation Workflows</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use n8n workflows designed to boost productivity and accelerate success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg leading-tight">{workflow.title}</CardTitle>
                    <Badge variant={workflow.price === "Free" ? "secondary" : "default"}>
                      {workflow.price}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {workflow.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm">
                    {workflow.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between group" asChild>
                    <a href={workflow.link}>
                      View Details
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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

export default Workflows;
