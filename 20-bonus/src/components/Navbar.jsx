import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button onClick={()=>{
            props.setTheme('Dark')
        }}>Chnage Theme</button>
    </div>
  )
}

export default Navbar