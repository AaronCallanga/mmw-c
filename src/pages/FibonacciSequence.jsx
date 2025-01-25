import React from 'react'
import fs1 from '../assets/fs1.jpg'
import fs2 from '../assets/fs2.png'
import fs3 from '../assets/fs3.jpg'
import fs4 from '../assets/fs4.jpg'
import fs5 from '../assets/fs5.jpg'
import CardV2 from '../components/CardV2'

export default function FibonacciSequence() {

  const items = [
    {
      key: 1,
      img: fs1,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 2,
      img: fs2,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: fs3,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 4,
      img: fs4,
      alt: "pattern",
      destination: "Quezon City",
      description: "Number of trunks",
      date: "January 30, 2025"
    },
    {
      key: 5,
      img: fs5,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-lin'>
      <h1 className='text-center home-h2'>Fibonacci Sequence</h1>
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
