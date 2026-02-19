import { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

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
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Speaking", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/oshadhi-vanodhya/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/oshadhi.ux/",
  },
  { name: "Medium", icon: Medium, href: "https://medium.com/@vanodhyaoshadhi" },
  {
    name: "Behance",
    icon: Behance,
    href: "https://www.behance.net/vanodhyaoshadhi",
  },
  { name: "GitHub", icon: Github, href: "https://github.com/oshadhi-vanodhya" },
];

// Smooth scroll for Home
const handleSmoothScroll = () => {
  if (window.location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const Footer = memo(() => {
  const location = useLocation();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
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

            <a
              href="mailto:oshadhi.ux@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-colors w-auto"
            >
              <Mail className="h-4 w-4" />
              oshadhi.ux@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm opacity-80">
              Explore
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  {link.name === "Home" && location.pathname === "/" ? (
                    <button
                      onClick={handleSmoothScroll}
                      className="text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
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
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
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
            &copy; {CURRENT_YEAR} Oshadhi Vanodhya. Built with ♥️ by Oshi
          </p>
          <div className="flex flex-wrap justify-center gap-6">
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
});
