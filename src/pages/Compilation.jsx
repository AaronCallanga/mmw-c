import React from 'react'
import ts1 from '../assets/ts1.jpg'
import ts2 from '../assets/ts2.jpg'
import ts3 from '../assets/ts3.png'
import ts4 from '../assets/ts4.jpg'
import ts5 from '../assets/ts5.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.png'
import fs1 from '../assets/fs1.jpg'
import fs2 from '../assets/fs2.png'
import fs3 from '../assets/fs3.jpg'
import fs4 from '../assets/fs4.jpg'
import fs5 from '../assets/fs5.jpg'
import fr1 from '../assets/fr1.jpg'
import fr2 from '../assets/fr2.jpg'
import fr3 from '../assets/fr3.jpg'
import fr4 from '../assets/fr4.jpg'
import fr5 from '../assets/fr5.jpg'
import r1 from '../assets/r1.jpg'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.jpg'
import r4 from '../assets/r4.jpg'
import r5 from '../assets/r5.png'
import wp1 from '../assets/wp1.jpg'
import wp2 from '../assets/wp2.jpg'
import wp3 from '../assets/wp3.jpg'
import wp4 from '../assets/wp4.jpg'
import wp5 from '../assets/wp5.jpg'
import CardV3 from '../components/CardV3'

export default function Compilation() {
  const items = [
    {
      key: 1,
      img: ts1,
      alt: "pattern",
      destination: "Within The House",
      description: "The same circle pattern that is repeated all over the surface to fill all the gaps resembles Tesselation",
      date: "January 25, 2025"
    }, 
    {
      key: 2,
      img: ts2,
      alt: "pattern",
      destination: "Within The House",
      description: "Chessboard have a alternating dark and white color that fills all gaps",
      date: "January 30, 2025"
    }, 
    {
      key: 3,
      img: ts3,
      alt: "pattern",
      destination: "Within The House",
      description: "Tiles are literally refered as a tesselation because it occupies all space with repeating shapes",
      date: "January 25, 2025"
    },
    {
      key: 4,
      img: ts4,
      alt: "pattern",
      destination: "In The Yard",
      description: "The vein patterns under a leaf represent geometric shapes and it covers all the surface area",
      date: "January 25, 2025"
    },
    {
      key: 5,
      img: ts5,
      alt: "pattern",
      destination: "Quezon City",
      description: "The handwoven mat design also represents tesselation because of its repeating line and shapes, and also cover all the spaces",
      date: "January 25, 2025"
    },
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
      description: "Butterfly is one of the best example of symmetry because of its two wings",
      date: "January 11, 2025"
    }, 
    {
      key: 3,
      img: s3,
      alt: "pattern",
      destination: "Within The House",
      description: "Even fictional character like Jollibee also forms symettry because of the face structure",
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
    },
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
    },
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
    },
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
    },   
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
    },
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
    <div className='port-entry port-bg-com'>
      <h1 className='text-center home-h2'>Compilation</h1>
      <div className='comp-cont'>
        {items.map((item, index) => (
          <CardV3 
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
  );
}

