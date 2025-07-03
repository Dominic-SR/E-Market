import React from 'react'

const CardSidebar = ({cartItems,isCardOpen,setIsCardOpen}) => {
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-20 transform transition-transform duration-300 ${isCardOpen? "translate-x-0":"translate-x-full"}`}>
      <div className='p-4 h-full flex flex-col'> 
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold text-red-500'>Your Card</h2>
          <button className='text-gray-600 hover:text-gray-800 font-bold text-2xl cursor-pointer' onClick={()=>setIsCardOpen(false)}>x</button>

          {cartItems.length === 0 ?<p className='text-gray-600 text-center mt-10'>Your card is empty !</p>:''}
        </div>
      </div>
    </div>
  )
}

export default CardSidebar