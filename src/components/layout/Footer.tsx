import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-mono">Nhithees M</h3>
            <p className="text-muted-foreground mt-2">
              Building scalable web applications with modern technologies.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/NhitheesM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/nhitheesm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/MNhithees?t=Ugv6S_2MX_l9bjThqCDuqA&s=35"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/nhithees_mohan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground border-t pt-8">
          <p>© {new Date().getFullYear()} Nhithees M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
