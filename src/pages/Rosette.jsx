import React from 'react'
import r1 from '../assets/r1.jpg'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.jpg'
import r4 from '../assets/r4.jpg'
import r5 from '../assets/r5.png'
import CardV2 from '../components/CardV2'

export default function Rosette() {

  const items = [
    {
      key: 1,
      img: r1,
      alt: "pattern",
      destination: "Within The House",
      description: "The lamp forms a rosette pattern because of its symmetrical translation",
      date: "January 26 2025"
    }, 
    {
      key: 2,
      img: r2,
      alt: "pattern",
      destination: "Within The House",
      description: "Clocks are one of the most frequent examples that shows the formation of rosette pattern",
      date: "January 26, 2025"
    }, 
    {
      key: 3,
      img: r3,
      alt: "pattern",
      destination: "Within The House",
      description: "The rag forms translation symettry and is considered as a rosette pattern",
      date: "January 26, 2025"
    },
    {
      key: 4,
      img: r4,
      alt: "pattern",
      destination: "Within The House",
      description: "Flowers that has circular pattern or structure forms a rosette pattern",
      date: "January 26, 2025"
    },
    {
      key: 5,
      img: r5,
      alt: "pattern",
      destination: "Outside The House",
      description: "The design in the tiles also forms rosette pattern because you can rotate it and still looks the same",
      date: "January 11, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-cool'>
      <h1 className='text-center home-h2'>Rosette</h1>
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
