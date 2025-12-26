// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [user, setuser] = useState('Raju')
//   const [a, seta] = useState(10)
//   const [arr, setarr] = useState([10,20,30])
//   function change() {
//     setuser('Mayur');
//     seta(40);
//     setarr([50,60,70]);
//   }

//   return (
//     <div>
//       <h1>Hooks use 1st is useState <br />
//       User is {user} <br />
//       Value is {a} <br />
//       Array is {arr}
//       </h1>
//       <button onClick={change}>Click Me !</button>
//     </div>
//   )
// }

// export default App






import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increasenum() {
    setNum(num+1);
  }
  function decreasenum () {
    setNum(num-1);
  }
  function jumpNum () {
    setNum(num+5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
    <button onClick={jumpNum}>Jump by 5</button>
    </div>
  )
}

export default App