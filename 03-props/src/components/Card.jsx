import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
      <img
        src={props.img}
        alt=""
      />
      <h1>{props.user}, {props.age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        aliquam nemo totam? Quo tenetur veritatis delectus ullam omnis nisi
        autem.
      </p>
      <button>View More</button>
    </div>
  )
}

export default Card