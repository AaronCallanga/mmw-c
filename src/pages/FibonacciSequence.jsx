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
      destination: "Flower Shop",
      description: "The number of the sunflower seed forms fibonacci sequence",
      date: "December 10, 2024"
    }, 
    {
      key: 2,
      img: fs2,
      alt: "pattern",
      destination: "School Laboratory",
      description: "The petals starting from the center of a rose also forms a fibonacci sequence",
      date: "February 13, 2024"
    }, 
    {
      key: 3,
      img: fs3,
      alt: "pattern",
      destination: "School Laboratory",
      description: "The structure look and the number of a so-called the \"eye\" of the pineapple forms the pattern",
      date: "February 13, 2024"
    },
    {
      key: 4,
      img: fs4,
      alt: "pattern",
      destination: "UP Diliman",
      description: "The number of trunks and branches of a tree may frequently form a fibonacci sequence",
      date: "November 21, 2024"
    },
    {
      key: 5,
      img: fs5,
      alt: "pattern",
      destination: "Within The House",
      description: "The structure of this metal pine cone in an architecture also represents fibonacci sequence",
      date: "January 11, 2025"
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
