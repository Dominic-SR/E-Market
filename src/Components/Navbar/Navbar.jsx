import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-500 p-4 shaow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-serif font-normal'>E-Market</h1>
        <input type="text" placeholder='Search for smartphones' className='p-3 text-base bg-white rounded w-1/2 focus:outline-none' />
      </div>
    </nav>
  )
}

export default Navbar