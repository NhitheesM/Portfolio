import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-muted">
            <img
              src="/images/user.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a passionate Software Developer from India, specializing in building robust web applications and decentralized solutions.
            With a strong foundation in Computer Science and Engineering (Cybersecurity & Blockchain), I thrive on solving complex problems and creating intuitive user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey in tech has led me to explore the intersection of Web3, AI, and modern web development.
            I am dedicated to continuous learning and contributing to the open-source community.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">B.Tech Computer Science and Engineering</h4>
                <p className="text-sm text-muted-foreground">SASTRA Deemed University (2020 - 2024)</p>
                <p className="text-xs text-muted-foreground mt-1">Specialization in Cybersecurity & Blockchain Technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
