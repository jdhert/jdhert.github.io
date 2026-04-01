import { Navigation, MobileNavigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { CertificatesSection } from "@/components/portfolio/certificates-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { AnimatedBackground } from "@/components/portfolio/animated-background"
import { MouseGradient } from "@/components/portfolio/mouse-gradient"

export default function PortfolioPage() {
  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Mouse following gradient */}
      <MouseGradient />
      
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      <div className="relative z-10 min-h-screen px-6 py-12 lg:px-24 lg:py-0">
        <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-16">
          {/* Left Column - Fixed on Desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <HeroSection />
              <div className="mt-16">
                <Navigation />
              </div>
            </div>
          </header>
          
          {/* Right Column - Scrollable Content */}
          <main className="lg:w-[55%] lg:py-24 pt-8">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  )
}
