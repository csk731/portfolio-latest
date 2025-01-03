'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-platform-demo.com",
    image: "/placeholder.svg"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team communication features.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
    github: "https://github.com/username/task-management-app",
    live: "https://task-app-demo.com",
    image: "/placeholder.svg"
  },
  {
    title: "AI-powered Image Recognition",
    description: "An image recognition system using machine learning to classify and tag images automatically.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "AWS"],
    github: "https://github.com/username/ai-image-recognition",
    live: "https://ai-image-demo.com",
    image: "/placeholder.svg"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

