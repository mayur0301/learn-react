import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-pink-700 justify-between'>
        <h2 className='text-2xl font-bold'>Mayur</h2>
        <div className='flex gap-10'>
            <Link to="/" className='text-lg font-bold'>Home</Link>
            <NavLink to="/about" className='text-lg font-bold'>About</NavLink>
            <Link to="/courses" className='text-lg font-bold'>Courses</Link>
            <Link to="/product" className='text-lg font-bold'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar