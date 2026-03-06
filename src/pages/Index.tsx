import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="lg:ml-48 px-6 sm:px-12 md:px-16 lg:px-20 max-w-4xl pt-16 lg:pt-0">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
