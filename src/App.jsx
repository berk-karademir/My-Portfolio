import Header from './components/Header'
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./reset.css"
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
