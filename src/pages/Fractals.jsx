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
      destination: "School Laboratory",
      description: "The leaves and the branching pattern of the plants represents fractals pattern",
      date: "Feb 13, 2024"
    }, 
    {
      key: 2,
      img: f2,
      alt: "pattern",
      destination: "Terrace",
      description: "The cloud is one of the most common examples of fractals because of its formation",
      date: "January 25, 2025"
    }, 
    {
      key: 3,
      img: f3,
      alt: "pattern",
      destination: "Within The House",
      description: "Malunggay leaves represents fractals because of how the branches shrinks continously",
      date: "January 25, 2025"
    },
    {
      key: 4,
      img: f4,
      alt: "pattern",
      destination: "Within The House",
      description: "The leaves of the plant shrinks like the malunggay leaves and forms fractals",
      date: "January 25, 2025"
    },
    {
      key: 5,
      img: f5,
      alt: "pattern",
      destination: "Within The House",
      description: "The indefinite surface of the stone forms fractals pattern because it looks the same even in different scale",
      date: "January 11, 2025"
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
