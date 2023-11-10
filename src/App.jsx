import './App.css'
import Nav from '../components/Nav'
import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import LoadingScreen from '../components/LoadingScreen'

function App() {

  return (
    <>
    <LoadingScreen />
    <Nav />
    <Introduction />
    <AboutMe />
    {/* <Experience /> */}
    <Projects />
    <Contact />
    </>
  )
}

export default App
