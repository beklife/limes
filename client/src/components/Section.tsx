import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className = "", children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20 text-center"
          >
            {title && (
              <h2 className="text-5xl md:text-7xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-primary via-white to-primary mb-4 rotate-1 inline-block">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto uppercase tracking-wider">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
