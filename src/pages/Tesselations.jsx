import React from 'react'
import ts1 from '../assets/ts1.jpg'
import ts2 from '../assets/ts2.jpg'
import ts3 from '../assets/ts3.png'
import ts4 from '../assets/ts4.jpg'
import ts5 from '../assets/ts5.jpg'
import CardV2 from '../components/CardV2'

export default function Tesselations() {
//date it was taken
// place where it was taken
// a brief description for each that explains the mathematical concepts or patterns present
  const items = [
    {
      key: 1,
      img: ts1,
      alt: "pattern",
      destination: "Within The House",
      description: "The same circle pattern that is repeated all over the surface to fill all the gaps resembles Tesselation",
      date: "January 25, 2025"
    }, 
    {
      key: 2,
      img: ts2,
      alt: "pattern",
      destination: "Within The House",
      description: "Chessboard have an alternating dark and white color that fills all gaps making it a Tesselation pattern",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: ts3,
      alt: "pattern",
      destination: "Within The House",
      description: "Tiles are literally refered as a tesselation because it occupies all space with repeating shapes",
      date: "January 25, 2025"
    },
    {
      key: 4,
      img: ts4,
      alt: "pattern",
      destination: "In The Yard",
      description: "The vein patterns under a leaf represent geometric shapes and it covers all the surface area",
      date: "January 25, 2025"
    },
    {
      key: 5,
      img: ts5,
      alt: "pattern",
      destination: "Quezon City",
      description: "The handwoven mat design also represents tesselation because of its repeating line and shapes, and also cover all the spaces",
      date: "January 25, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-lin'>
      <h1 className='text-center home-h2'>Tesselations</h1>
      <div className='fib-cont'>
        {items.map((item, index) => (
          <CardV2 
          key = {index}
          img = {item.img}
          alt = {item.alt}
          dest = {item.destination}
          desc = {item.description}
          date = {item.date}
          />
        ))}
      </div>
    </div>
  )
}
