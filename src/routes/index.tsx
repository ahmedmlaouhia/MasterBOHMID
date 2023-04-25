import About from '~/core/About'
import Blogs from '~/core/blogs'
import Contact from '~/core/Contact'
import Extra from '~/core/Extra'
import Hero from '~/core/hero'
import Projects from '~/core/projects'

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Extra />
      <Contact />
    </div>
  )
}
