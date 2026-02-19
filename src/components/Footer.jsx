import { memo, useCallback } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";

// Medium icon
const Medium = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 17a5 5 0 0 0 5-5c0-2.76-2.24-5-5-5s-5 2.24-5 5a5 5 0 0 0 5 5zm0 0v2m5-7h2m-14 0h2" />
  </svg>
);

// Behance icon
const Behance = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18.5 5.5h-5M8.5 13.5h3.5c1.5 0 2-1 2-2.5s-1-2.5-2.5-2.5H8.5v5zm0-5v-3h3c1.5 0 2.5 1 2.5 2.5S13 8 11.5 8h-3z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { name: "Home", href: "/", targetId: null },
  { name: "Work", href: "/work", targetId: null },
  { name: "Speaking", href: "/journal", targetId: null },
  { name: "About", href: "/about", targetId: null },
  { name: "Resources", href: "/resources", targetId: null },
  { name: "Contact", href: "/contact", targetId: null },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/oshadhi-vanodhya/",
    label: "Visit Oshadhi's LinkedIn profile",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/oshadhi.ux/",
    label: "Visit Oshadhi's Instagram profile",
  },
  {
    name: "Medium",
    icon: Medium,
    href: "https://medium.com/@vanodhyaoshadhi",
    label: "Visit Oshadhi's Medium profile",
  },
  {
    name: "Behance",
    icon: Behance,
    href: "https://www.behance.net/vanodhyaoshadhi",
    label: "Visit Oshadhi's Behance profile",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/oshadhi-vanodhya",
    label: "Visit Oshadhi's GitHub profile",
  },
];

// Smooth scroll helper
const handleSmoothScroll = (e, targetId) => {
  if (window.location.pathname === "/") {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export function Footer() {
  const handleNavClick = useCallback((e, link) => {
    if (link.name === "Home") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (
      link.name === "Contact" ||
      link.name === "Resources" ||
      link.name === "About"
    ) {
      return;
    }

    if (link.targetId) {
      handleSmoothScroll(e, link.targetId);
    }
  }, []);

  return (
    <footer
      id="footer"
      className="bg-[#020617] border-t border-white/5 pt-20 pb-8 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-inner shadow-white/20">
                O
              </span>
              <h2 className="text-2xl font-serif italic text-white tracking-wide">
                Oshadhi Vanodhya
              </h2>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Senior product designer specializing in complex systems, AI
              interfaces, and enterprise UX. Crafting clarity from chaos through
              thoughtful, human-centered design.
            </p>

            <div className="flex gap-4 mt-2">
              <Button
                asChild
                className="rounded-full bg-violet-600 text-white hover:bg-violet-700 px-6 h-11 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]"
              >
                <a href="mailto:oshadhi.ux@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  oshadhi.ux@gmail.com
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm opacity-80">
              Explore
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors inline-block"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm opacity-80">
              Connect
            </h3>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-violet-400 group transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <span className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all">
                        <IconComponent className="h-4 w-4" />
                      </span>
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-light">
          <p className="text-[rgb(156,169,186)]">
            &copy; {CURRENT_YEAR} Oshadhi Vanodhya. Built by Oshi with ♥️
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <span
              className="flex items-center gap-1.5 text-[rgb(156,168,186)] text-[13px]"
              title="Web Content Accessibility Guidelines 2.1 AA Compliant"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
              WCAG 2.1 AA Accessible
            </span>
            <a
              href="#"
              className="hover:text-violet-400 transition-colors text-[rgb(156,169,186)]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
