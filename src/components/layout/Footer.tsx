import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const links = {
  Links: ["Services", "Process", "Case studies", "Benefits", "Pricing"],
  Pages: ["Home", "About", "Blog", "Contact", "404"],
  Socials: [
    { name: "Instagram", icon: Instagram },
    { name: "Facebook", icon: Facebook },
    { name: "Linkedin", icon: Linkedin },
    { name: "Twitter", icon: Twitter },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 flex flex-col items-center justify-center relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-foreground group-hover:text-primary transition-colors">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-widest text-foreground">xTRAI</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-md">
              xTRAI – Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="max-w-md">
              <p className="font-medium mb-4 text-foreground">Join our newsletter</p>
              <div className="flex bg-secondary/30 rounded-xl border border-white/10 p-1.5 backdrop-blur-sm">
                <Input
                  placeholder="name@email.com"
                  className="bg-transparent border-none outline-none focus-visible:ring-0 shadow-none flex-1 min-w-0"
                />
                <Button className="bg-metal-purple hover:scale-105 transition-all font-semibold rounded-lg text-white ml-2 px-4 sm:px-6 shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)] shrink-0 whitespace-nowrap">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-6 text-foreground">Links</h4>
            <ul className="space-y-4">
              {links.Links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-6 text-foreground">Pages</h4>
            <ul className="space-y-4">
              {links.Pages.map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-6 text-foreground">Socials</h4>
            <ul className="space-y-4 flex flex-col sm:flex-row sm:flex-wrap sm:gap-6 sm:space-y-0 lg:flex-col lg:space-y-4 lg:gap-0">
              {links.Socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-muted-foreground font-medium">Logo by flaticon</p>
          <p className="text-sm text-muted-foreground font-medium">
            Visioned and Crafted by Kanishk Dubey
          </p>
          <p className="text-sm text-muted-foreground font-medium">© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
