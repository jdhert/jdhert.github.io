import { Navigation, MobileNavigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { HighlightsSection } from "@/components/portfolio/highlights-section"
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
      
      <div className="relative z-10 min-h-screen px-6 pb-12 pt-28 lg:px-20 lg:py-0 xl:px-24">
        <div className="mx-auto max-w-screen-2xl lg:flex lg:justify-between lg:gap-14 xl:gap-16">
          {/* Left Column - Fixed on Desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <HeroSection />
              <div className="mt-16">
                <Navigation />
              </div>
            </div>
          </header>
          
          {/* Right Column - Scrollable Content */}
          <main className="lg:w-[58%] lg:py-24 pt-8">
            <HighlightsSection />
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
