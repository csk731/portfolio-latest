'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import skillsContent from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="pt-4 pb-4 md:pt-4 md:pb-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills & Expertise
      </h2>
      <div className="grid gap-8 w-full mx-auto px-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {skillsContent.map((skillSet, index) => (
          <motion.div
            key={skillSet.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="text-xl font-semibold text-primary">
                  {skillSet.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1, cursor: "pointer" }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.03,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-1 px-2 bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
