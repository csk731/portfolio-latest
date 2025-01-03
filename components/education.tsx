import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FadeInSection from './fade-in-section'

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    startYear: 2018,
    endYear: 2020,
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Optimizing Neural Networks for Edge Computing'."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    startYear: 2014,
    endYear: 2018,
    description: "Graduated with honors. Focused on software engineering and data structures. Completed several team projects including a campus navigation app."
  },
]

export default function Education() {
  return (
    <section id="education" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
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
        ))}
      </div>
    </section>
  )
}

