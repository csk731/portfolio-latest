'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Sass"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "Spring Boot"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
  { category: "Other", items: ["RESTful APIs", "GraphQL", "Agile Methodologies", "Unit Testing"] },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skillSet, index) => (
          <motion.div
            key={skillSet.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="text-xl font-semibold text-primary">{skillSet.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-2 bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

