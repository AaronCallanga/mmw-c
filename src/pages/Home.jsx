import React from 'react'
import Pattern from '../assets/Pattern.jpg'
import Fractals from '../assets/Fractals-1.jpg'
import Pattern2 from '../assets/Pattern2.avif'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <div>
        <img className="pic-home home-pic"src={Fractals}/>
      </div>
      <div className='home-page'>
        <div className='text-btn-home'>
          <p>"The universe cannot be read until we have learned the language and become familiar with the characters in which it is written. It is written in the language of mathematics, and its characters are triangles, circles, and other geometrical figures." </p>
          <p>— Galileo Galilei</p>
          <Link to="patterns/compilation"><button className='home-btn'>See the world</button></Link>
        </div>
      </div>

      <div className='car-cont'>
      <h2 className='home-h2 text-center'>A World Full of Patterns</h2>
        <div id="carouselExampleCaptions" className="carousel slide carousel-container" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Pattern} className="d-block w-100 car-pic" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Endless Possibilities</h5>
                <p>Discover the infinite ways patterns emerge and evolve, 
                  showcasing the boundless creativity and structure inherent 
                  in nature, art, and mathematics.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pattern2} className="d-block w-100 car-pic" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Mathematical Beauty</h5>
                <p>Explore the fascinating intersection of the world, and 
                  mathematics, where symmetry, fractals, and all the
                  other mathematical concepts create awe-inspiring designs.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pattern} className="d-block w-100 car-pic" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Beauty of Order</h5>
                <p>Experience the beauty of order in chaos, 
                  where mathematical patterns bring clarity 
                  and beauty to our surroundings and our understanding of the universe.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
