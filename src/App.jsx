import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import Tools from "./components/Tools"
import Work from "./components/Work"


function App() {
  return (
    <div className="min-h-screen bg-black  ">
      <Navbar/>
      <Home/>
      <Work/>
      <Services/>
      <About/>
      <Tools/>
      <Testimonial/>
      <Contact/>
    </div>
  ) 
}

export default App