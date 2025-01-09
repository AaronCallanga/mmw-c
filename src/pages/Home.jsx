import React from 'react'
import Pattern from '../assets/Pattern.jpg'
import Pattern2 from '../assets/Pattern2.avif'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <div className='home-page'>
        <div className='pic-home'>
          <img src={Pattern} className='home-pic'></img>
        </div>
        <div className='text-btn-home'>
          <p>inspiring sentence, See the patterns and complexities of this world!</p>
          <Link to="patterns/compilation"><button className='home-btn'>See the world</button></Link>
        </div>
      </div>

      <div className='car-cont'>
      <h2>A World Full of Patterns</h2>
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
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pattern2} className="d-block w-100 car-pic" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Pattern} className="d-block w-100 car-pic" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
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
