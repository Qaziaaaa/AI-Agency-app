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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
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
            <p className="text-muted-foreground text-sm mb-6">
              xTRAI – Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div>
              <p className="font-medium mb-3">Join our newsletter</p>
              <div className="flex bg-secondary/30 rounded-xl border border-white/10 p-1.5 backdrop-blur-sm">
                <Input
                  placeholder="name@email.com"
                  className="bg-transparent border-none outline-none focus-visible:ring-0 shadow-none"
                />
                <Button className="bg-metal-purple hover:scale-105 transition-all font-semibold rounded-lg text-white ml-2 px-6 shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)]">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              {links.Links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {links.Pages.map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <ul className="space-y-3">
              {links.Socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Logo by flaticon</p>
          <p className="text-sm text-muted-foreground">
            Visioned and Crafted by Kanishk Dubey
          </p>
          <p className="text-sm text-muted-foreground">© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
