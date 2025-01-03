'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FadeInSection from './fade-in-section'
import educationContent from '@/data/education'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="pt-4 pb-4 md:pt-4 md:pb-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationContent.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FadeInSection key={index}>
              <Card>
                <CardHeader className="bg-primary/5 pb-3">
                  <CardTitle className="text-2xl text-primary">
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-1">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{edu.startYear} - {edu.endYear}</p>
                  <p className="text-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

