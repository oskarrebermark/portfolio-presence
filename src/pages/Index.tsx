import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
