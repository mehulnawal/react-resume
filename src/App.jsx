/*
1. Responsive 
3. Loading time of 3d image
4. add locomotive and gsap
7. on click it should redirect to another page 
9. add animation on toggle theme
10. praticales not working 
*/

import Header from './components/header'
import About from './components/about'
import { ThemeProvider } from './components/theme'
import './index.css'
import { ActiveClassProvider } from './components/activeClass'
import Education from './components/education'
import Experience from './components/experience'
import Footer from './components/footer'
import Projects from './components/projects'

function App() {

  return <>
    <ThemeProvider>
      <ActiveClassProvider>
        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Footer />
      </ActiveClassProvider>
    </ThemeProvider>
  </>
}

export default App