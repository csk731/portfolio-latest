'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const aboutContent = {
  "title": "About Me",
  "image": {
    "src": "/placeholder.svg",
    "alt": "DevName",
    "width": 400,
    "height": 400
  },
  "paragraphs": [
    "Hello! I'm DevName, a passionate software developer with a keen interest in building innovative and user-friendly applications. With a strong foundation in computer science and years of hands-on experience, I specialize in creating efficient, scalable, and maintainable code.",
    "My journey in tech began with a fascination for problem-solving, which led me to pursue a degree in Computer Science. Since then, I've worked on a diverse range of projects, from web applications to mobile apps and everything in between.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups. I'm always excited about taking on new challenges and collaborating with like-minded individuals to create impactful solutions."
  ]
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-[104px] py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {aboutContent.title}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 max-w-md px-4 md:px-0"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: 'center' }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              width={aboutContent.image.width}
              height={aboutContent.image.height}
              className="rounded-full mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-4 p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}