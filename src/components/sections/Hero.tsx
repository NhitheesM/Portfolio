import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(76,29,149,0.1),transparent)] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(124,58,237,0.1),transparent)]" />

      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-lg tracking-wide"
        >
          Automation Engineer & AI Architect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I'm <span className="text-primary">Nhithees</span>
          <br />
          From India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-xl max-w-2xl"
        >
          Building autonomous workflows and intelligent AI agents using n8n and modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 pt-4"
        >
          <Button size="lg" className="group" asChild>
            <a href="#contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
