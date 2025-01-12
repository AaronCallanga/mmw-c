import React from 'react'

export default function CardV2(props) {
  return (
    <div>
        <div className="card mb-3">
            <img src={props.img} className="card-img-top card-v2-img" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.dest}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text"><small className="text-muted">{props.date}</small></p>
            </div>
        </div>

    </div>
  )
}
