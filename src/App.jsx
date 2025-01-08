// Home - cover page
// Header w/ Navbar - Table of Contents
// Gallery - compilation of pictures
// Portfolio Entries - Selected works or outputs with the date and place where it was taken (if applicable) 
// and a brief description for each that explains the mathematical concepts or patterns present, such as symmetry, tessellations, fractals, or Fibonacci sequences, Frieze, Rosette and or Wallpaper pattern
// 3 pic each, 2 pic only for Fibonacci
// Reflection
// rfc for instant boilerplate

import './App.css'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AboutMe from './pages/AboutMe'
import Reflection from './pages/Reflection'
import Symmetry from './pages/Symmetry'
import Tesselations from './pages/Tesselations'
import Fractals from './pages/Fractals'
import FibonacciSequence from './pages/FibonacciSequence'
import Frieze from './pages/Frieze'
import Rosette from './pages/Rosette'
import Wallpaper from './pages/Wallpaper'
import Compilation from './pages/Compilation'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/reflection" element={<Reflection />}/>
          <Route path="/patterns/symmetry" element={<Symmetry />}/>
          <Route path="/patterns/tesselations" element={<Tesselations />}/>
          <Route path="/patterns/fractals" element={<Fractals />}/>
          <Route path="/patterns/fibonacci-sequence" element={<FibonacciSequence />}/>
          <Route path="/patterns/frieze" element={<Frieze />}/>
          <Route path="/patterns/rosette" element={<Rosette />}/>
          <Route path="/patterns/wallpaper" element={<Wallpaper />}/>
          <Route path="/patterns/compilation" element={<Compilation />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
