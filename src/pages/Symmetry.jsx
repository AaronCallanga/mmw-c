import React from 'react'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import CardV2 from '../components/CardV2'

export default function Symmetry() {

  const items = [
    {
      key: 1,
      img: s1,
      alt: "pattern",
      destination: "School Laboratory",
      description: "The petals around the center of the flower forms a symmetry",
      date: "February 13, 2024"
    }, 
    {
      key: 2,
      img: s2,
      alt: "pattern",
      destination: "Within The House",
      description: "Butterfly is one of the best example of symmetry because of its two wings, making each side the same",
      date: "January 11, 2025"
    }, 
    {
      key: 3,
      img: s3,
      alt: "pattern",
      destination: "Within The House",
      description: "Even fictional character like Jollibee also forms symettry because of its own face structure",
      date: "January 25, 2025"
    },
    {
      key: 4,
      img: s4,
      alt: "pattern",
      destination: "Within The House",
      description: "The face of my beloved dog is considered as symettry because of the detail of its face like with Jollibee",
      date: "January 25, 2025"
    },
    {
      key: 5,
      img: s5,
      alt: "pattern",
      destination: "Within The House",
      description: "An orange also forms symettry because of its circular shape",
      date: "January 25, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-warm'>
      <h1 className='text-center home-h2'>Symmetry</h1>
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
