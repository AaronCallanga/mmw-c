import React from 'react'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.png'
import CardV2 from '../components/CardV2'

export default function Fractals() {

  const items = [
    {
      key: 1,
      img: f1,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 2,
      img: f2,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: f3,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 4,
      img: f4,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 5,
      img: f5,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-cool'>
      <h1 className='text-center home-h2'>Fractals</h1>
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
