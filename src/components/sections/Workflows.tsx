import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink, X, Github, Play, Zap, Mail, Clock, MessageSquare, Settings } from 'lucide-react';

interface Workflow {
  title: string;
  description: string;
  tags: string[];
  trigger: string;
  triggerIcon: 'webhook' | 'email' | 'manual' | 'schedule' | 'chat' | 'app';
  integrations: string[];
  details: string;
  flow: string;
  setup: string[];
  githubUrl: string;
  loomUrl: string;
}

const triggerIcons = {
  webhook: Zap,
  email: Mail,
  manual: Settings,
  schedule: Clock,
  chat: MessageSquare,
  app: ExternalLink,
};

const Workflows = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  const workflows: Workflow[] = [
    {
      title: "AI Receptionist With UI",
      description: "A full-stack AI Receptionist application with a modern web interface. Handles inbound/outbound calls using Vapi AI, manages leads and call records in Convex, and integrates with n8n workflows.",
      tags: ["Full-stack App", "Business Automation", "Advanced"],
      trigger: "Full-stack App",
      triggerIcon: "app",
      integrations: ["Next.js", "Convex", "Vapi", "n8n"],
      details: "A production-ready AI receptionist with a polished web dashboard. Features include call analytics, lead management, call history with transcripts, outbound call campaigns, and real-time webhook integration with n8n. Built with Next.js, React, TypeScript, Convex for real-time backend, Vapi for voice AI, and styled with Tailwind CSS + shadcn/ui.",
      flow: `Full-stack Application
  ├── Dashboard with call analytics
  ├── Lead management system
  ├── Call history with transcripts
  ├── Outbound call campaigns
  └── Real-time webhook integration with n8n`,
      setup: [
        "See the project README for detailed setup instructions",
        "Configure Next.js + Convex backend",
        "Set up Vapi AI for voice processing",
        "Connect n8n workflows for call processing automation"
      ],
      githubUrl: "https://github.com/NhitheesM/AI_Receiptionist_With_UI",
      loomUrl: ""
    },
    {
      title: "Lead Intake → Validation → Routing → CRM Upsert",
      description: "Receives incoming leads via a webhook, validates the data (email format, phone existence), routes them by interest to the appropriate team, and upserts into a Google Sheets CRM.",
      tags: ["Lead Management", "CRM", "Beginner"],
      trigger: "Webhook (POST)",
      triggerIcon: "webhook",
      integrations: ["Google Sheets"],
      details: "A complete lead intake pipeline that validates, routes, and stores leads automatically. Incoming leads are validated for proper email format and phone existence, then routed to the correct team based on their interest area — AI Automation gets high priority, Web Development gets medium, and everything else routes to General.",
      flow: `Webhook (POST /lead-intake)
  → Validate Lead (email + phone)
    → Route Lead by Interest
      ├── AI Automation → priority: high, owner: AI Sales Team
      ├── Web Development → priority: medium, owner: Web Sales Team
      └── Others → priority: low, owner: General
    → Merge → Find Lead by Email
      → Lead Exists?
        ├── Yes → Update Lead
        └── No → Create Lead
      → Respond to Webhook`,
      setup: [
        "Configure the Google Sheets credential with your sheet",
        "The webhook endpoint is POST /lead-intake",
        "Send JSON body with: name, email, phone, interest, source"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/01_Lead%20Intake%20%E2%86%92%20Validation%20%E2%86%92%20Routing%20%E2%86%92%20CRM%20Upsert%20(1).json",
      loomUrl: ""
    },
    {
      title: "AI Email Autoresponder with Approval",
      description: "Monitors an email inbox via IMAP, summarizes incoming emails using GPT, drafts a professional reply using RAG (Qdrant knowledge base), and sends the draft for human approval before sending.",
      tags: ["Email", "AI/RAG", "Intermediate"],
      trigger: "Email (IMAP)",
      triggerIcon: "email",
      integrations: ["OpenAI", "Qdrant", "Gmail", "SMTP"],
      details: "An intelligent email processing pipeline that uses RAG to generate context-aware replies. Incoming emails are converted from HTML to Markdown, summarized with GPT-4.1, then an AI agent writes a professional reply using your company knowledge base stored in Qdrant. Every reply goes through a human approval loop before sending.",
      flow: `Email Trigger (IMAP)
  → Convert HTML to Markdown
    → Summarize Email (GPT-4.1)
      → Set Email Content
        → AI Agent: Write Reply (GPT-4o-mini + Qdrant RAG)
          → Send Draft for Approval (Gmail)
            → Approved?
              ├── Yes → Send Email (SMTP)
              └── No → Loop back to rewrite`,
      setup: [
        "Configure IMAP credentials for incoming email monitoring",
        "Configure SMTP credentials for sending replies",
        "Configure Gmail OAuth2 for approval emails",
        "Configure OpenAI API credentials",
        "Configure Qdrant credentials (requires the company_knowledge collection — see Qdrant Upsert workflow)",
        "Set the approval email address in the Send Draft node"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/03_AI%20Email%20processing%20autoresponder%20with%20approval%20(Yes_No).json",
      loomUrl: ""
    },
    {
      title: "Qdrant Knowledge Base Upsert",
      description: "Populates the Qdrant vector database with company knowledge used by the AI Email Autoresponder. Contains company profile, services, pricing, operating hours, contact info, and refund policy.",
      tags: ["Vector DB", "AI/Embeddings", "Beginner"],
      trigger: "Manual",
      triggerIcon: "manual",
      integrations: ["Qdrant", "OpenAI Embeddings"],
      details: "A utility workflow that seeds your Qdrant vector database with company knowledge. The data is embedded using OpenAI's embedding model and stored in the company_knowledge collection. This is a prerequisite for the AI Email Autoresponder workflow to function with RAG capabilities.",
      flow: `Manual Trigger
  → Set Demo Data (company knowledge text)
    → Qdrant Upsert (collection: company_knowledge)
      ├── OpenAI Embeddings
      └── Default Data Loader + Recursive Text Splitter`,
      setup: [
        "Configure Qdrant credentials",
        "Configure OpenAI API credentials for embeddings",
        "Modify the text in \"Set Demo Data\" with your actual company information",
        "Run manually once to populate the knowledge base"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/03_Qdrant_Upsert.json",
      loomUrl: ""
    },
    {
      title: "YouTube Automation",
      description: "End-to-end YouTube content pipeline — scrapes Reddit revenge stories, classifies them with AI, creates fictional characters, generates narrated videos, and uploads to YouTube.",
      tags: ["Content Creation", "Advanced"],
      trigger: "Manual / Schedule",
      triggerIcon: "manual",
      integrations: ["Reddit", "Supabase", "YouTube", "OpenAI"],
      details: "A two-part automation that covers the full YouTube content pipeline. Part 1 scrapes top posts from Reddit's revenge stories subreddit, filters text posts, deduplicates against Supabase, and classifies them. Part 2 picks queued stories, creates fictional characters, rewrites stories with AI, generates videos, and uploads directly to YouTube.",
      flow: `PART 1: Story Ingestion
  Manual Trigger
    → Fetch top Reddit posts (/r/revengestories)
      → Filter (text posts only)
        → Loop: Check for duplicates in Supabase
          → Classify (story / advice / rant)
            ├── Story → Save to Supabase (status: queued)
            └── Not a story → Skip

PART 2: Video Creation
  Manual Trigger
    → Get next queued story from Supabase
      → Create character (name, age, location, sex)
        → Rewrite story with AI
          → Clean up text → Send to video API
            → Poll video status
              ├── Completed → Download → Upload to YouTube
              ├── Processing → Wait 10s → Poll again
              └── Failed → Set status: failed`,
      setup: [
        "Configure Supabase credentials and create revenge_stories table with columns: reddit_id, title, content, permalink, status",
        "Configure OpenAI API credentials",
        "Configure YouTube credentials for uploads",
        "Set server_url in the Configuration for story writing node (video generation API)",
        "Set character image URLs and background video URL"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/04_Youtube_Automation.json",
      loomUrl: ""
    },
    {
      title: "LinkedIn Automation From X Posts",
      description: "Searches for trending automation-related tweets on X (Twitter), repurposes them into professional LinkedIn posts using AI, sends for email approval, and publishes approved posts.",
      tags: ["Social Media", "Intermediate"],
      trigger: "Schedule (Hourly)",
      triggerIcon: "schedule",
      integrations: ["X (Twitter)", "OpenAI", "Gmail", "LinkedIn"],
      details: "An hourly automation that monitors X for trending automation tweets, repurposes them into polished LinkedIn posts using GPT-4o-mini, and sends each draft for email approval. Approved posts are published to LinkedIn and logged in Google Sheets for tracking. Short tweets under 50 characters are automatically filtered out.",
      flow: `Schedule Trigger (Every Hour)
  → Search X for automation tweets
    → Set Tweet Fields
      → Filter short tweets (< 50 chars)
        → AI Agent: Repurpose for LinkedIn (GPT-4o-mini)
          → Set LinkedIn Fields
            → Send Draft for Approval (Gmail)
              → Approved?
                ├── Yes → Post to LinkedIn → Log to Google Sheet
                └── No → Discard`,
      setup: [
        "Configure X (Twitter) OAuth2 credentials",
        "Configure OpenAI API credentials",
        "Configure Gmail OAuth2 credentials",
        "Configure LinkedIn OAuth2 credentials",
        "Create a Google Sheet with columns: tweet_id, author, original_tweet_url, linkedin_post, status, posted_at",
        "Set your LinkedIn person URN in the Post to LinkedIn node"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/05_LinkedIn_Automation_From_X_Posts.json",
      loomUrl: ""
    },
    {
      title: "Job Application Assistant (India)",
      description: "Automated job hunting assistant for the Indian market. Scrapes your resume, generates search strategy, finds jobs via JSearch API, generates cover letters, and applies on your behalf.",
      tags: ["Job Hunting", "Advanced"],
      trigger: "Schedule",
      triggerIcon: "schedule",
      integrations: ["JSearch API", "OpenAI", "Gmail", "Google Sheets"],
      details: "A fully automated job application pipeline. It scrapes your resume with Jina AI, uses an AI agent to generate a profile and search strategy, queries JSearch API for matching positions, deduplicates against previously applied jobs in Google Sheets, selects the best matches, generates personalized cover letters, and sends applications via Gmail — all automatically.",
      flow: `Schedule Trigger
  → Load Configuration (location, salary, API keys)
    → Scrape Resume (Jina AI)
      → AI Agent: Generate Profile & Search Strategy
        → AI Agent: Generate JSearch URLs (4-10 URLs)
          → Loop: Fetch jobs from JSearch API
            → Aggregate all jobs
              → Check Google Sheets for already-processed jobs
                → Remove duplicates
                  → AI Agent: Select best matches
                    → Loop per selected job:
                      → AI Agent: Generate cover letter
                        → Send via Gmail → Log to Google Sheets`,
      setup: [
        "Configure OpenAI API credentials",
        "Configure Google Sheets OAuth2 credentials",
        "Configure Gmail OAuth2 credentials",
        "Get a JSearch API key from RapidAPI",
        "Get a Jina AI API key for resume scraping",
        "Update the Configuration node with your resume URL, target location, salary range, remote preference, and API keys"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/06_Automated_Job_Scraper_And_CV_Creator.json",
      loomUrl: ""
    },
    {
      title: "LinkedIn Job Lead Finder",
      description: "Scrapes LinkedIn job listings using Apify, enriches company data and finds decision-makers using LinkFinder AI, then saves everything to Google Sheets for lead generation.",
      tags: ["Lead Generation", "Advanced"],
      trigger: "Chat Trigger",
      triggerIcon: "chat",
      integrations: ["Apify", "LinkFinder AI", "Google Sheets"],
      details: "A lead generation pipeline triggered by pasting a LinkedIn job search URL. It scrapes job listings via Apify, enriches each company's data, finds decision-makers (founders, recruiters, HR, directors, managers, CEOs), enriches their profiles, and stores everything in Google Sheets. A 25-second wait between items prevents rate limiting.",
      flow: `Chat Trigger (paste LinkedIn search URL)
  → LinkedIn Job Scraper (Apify)
    → Loop Over Items:
      → Enrich Company (LinkFinder AI)
        → Find Decision Maker (LinkFinder AI)
          → Filter by Job Title (founder, recruiter, HR, director, etc.)
            → Enrich Decision Maker (LinkFinder AI)
              → Save to Google Sheets
                → Wait 25s → Next item`,
      setup: [
        "Get an Apify API token and enter it in the LinkedIn Job Scraper node URL",
        "Get a LinkFinder AI API key from linkfinderai.com and enter in the Authorization header of all 3 LinkFinder nodes",
        "Configure Google Sheets OAuth2 credentials",
        "Create a Google Sheet with columns: Name, Title, Company name, Email, Linkedin_job, Website",
        "Input: paste a LinkedIn job search URL"
      ],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows/blob/main/07_LinkedIn_Job_Lead_Finder.json",
      loomUrl: ""
    },
    {
      title: "Explore More Workflows",
      description: "Browse the full collection of n8n automation workflows on GitHub — including additional templates, variations, and community contributions.",
      tags: ["Collection", "Open Source"],
      trigger: "GitHub Repo",
      triggerIcon: "app",
      integrations: ["n8n", "GitHub"],
      details: "",
      flow: "",
      setup: [],
      githubUrl: "https://github.com/NhitheesM/n8n_workflows",
      loomUrl: ""
    }
  ];

  const TriggerIcon = selectedWorkflow ? triggerIcons[selectedWorkflow.triggerIcon] : Zap;

  return (
    <section id="workflows" className="py-20 relative">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">Automation Workflows</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-ready n8n automation workflows for lead management, AI-powered content creation, job hunting, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => {
            const CardTriggerIcon = triggerIcons[workflow.triggerIcon];
            return (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs font-normal flex items-center gap-1">
                        <CardTriggerIcon className="w-3 h-3" />
                        {workflow.trigger}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{workflow.title}</CardTitle>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {workflow.integrations.map(integration => (
                        <Badge key={integration} variant="outline" className="text-[10px] font-normal px-1.5 py-0">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm">
                      {workflow.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {workflow.details ? (
                      <>
                        <Button
                          variant="ghost"
                          className="flex-1 justify-between group"
                          onClick={() => setSelectedWorkflow(workflow)}
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={workflow.githubUrl} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="ghost"
                        className="w-full justify-between group"
                        asChild
                      >
                        <a href={workflow.githubUrl} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                          <Github className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Workflow Detail Modal */}
      <AnimatePresence>
        {selectedWorkflow && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWorkflow(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border rounded-xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWorkflow(null)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight pr-8">
                    {selectedWorkflow.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <TriggerIcon className="w-3 h-3" />
                      {selectedWorkflow.trigger}
                    </Badge>
                    {selectedWorkflow.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Key Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorkflow.integrations.map(integration => (
                      <Badge key={integration} variant="secondary" className="text-xs">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* How it works */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    How it works
                  </h4>
                  <p className="text-base leading-relaxed">
                    {selectedWorkflow.details}
                  </p>
                </div>

                {/* Flow Diagram */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Workflow Flow
                  </h4>
                  <div className="bg-muted/50 border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm font-mono leading-relaxed whitespace-pre text-foreground/80">
                      {selectedWorkflow.flow}
                    </pre>
                  </div>
                </div>

                {/* Setup Instructions */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Setup
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedWorkflow.setup.map((step, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Loom Video */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Video Walkthrough
                  </h4>
                  {selectedWorkflow.loomUrl ? (
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <iframe
                        src={selectedWorkflow.loomUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={`${selectedWorkflow.title} walkthrough`}
                      />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg border border-dashed flex flex-col items-center justify-center gap-3 bg-muted/30">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <Play className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">🎥 Video Walkthrough Coming Soon</p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 flex gap-3 justify-end">
                  <Button variant="outline" asChild>
                    <a href={selectedWorkflow.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Workflows;
