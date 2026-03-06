import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const sectionColors = {
  light: {
    home: "hsl(220, 25%, 95%)",
    projects: "hsl(160, 20%, 94%)",
    contact: "hsl(30, 25%, 95%)",
  },
  dark: {
    home: "hsl(230, 30%, 8%)",
    projects: "hsl(170, 25%, 7%)",
    contact: "hsl(30, 30%, 7%)",
  },
};

const Index = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState(sectionColors[theme].home);

  useEffect(() => {
    setBgColor(sectionColors[theme].home);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "projects", "home"] as const;
      const colors = sectionColors[theme];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          setBgColor(colors[section]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <div
      className="min-h-screen transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <Navbar />
      <div className="lg:ml-48 pt-16 lg:pt-0">
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 max-w-4xl">
          <HeroSection />
        </div>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <ProjectsSection />
        </div>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 max-w-4xl">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
