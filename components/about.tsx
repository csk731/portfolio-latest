import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="scroll-mt-[104px] py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 max-w-md px-4 md:px-0">
          <Image
            src="/placeholder.svg"
            alt="DevName"
            width={400}
            height={400}
            className="rounded-full mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p>
            Hello! I'm DevName, a passionate software developer with a keen interest in building innovative and user-friendly applications. With a strong foundation in computer science and years of hands-on experience, I specialize in creating efficient, scalable, and maintainable code.
          </p>
          <p>
            My journey in tech began with a fascination for problem-solving, which led me to pursue a degree in Computer Science. Since then, I've worked on a diverse range of projects, from web applications to mobile apps and everything in between.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups. I'm always excited about taking on new challenges and collaborating with like-minded individuals to create impactful solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

