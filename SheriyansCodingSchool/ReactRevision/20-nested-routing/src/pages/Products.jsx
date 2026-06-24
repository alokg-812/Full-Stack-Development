import React from 'react'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-8'>
        <Link className='text-xl font-semibold' to='/products/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/products/women'>Women</Link>
      </div>
      <h1>Product Page</h1>      
    </div>
  )
}

export default Products
