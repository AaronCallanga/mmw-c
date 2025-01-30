import React from 'react'
import fr1 from '../assets/fr1.jpg'
import fr2 from '../assets/fr2.jpg'
import fr3 from '../assets/fr3.jpg'
import fr4 from '../assets/fr4.jpg'
import fr5 from '../assets/fr5.jpg'
import CardV2 from '../components/CardV2'

export default function Frieze() {

  const items = [
    {
      key: 1,
      img: fr1,
      alt: "pattern",
      destination: "Within The House",
      description: "The window grills in our house forms in one direction creating a frieze pattern",
      date: "January 28, 2025"
    }, 
    {
      key: 2,
      img: fr2,
      alt: "pattern",
      destination: "Within The House",
      description: "The carving in the chair also forms frieze because of its design that forms in one direction",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: fr3,
      alt: "pattern",
      destination: "Within The House",
      description: "Chains are also great example of frieze because it shows a one directional pattern",
      date: "January 30, 2025"
    },
    {
      key: 4,
      img: fr4,
      alt: "pattern",
      destination: "In The Yard",
      description: "The trunk of the papaya tree grows upward forming frieze pattern",
      date: "January 30, 2025"
    },
    {
      key: 5,
      img: fr5,
      alt: "pattern",
      destination: "Within The House",
      description: "Commonly the design in table built with narra woods also forms the one direction pattern",
      date: "January 11, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-warm'>
      <h1 className='text-center home-h2'>Frieze</h1>
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
