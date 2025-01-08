import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <Link className="navbar-brand ms-4 fw-bold fs-4 f-style-2" href="#" to="/">Beyond The Walls</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ">
                <li className="nav-item px-5 fw-bold">
                  <Link className="nav-link active f-style-1 " aria-current="page" href="#" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown px-5">
                  <a className="nav-link dropdown-toggle fw-bold f-style-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolio Entries
                  </a>
                  <ul className="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/symmetry">Symmetry</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/tesselations">Tesselations</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/fractals">Fractals</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/fibonacci-sequence">Fibonacci Sequence</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/frieze">Frieze</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/rosette">Rosette</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-secondary" href="#" to="patterns/wallpaper">Wallpaper</Link></li>
                    <li><Link className="dropdown-item px-5 text-center fw-bold text-warning bg-dark bg-gradient py-2" href="#" to="patterns/compilation">Compilation</Link></li>
                  </ul>
                </li>
                <li className="nav-ite px-5">
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" href="#" to="gallery">Gallery</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" href="#" to="reflection">Reflection</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link active fw-bold f-style-1" aria-current="page" href="#" to="about-me">About me</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
