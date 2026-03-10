import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import TiltedCard from "@/components/TiltedCard";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const imageSrc = theme === "dark" && project.imageDark ? project.imageDark : project.image;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {(() => {
        const hasLink = project.link && project.link !== "#";
        const Wrapper = hasLink ? "a" : "div";
        const wrapperProps = hasLink
          ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" }
          : {};
        return (
          <Wrapper
            {...wrapperProps}
            className={`group flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center ${hasLink ? "cursor-pointer" : ""}`}
          >
            <div className="w-full md:w-1/2 overflow-visible rounded-lg">
              <TiltedCard
                imageSrc={imageSrc}
                altText={project.title}
                captionText={project.title}
                containerHeight="320px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                {hasLink && (
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                )}
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.concepts.map((concept) => (
                  <Badge key={concept} variant="secondary" className="text-xs font-normal">
                    {concept}
                  </Badge>
                ))}
              </div>
            </div>
          </Wrapper>
        );
      })()}
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="projects" className="py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Selected work</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-16" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-36">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
