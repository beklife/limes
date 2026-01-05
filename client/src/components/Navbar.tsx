import { useState } from "react";
import { Menu, X, Ticket, Music, Beer, MapPin, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.events, href: "#events" },
    { name: t.nav.menu, href: "#menu" },
    { name: t.nav.location, href: "#location" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-bold uppercase tracking-tighter text-primary rotate-2 hover:rotate-0 transition-transform duration-300 font-display">
            Limes
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              title={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            >
              <Languages size={16} />
              {language === "de" ? "EN" : "DE"}
            </button>
            <a
              href="#events"
              className="bg-primary text-black px-4 py-2 font-bold uppercase text-sm -rotate-1 hover:rotate-1 hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              {language === "de" ? "Kommende" : "Upcoming"}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold uppercase text-foreground hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="text-2xl font-bold uppercase text-foreground hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary transition-all flex items-center gap-2"
              >
                <Languages size={24} />
                {language === "de" ? "English" : "Deutsch"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
