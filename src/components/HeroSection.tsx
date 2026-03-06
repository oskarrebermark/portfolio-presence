import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="home" className="min-h-screen flex items-center py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-2xl"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Developer &amp; Designer</p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Building thoughtful
          <br />
          digital experiences
          <br />
          <span className="text-muted-foreground">with passion.</span>
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-md">
          I craft clean, thoughtful interfaces and robust applications. Focused on simplicity, usability, and attention
          to detail.
        </p>
      </motion.div>
    </section>
  );
}
