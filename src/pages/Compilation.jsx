import React from 'react'
import Pattern from '../assets/Pattern.jpg'
import Card from '../components/Card'

export default function Compilation() {
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
      key: 2,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    },
    {
      key: 4,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }, 
    {
      key: 5,
      img: Pattern,
      alt: "pattern",
      destination: "Quezon City",
      description: "example description",
      date: "January 30, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-com'>
      <h1 className='text-center home-h2'>Compilation</h1>
      <div className='comp-cont'>
        {items.map((item, index) => (
          <Card 
          key = {index}
          img = {item.img}
          alt = {item.alt}
          destination = {item.destination}
          description = {item.description}
          date = {item.date}
          />
        ))}
      </div>
    </div>
  )
}

