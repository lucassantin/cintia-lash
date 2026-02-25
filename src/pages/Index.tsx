import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingCTA from "@/components/FloatingCTA";
import CoursesSection from "@/components/CoursesSection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <FAQSection />
      <FooterSection />
      <FloatingCTA />
    </main>
  );
};

export default Index;
