import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:gap-0">
        {/* Branding/Message */}
        <div className="text-center text-sm md:text-left">
          <p>© 2023 DevName. All rights reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/devname"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform hover:scale-110"
          >
            <Github className="h-6 w-6"/>
          </a>
          <a
            href="https://linkedin.com/in/devname"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/devname"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform hover:scale-110"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
