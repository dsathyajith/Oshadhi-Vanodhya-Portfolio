import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Speaking & Journal", href: "/journal" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#kind-words" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative rounded-full border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-[0_4px_20px_-1px_rgba(0,0,0,0.3)] px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 font-semibold tracking-tight text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-full"
                aria-label="Oshadhi Vanodhya Home page"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-inner shadow-white/20">
                  O
                </span>
                <span className="hidden sm:inline-block font-serif italic text-lg">
                  Oshi Vanodhya
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/#") &&
                    link.name !== "Speaking & Journal" ? (
                      <Link
                        to={link.name === "Work" ? "/work" : link.href}
                        className="text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors relative group inline-block py-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                        onClick={(e) => {
                          if (link.name === "Work") return;

                          const elementId = link.href.replace("/#", "");

                          // If we're not on the home page, navigate there first
                          if (window.location.pathname !== "/") {
                            // Let the Link component handle navigation to home
                            setTimeout(() => {
                              const element =
                                document.getElementById(elementId);
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 300);
                          } else {
                            // Already on home page, just scroll
                            e.preventDefault();
                            const element = document.getElementById(elementId);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }
                        }}
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ) : (
                      <Link
                        to={
                          link.name === "Speaking & Journal"
                            ? "/journal"
                            : link.href
                        }
                        className="text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors relative group inline-block py-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
                        onClick={(e) => {
                          if (link.name === "Speaking & Journal") return;

                          // Only apply hash link logic if this is actually a hash link
                          if (link.href.startsWith("/#")) {
                            const elementId = link.href.replace("/#", "");

                            // If we're not on the home page, navigate there first
                            if (window.location.pathname !== "/") {
                              // Let the Link component handle navigation to home
                              setTimeout(() => {
                                const element =
                                  document.getElementById(elementId);
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }
                              }, 300);
                            } else {
                              // Already on home page, just scroll
                              e.preventDefault();
                              const element =
                                document.getElementById(elementId);
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }
                          }
                          // For regular routes like /about and /resources, let Link handle navigation normally
                        }}
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div
                className="h-4 w-px bg-white/10 mx-2"
                aria-hidden="true"
              ></div>

              <div className="flex items-center gap-3">
                {/* 
                <Link 
                  to="/resume" 
                  className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  aria-label="Download CV"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden xl:inline">CV</span>
                </Link> 
                */}
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-white text-slate-900 hover:bg-violet-50 hover:text-violet-900 font-medium px-6 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-white text-slate-900 hover:bg-violet-50 hover:text-violet-900 font-medium px-4 h-8 text-xs focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <Link to="/contact">Contact</Link>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-[#020617] pt-28 px-6 lg:hidden"
            aria-hidden={!isOpen}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-6 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={
                          link.name === "Work"
                            ? "/work"
                            : link.name === "Testimonials"
                              ? "/#kind-words"
                              : link.href
                        }
                        className="text-2xl font-serif italic text-slate-300 hover:text-violet-400 block py-2 border-b border-white/5"
                        onClick={(e) => {
                          setIsOpen(false);
                          const targetHref =
                            link.name === "Work"
                              ? "/work"
                              : link.name === "Testimonials"
                                ? "/#kind-words"
                                : link.href;

                          if (
                            targetHref.startsWith("/#") &&
                            window.location.pathname === "/"
                          ) {
                            e.preventDefault();
                            const elementId = targetHref.replace("/#", "");
                            setTimeout(() => {
                              const element =
                                document.getElementById(elementId);
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 300);
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-2xl font-serif italic text-slate-300 hover:text-violet-400 block py-2 border-b border-white/5"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 mt-4">
                {/* 
                <Link 
                  to="/resume" 
                  className="flex items-center gap-2 text-lg font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </Link> 
                */}
                <Button
                  asChild
                  className="w-full rounded-full bg-violet-600 text-white hover:bg-violet-700 h-12 text-lg"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
