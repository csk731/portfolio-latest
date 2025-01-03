'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInSection from './fade-in-section'

const projects = [
  {
    title: 'E-commerce Platform E-commerce Platform E-commerce Platform E-commerce Platform',
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate. A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate. A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate. A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate. A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate. A full-stack e-commerce solution with real-time inventory management and secure payment processing. This project includes a robust admin panel, detailed product pages, user authentication, discount coupon management, and more. It's designed with scalability in mind, ensuring that even large catalogs with thousands of products remain performant and easy to navigate.",
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe API',
      'Redux',
      'Tailwind CSS',
      'Docker',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe API',
      'Redux',
      'Tailwind CSS',
      'Docker',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe API',
      'Redux',
      'Tailwind CSS',
      'Docker',
    ],
    github: 'https://github.com/username/ecommerce-platform',
    live: 'https://ecommerce-platform-demo.com',
    image: '/placeholder.svg',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team communication features. This app supports unlimited subtasks, multiple project boards, and custom user roles. Integrations with external services (like Slack and Microsoft Teams) keep your team in sync.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Element UI'],
    github: 'https://github.com/username/task-management-app',
    live: 'https://task-app-demo.com',
    image: '/placeholder.svg',
  },
  {
    title: 'AI-powered Image Recognition',
    description:
      'An image recognition system using machine learning to classify and tag images automatically. Built for speed and accuracy, this project uses a CNN model trained on millions of images to quickly categorize and store metadata. It also features a RESTful API, allowing developers to integrate image recognition capabilities into any application.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'AWS', 'S3', 'EC2', 'Docker'],
    github: 'https://github.com/username/ai-image-recognition',
    live: 'https://ai-image-demo.com',
    image: '/placeholder.svg',
  },
]

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<boolean[]>(
    projects.map(() => false)
  )

  const toggleExpanded = (index: number) => {
    setExpandedProjects((prev) => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <section id="projects" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <FadeInSection key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="
                  flex 
                  flex-col 
                  w-full 
                  max-w-sm 
                  h-[500px]
                  overflow-hidden
                  rounded-md
                  hover:shadow-lg 
                  transition-shadow 
                  duration-300
                  mx-auto
                "
              >
                {/* Main content scrollable */}
                <div className="flex-grow overflow-auto p-4">
                  {/* IMAGE FIRST */}
                  <div className="relative w-full h-40 rounded-md overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TITLE NEXT: truncated vs full */}
                  <div className="mt-3">
                    <AnimatePresence initial={false}>
                      {expandedProjects[index] ? (
                        /* FULL TITLE */
                        <motion.div
                          key="title-full"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <CardTitle className="text-lg font-semibold text-primary">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                      ) : (
                        /* TRUNCATED TITLE (line-clamp-2) */
                        <motion.div
                          key="title-truncated"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <CardTitle className="text-lg font-semibold text-primary line-clamp-2">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* SKILLS: show clipped or full depending on expanded state */}
                  <div className="mt-3">
                    <AnimatePresence initial={false}>
                      {expandedProjects[index] ? (
                        /* SHOW FULL SKILLS */
                        <motion.div
                          key="skills-full"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        /* SHOW CLIPPED SKILLS (2 lines max) */
                        <motion.div
                          key="skills-clipped"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="max-h-[3rem] overflow-hidden">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* DESCRIPTION: truncated vs full */}
                  <div className="mt-3">
                    <AnimatePresence initial={false}>
                      {expandedProjects[index] ? (
                        /* FULL DESCRIPTION */
                        <motion.div
                          key="desc-full"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <CardDescription className="text-sm text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </motion.div>
                      ) : (
                        /* TRUNCATED DESCRIPTION (line-clamp-3) */
                        <motion.div
                          key="desc-truncated"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                            {project.description}
                          </CardDescription>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* SHOW MORE / LESS BUTTON */}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm underline mt-2"
                    onClick={() => toggleExpanded(index)}
                  >
                    {expandedProjects[index] ? 'Show Less' : 'Show More'}
                  </Button>
                </div>

                {/* FOOTER */}
                <CardFooter className="p-4 mt-auto flex justify-between border-t">
                  {project.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
