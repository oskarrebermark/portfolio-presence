import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Contact
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Interested in working together? Feel free to reach out. I'm always open to new projects and collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:Oskar.rebermark@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-md px-5 py-2.5 hover:bg-secondary transition-colors duration-300"
          >
            <Mail className="h-4 w-4" />
            Oskar.rebermark@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/oskar-kallebo-rebermark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-md px-5 py-2.5 hover:bg-secondary transition-colors duration-300"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="mt-32 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Built with care.
        </p>
      </div>
    </section>
  );
}
