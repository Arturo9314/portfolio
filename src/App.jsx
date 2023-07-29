import AboutMe from "./components/AboutMe";
import Creations from "./components/Creations";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { MainNavbar } from "./elements/Navbar";
import './styles/App.css'

function App() {

  return (
    <main>
      <MainNavbar/>
      <Home/>
      <AboutMe/>
      <Experience/>
      <Creations/>
      <footer>
        <p>Build and designed by Arturo Torres.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </main>
  )
}

export default App
