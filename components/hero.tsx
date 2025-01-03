'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from "lucide-react";
import QuickLinks from './quick-links'
import heroContent from '@/data/hero'
import commonContent from '@/data/common'

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const headerOffset = 104
      const elementPosition = projectsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const headerOffset = 104
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="min-h-[calc(100vh-104px)] flex items-center py-12 sm:py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          {/* Left content (heading, subheading, buttons) */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-primary">
                {heroContent.heading.line1}
              </span>
              <span className="block text-4xl mt-3">
                {heroContent.heading.line2}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>
            <p className="mt-6 text-md text-muted-foreground max-w-2xl mx-auto lg:mx-0 flex lg:justify-start justify-center gap-2">
              <MapPin className="h-5 w-5" /> Currently resides in {commonContent.location}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Hover animation for Button #1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base py-6"
                  onClick={scrollToProjects}
                >
                  {heroContent.buttons.viewWork}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Hover animation for Button #2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base py-6"
                  onClick={scrollToContact}
                >
                  {heroContent.buttons.contact}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content (QuickLinks) */}
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
  );
}
