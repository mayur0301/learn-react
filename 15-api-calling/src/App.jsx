import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  
  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }
  
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  //   const data = await response.json()
  //   console.log(data); 
  // }

  const [data, setdata] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
  }

  return (
    <div>
    <button onClick={getData}>get</button>
    <div>
      {data.map(function(elem, idx){
        return <h3>Hello, {elem.author} {idx} </h3>  
      })}
    </div>
    </div>
  )
}

export default App