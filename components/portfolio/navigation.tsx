"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolio } from "@/lib/portfolio"

const navItems = [
  { name: "소개", href: "#about" },
  { name: "경험", href: "#experience" },
  { name: "기술 스택", href: "#skills" },
  { name: "프로젝트", href: "#projects" },
  { name: "자격증", href: "#certificates" },
  { name: "연락처", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "")
          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group flex items-center gap-4 text-sm transition-all duration-300 ${
                  isActive 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span 
                  className={`h-px transition-all duration-300 ${
                    isActive 
                      ? "w-16 bg-foreground" 
                      : "w-8 bg-muted-foreground/50 group-hover:w-12 group-hover:bg-foreground"
                  }`} 
                />
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="glass px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-gradient">
            {portfolio.name}
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
          <nav className="relative h-full flex flex-col items-center justify-center">
            <ul className="space-y-6 text-center">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
