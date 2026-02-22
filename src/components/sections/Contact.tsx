import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz-oX6ZVpRSp6qq10fTb0t1mFp1t7P_0olNtLISa89MHnnunx_m-vjfan8p72HY1u28/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, { method: 'POST', body: formData });
      setMessage("Message sent successfully!");
      form.reset();
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      console.error('Error!', error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:nhitheesmohan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  nhitheesmohan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+919843427680" className="text-muted-foreground hover:text-primary transition-colors">
                  +91-9843427680
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href={`${import.meta.env.BASE_URL}images/Nhithees_M_AI_Automation_Engineer_Resume.pdf`} download>
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="Name" placeholder="Your Name" required disabled={isSubmitting} />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="Email" type="email" placeholder="Your Email" required disabled={isSubmitting} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="Message" placeholder="Your Message" rows={4} required disabled={isSubmitting} />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              {message && (
                <p className={`text-sm text-center ${message.includes("Error") ? "text-destructive" : "text-green-500"}`}>
                  {message}
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
