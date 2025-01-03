'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import QuickLinks from './quick-links'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const headerOffset = 104;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const headerOffset = 104;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section className="min-h-[calc(100vh-104px)] flex items-center py-12 sm:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-primary">CodeCraftsman</span>
              <span className="block">Software Developer</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Crafting elegant solutions to complex problems. Passionate about creating intuitive and efficient software that makes a difference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base py-6"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base py-6"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-[400px] max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <QuickLinks />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

