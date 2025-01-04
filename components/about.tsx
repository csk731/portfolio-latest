'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import aboutContent from '@/data/about'

export default function About() {
  return (
    <section id="about" className="scroll-mt-[104px] py-8 md:py-8">
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
              width={400}
              height={400}
              className="mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg"
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