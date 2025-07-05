import React from 'react'

const CardSidebar = ({cartItems,isCardOpen,setIsCardOpen,updatedQuatity,removeFromCard}) => {
  console.log("card",cartItems);
  
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-20 transform transition-transform duration-300 ${isCardOpen? "translate-x-0":"translate-x-full"}`}>
      <div className='p-4 h-full flex flex-col'> 
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold text-red-500'>Your Card</h2>
          <button className='text-gray-600 hover:text-gray-800 font-bold text-2xl cursor-pointer' onClick={()=>setIsCardOpen(false)}>x</button>
        </div>

        
          {cartItems.length === 0 ?<p className='text-gray-600 text-center mt-10'>Your card is empty !</p>:<div className=''>
            {cartItems.map((item)=>(
              <div key={item.id} className='flex'>
                <img src={item.image} className='w-16 h-16 object-contain mr-4' />
                <div className="flex-1">
                  <h3 className='text-sm font-semibold'>{item.name}</h3>
                  <p className='text-xs text-gray-500'>₹ {item.price} x {item.quantity}</p>

                  <div className='flex items-center mt-1'>
                    <button className='px-2 py-1 bg-gray-200 rounded' onClick={()=>updatedQuatity(item.id, item.quantity - 1)}>-</button>
                    <span className='mx-2'>{item.quantity}</span>
                    <button className='px-2 py-1 bg-gray-200 rounded' onClick={()=>updatedQuatity(item.id, item.quantity + 1)}>+</button>

                    <button className='ml-4 text-red-400 hover:text-red-700' onClick={()=>removeFromCard(item.id)}>Remove</button>
                  </div>  
                </div>
              </div>
            ))}
            </div>}
      </div>
    </div>
  )
}

export default CardSidebar