import React from 'react'

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Beyond The Walls</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolio Entries
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Symmetry</a></li>
                    <li><a className="dropdown-item" href="#">Tesselations</a></li>
                    <li><a className="dropdown-item" href="#">Fractals</a></li>
                    <li><a className="dropdown-item" href="#">Fibonacci Sequence</a></li>
                    <li><a className="dropdown-item" href="#">Frieze</a></li>
                    <li><a className="dropdown-item" href="#">Rosette</a></li>
                    <li><a className="dropdown-item" href="#">Wallpaper</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Compilation</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Reflection</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
