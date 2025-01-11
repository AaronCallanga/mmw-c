import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export default function Header({ scrollToSection, aboutMeRef }) {
  const [showHeader, setShowHeader] = useState(true);  // Act as a class name
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Scroll down, hide header
      } else {
        setShowHeader(true); // Scroll up, show header
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, [lastScrollY]);

  return (
    <>
      <div className={`header-wrapper ${showHeader ? 'visible' : 'hidden'}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand ms-4 fw-bold fs-4 f-style-2" to="/">
              Beyond The Walls
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item px-5 fw-bold">
                  <Link className="nav-link active f-style-1" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown px-5">
                  <a
                    className="nav-link dropdown-toggle fw-bold f-style-1"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Portfolio Entries
                  </a>
                  <ul className="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/tesselations">Tesselations</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/symmetry">Symmetry</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/fractals">Fractals</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/fibonacci-sequence">Fibonacci Sequence</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/frieze">Frieze</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/rosette">Rosette</Link></li>
                    <li><Link className="dropdown-item px-5 text-center" to="patterns/wallpaper">Wallpaper</Link></li>
                    <li><hr className='dropdown-divider'></hr></li>
                    <li><Link className="dropdown-item px-5 text-center mb-2" to="patterns/compilation">Compilation</Link></li>
                  </ul>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" to="gallery">Gallery</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" to="reflection">Reflection</Link>
                </li>
                <li className="nav-item px-5">
                  { isHomePage ?                
                    <button className="nav-link active fw-bold f-style-1" aria-current="page" onClick={() => scrollToSection(aboutMeRef)} >
                    About me
                  </button> : 
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" to="/">
                    About me
                  </Link>
                  }

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
