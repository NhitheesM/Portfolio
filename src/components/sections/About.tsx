import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-muted/20 bg-muted group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/user.png`}
              alt="Profile"
              className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary w-fit">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I am an <span className="text-foreground font-semibold">Automation Engineer & AI Architect</span>, specializing in designing intelligent workflows and autonomous agents using <span className="text-foreground font-semibold">n8n</span>.
            My passion lies in eliminating repetitive tasks and building systems that think for themselves.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            From complex data pipelines to AI-driven customer support bots, I transform manual processes into efficient, scalable automated solutions.
            I leverage the power of <span className="text-foreground font-semibold">LLMs</span> and low-code platforms to bridge the gap between human creativity and machine execution.
          </p>

          <div className="pt-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="p-1 bg-primary/10 rounded-md text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6" /><path d="M20 16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" /><path d="M22 8.82V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.82a4 4 0 0 1 1.17-2.83l.83-.83" /><path d="M2 10h20" /><path d="m19 10-4.66-8.35a1.99 1.99 0 0 0-3.68 0L6 10" /></svg>
              </span>
              Education
            </h3>

            <div className="space-y-6 pl-2 border-l-2 border-primary/20 ml-3">
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background"></div>
                <h4 className="font-medium text-lg">B.Tech Computer Science and Engineering</h4>
                <p className="text-primary font-medium mt-1">SASTRA Deemed University</p>
                <p className="text-sm text-muted-foreground mb-2">2020 - 2024</p>
                <p className="text-sm text-muted-foreground">
                  Specialization in <span className="text-foreground">Cybersecurity & Blockchain Technology</span>.
                  Focused on secure system design and distributed ledger technologies.
                </p>
              </div>
            </div>
          </div>


          <div className="pt-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="p-1 bg-primary/10 rounded-md text-primary">
                <Briefcase className="w-5 h-5" />
              </span>
              Work Experience
            </h3>

            <div className="space-y-8 pl-2 border-l-2 border-primary/20 ml-3">
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background"></div>
                <h4 className="font-medium text-lg">Assistant System Engineer</h4>
                <p className="text-primary font-medium mt-1">Tata Consultancy Services (TCS)</p>
                <p className="text-sm text-muted-foreground mb-2">Aug 2024 – Present</p>
                <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                  <li>Designed and maintained reliable backend workflows supporting enterprise financial systems.</li>
                  <li>Built and integrated REST APIs enabling secure data exchange between services.</li>
                  <li>Implemented validation, error handling, and logging to improve system reliability.</li>
                  <li>Optimized PL/SQL queries and triggers, improving performance by approximately 30%.</li>
                  <li>Collaborated with cross-functional teams to deliver production-ready solutions.</li>
                </ul>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background"></div>
                <h4 className="font-medium text-lg">Software Engineering Fellow</h4>
                <p className="text-primary font-medium mt-1">Headstarter AI</p>
                <p className="text-sm text-muted-foreground mb-2">Jun 2024 – Jul 2024</p>
                <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                  <li>Built automation-friendly backend systems with clear data contracts.</li>
                  <li>Worked on AI-assisted workflows emphasizing deterministic logic and reliability.</li>
                  <li>Translated product requirements into scalable technical implementations.</li>
                </ul>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background"></div>
                <h4 className="font-medium text-lg">Software Developer Intern</h4>
                <p className="text-primary font-medium mt-1">OpenBootcamp</p>
                <p className="text-sm text-muted-foreground mb-2">Nov 2023 – Dec 2023</p>
                <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                  <li>Developed JavaScript-based applications and backend logic.</li>
                  <li>Practiced structured development workflows using Git and collaborative tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  );
};

export default About;
