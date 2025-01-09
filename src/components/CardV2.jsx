import React from 'react'

export default function CardV2(props) {
  return (
    <div>
        <div class="card mb-3">
            <img src={props.img} class="card-img-top card-v2-img" alt={props.alt} />
            <div class="card-body">
                <h5 class="card-title">{props.dest}</h5>
                <p class="card-text">{props.desc}</p>
                <p class="card-text"><small class="text-muted">{props.date}</small></p>
            </div>
        </div>

    </div>
  )
}
