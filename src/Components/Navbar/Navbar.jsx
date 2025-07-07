import React from 'react'
const Navbar = ({search, setSearch, cartItems ,setIsCardOpen}) => {
  
  const totalItems = cartItems.length; 
 console.log("PPPP",totalItems);
 
  return (
    <nav className='bg-red-500 p-4 shaow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-serif font-normal'>E-Market</h1>
        <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
        placeholder='Search for smartphones' 
        className='p-3 text-base bg-white rounded w-1/2 focus:outline-none' />'
        
        {totalItems > 0 && <button className='relative text-red-500 text-3xl' onClick={()=>setIsCardOpen((prev)=>!prev)}>🛒<span className="absolute -top-2 right-2 bg-white px-2 py-1 rounded-full text-sm">{totalItems}</span></button>}
      </div>
    </nav>
  )
}

export default Navbar