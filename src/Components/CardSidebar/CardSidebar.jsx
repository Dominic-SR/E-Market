import React from 'react'

const CardSidebar = ({cartItems,isCardOpen,setIsCardOpen}) => {
  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-20 transform transition-transform duration-300 ${isCardOpen? "translate-x-0":"translate-x-full"}`}>CardSidebar</div>
  )
}

export default CardSidebar