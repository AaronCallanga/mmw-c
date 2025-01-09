import React from 'react'
import Pattern from '../assets/Pattern.jpg'
import CardV2 from '../components/CardV2'

export default function FibonacciSequence() {

  const items = [
    {
      key: 1,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 1,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 1,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 1,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 1,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }
  ]
    
  

  return (
    <div className='fib-cont'>
      {items.map((item) => (
        <CardV2 
        img = {item.img}
        alt = {item.alt}
        dest = {item.destination}
        desc = {item.description}
        date = {item.date}
        />
      ))}
    </div>
  )
}
