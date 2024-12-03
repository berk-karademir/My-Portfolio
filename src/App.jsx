import Header from './components/Header'
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./reset.css"
import Profile from './components/Profile';
import Projects from './components/Projects';
function App() {

  return (
    <>
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
    </>
  )
}

export default App
