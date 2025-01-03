'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import headerContent from '@/data/header'
import { CloudDownload } from 'lucide-react';

const HEADER_HEIGHT = 104; // 80px header + 24px padding
const navItems = headerContent.navItems

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sections = navItems.map(item => item.href.slice(1))
      
      // Check if we're at the top of the page (landing section)
      if (scrollPosition < window.innerHeight) {
        setActiveSection('')
        return
      }

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          return scrollPosition >= element.offsetTop && 
                 scrollPosition < (element.offsetTop + element.offsetHeight)
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="container mx-auto bg-background/80 backdrop-blur-md border border-border/40 rounded-full shadow-lg">
        <div className="flex h-16 items-center justify-between px-4">
          <Link className="flex items-center space-x-2 shrink-0" href="/">
            <span className="font-bold text-xl">{headerContent.title}</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                className="rounded-full"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <a target="_blank" download href={headerContent.resumeLink}>
                <Button className="hidden lg:inline-flex rounded-full">Download Resume <CloudDownload/>  </Button>
              </a>
            </motion.div>
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2"
          >
            <nav className={`flex flex-col items-center space-y-4 p-4 rounded-3xl border border-border/40 shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                  className="w-full rounded-full"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <div className="flex justify-center w-full">
                <ThemeToggle />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a target="_blank" download href={headerContent.resumeLink}>
                  <Button className="w-full rounded-full">Download Resume <CloudDownload/>  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

