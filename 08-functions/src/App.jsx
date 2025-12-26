import React from 'react'

const App = () => {

  // function btnClick() {
  //   console.log('i am button');
    
  // }

  function input(val) {
    console.log(val);
    
  }

  return (
    <div>
      {/* <button onClick={btnClick}>Click me</button> */}

      <input onChange={function(elem) {
        input(elem.target.value)
      }} type="text" placeholder='Enter bitch' />
    </div>
  )
}

export default App