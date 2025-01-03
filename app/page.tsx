import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import BackgroundAnimation from '@/components/background-animation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <BackgroundAnimation />
      <Header />
      {/* Add mt-[104px] to account for fixed header */}
      <main className="container mx-auto px-4 mt-[104px] space-y-16 md:space-y-32 relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

