import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Reflection from './pages/Reflection';
import Symmetry from './pages/Symmetry';
import Tesselations from './pages/Tesselations';
import Fractals from './pages/Fractals';
import FibonacciSequence from './pages/FibonacciSequence';
import Frieze from './pages/Frieze';
import Rosette from './pages/Rosette';
import Wallpaper from './pages/Wallpaper';
import Compilation from './pages/Compilation';
import AboutMe from './pages/AboutMe';
import { useRef } from 'react';

function App() {
  const aboutMeRef = useRef(null);  
  // we separate it because useLocation needs its component to be wrapped around Router
  return (
    <Router>
      <InnerApp aboutMeRef={aboutMeRef} />  
    </Router>
  );
}

function InnerApp({ aboutMeRef }) {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/'; // checks current url, return boolean

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} aboutMeRef={aboutMeRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/patterns/symmetry" element={<Symmetry />} />
        <Route path="/patterns/tesselations" element={<Tesselations />} />
        <Route path="/patterns/fractals" element={<Fractals />} />
        <Route path="/patterns/fibonacci-sequence" element={<FibonacciSequence />} />
        <Route path="/patterns/frieze" element={<Frieze />} />
        <Route path="/patterns/rosette" element={<Rosette />} />
        <Route path="/patterns/wallpaper" element={<Wallpaper />} />
        <Route path="/patterns/compilation" element={<Compilation />} />
      </Routes>

      {isHomePage && <AboutMe ref={aboutMeRef} />}
      <Footer/>
    </>
  );
}

export default App;
