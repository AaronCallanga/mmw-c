import React from 'react'

export default function CardV3(props) {
  return (

    <div className="card-v3">
        <div className='img-v3-cont'>
        <img src={props.img} alt={props.alt} />
        </div>
        <div className="card-v3-content">
            <div className="card-v3-title">{props.destination}</div>
            <div className="card-v3-description">
            {props.description}
            </div>
            <div className="card-v3-date">{props.date}</div>
        </div>
    </div>


  )
}
