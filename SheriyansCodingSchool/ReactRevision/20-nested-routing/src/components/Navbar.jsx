import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='bg-yellow-700 flex justify-between p-8'>
      <h2 className='font-bold text-xl'>Myntra</h2>
      <div className='flex gap-8'>
        <Link to='/' className='hover:bg-yellow-800 focus:outline-2 active:scale-10 px-2 rounded-2xl'>Home</Link>
        <Link to='/about' className='hover:bg-yellow-800 focus:outline-2 px-2 rounded-2xl'>About</Link>
        <Link to='/products' className='hover:bg-yellow-800 focus:outline-2 px-2 rounded-2xl'>Products</Link>
        <Link to='/contact' className='hover:bg-yellow-800 focus:outline-2 px-2 rounded-2xl'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
