import React from 'react'
import wp1 from '../assets/wp1.jpg'
import wp2 from '../assets/wp2.jpg'
import wp3 from '../assets/wp3.jpg'
import wp4 from '../assets/wp4.jpg'
import wp5 from '../assets/wp5.jpg'
import CardV2 from '../components/CardV2'

export default function Wallpaper() {

  const items = [
    {
      key: 1,
      img: wp1,
      alt: "pattern",
      destination: "Within The House",
      description: "The bedsheet forms a two dimensional design and is considered as a wallpaper pattern",
      date: "January 30, 2025"
    }, 
    {
      key: 2,
      img: wp2,
      alt: "pattern",
      destination: "Bathroom",
      description: "The different design in tiles are commonly considered as a wallpaper pattern ",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: wp3,
      alt: "pattern",
      destination: "Within The House",
      description: "The design of this Handkerchief also forms a wallpaper pattern repeating its design in two direction",
      date: "January 25, 2025"
    },
    {
      key: 4,
      img: wp4,
      alt: "pattern",
      destination: "Within The House",
      description: "The design of the bag looks like a chessboard which also forms wallpaper pattern",
      date: "January 30, 2025"
    },
    {
      key: 5,
      img: wp5,
      alt: "pattern",
      destination: "Brother's Room",
      description: "The brick-wall design forms the pattern because it can be look at different direction",
      date: "January 30, 2025"
    }
  ]
    
  

  return (
    <div className='port-entry port-bg-lin'>
      <h1 className='text-center home-h2'>Wallpaper</h1>
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
