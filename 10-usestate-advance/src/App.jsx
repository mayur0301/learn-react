import React, { useState } from 'react'

const App = () => {
  // const [Num, setNum] = useState({user:'mayur', age:21})
  const [Num, setNum] = useState([10,25,24,68,52])
  const btn = () => {
    // const newNum = {...Num};
    // console.log(newNum);
    // newNum.user = 'Raj'
    // console.log(newNum);
    // setNum(newNum);
    const newNum = [...Num];
    newNum.push(76)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={btn}>click</button>
    </div>
  )
}

export default App