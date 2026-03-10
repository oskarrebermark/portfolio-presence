import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import MetaBalls from "@/components/MetaBalls";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useIsMobile();

  return (
    <section id="home" className="min-h-screen flex items-center py-32 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-3 mb-4"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">Developer &amp; Designer</p>
          <Badge variant="outline" className="text-xs font-medium border-[hsl(var(--status)/0.4)] text-[hsl(var(--status-foreground))] bg-[hsl(var(--status)/0.1)]">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--status))] animate-pulse" />
            Open to work
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Building thoughtful
          <br />
          digital experiences
          <br />
          <span className="text-muted-foreground">with passion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-base text-muted-foreground leading-relaxed max-w-md mb-8"
        >
          I craft clean, thoughtful interfaces and robust applications. Focused on simplicity, usability, and attention
          to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border-l-2 border-border pl-5 space-y-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">About me</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Second-year master's student in Interactive Media Technology at KTH Royal Institute of Technology. My studies have spanned interaction design, sound in interaction, dynamic web development, and haptics.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Previously an exchange student at Science Tokyo in Japan. Currently writing my master's thesis on Conversion Rate Optimization.
          </p>
        </motion.div>
      </motion.div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-auto"
        >
          <MetaBalls
            color="#000000"
            cursorBallColor="#000000"
            ballCount={12}
            speed={0.3}
            animationSize={25}
            enableTransparency={true}
            hoverSmoothness={0.1}
            clumpFactor={1.2}
            cursorBallSize={2}
          />
        </motion.div>
      )}
    </section>
  );
}
