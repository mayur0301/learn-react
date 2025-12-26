import React from 'react'

const App = () => {

  localStorage.setItem('user','Mayur');
  localStorage.setItem('age','21');
  localStorage.clear()
  const user = {
    username:'Mayur',
    age:21,
    city:'GOA'
  }
  localStorage.setItem('user',JSON.stringify(user))


  return (
    <div>App</div>
  )
}

export default App