import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <section id='skills' className='scroll-mt-32'>
        <Skills />
      </section>
      <section id='projects' className='scroll-mt-32'>
        <Projects /> 
      </section>
      <Footer />
    </main>
  )
}
