'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import FadeInSection from './fade-in-section'

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    startYear: 2020,
    endYear: new Date().getFullYear(), // Current year for "Present"
    responsibilities: [
      "Lead a team of 5 developers in designing and implementing scalable web applications",
      "Architected and developed a microservices-based platform that improved system efficiency by 40%",
      "Implemented CI/CD pipelines, reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews to ensure high code quality"
    ]
  },
  {
    title: "Software Developer",
    company: "Digital Solutions Ltd.",
    startYear: 2018,
    endYear: 2020,
    responsibilities: [
      "Developed and maintained multiple full-stack web applications using React and Node.js",
      "Optimized database queries, resulting in a 30% improvement in application performance",
      "Collaborated with the UX team to implement responsive and accessible user interfaces",
      "Participated in Agile development processes, including daily stand-ups and sprint planning"
    ]
  },
]

export default function Experience() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="experience" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((exp, index) => (
          <FadeInSection key={index}>
            <Card>
              <CardHeader className="bg-primary/5 pb-3">
                <CardTitle className="text-2xl text-primary">
                  {exp.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">{exp.company}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.startYear} - {exp.endYear === currentYear ? 'Present' : exp.endYear}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-foreground">{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

