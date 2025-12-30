import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_black">
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-shadow-orange-400">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card