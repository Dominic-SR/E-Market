import React from 'react'

const ProductCard = () => {
  return (
    <div className='bg-white shadow p-4 hover:shadow-xl transition-all duration-200'>
        <img src='https://m.media-amazon.com/images/I/41o5rDVpGJL._SX300_SY300_QL70_FMwebp_.jpg'
         className='w-full h-48 object-contain mb-4'
         alt='product'/>
        <h3 className='text-lg font-semibold mb-2 text-red-500'>Product Name</h3>
        <p className='text-gray-500 mb-2'>Redmi | Blue</p>
        <p className='text-gray-500 mb-2'>8GB Ram | 256GB Storage</p>
        <p className='text-gray-500 mb-4'>6.7 Inch Display</p>
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-xl font-bold text-red-500 '>₹ 8999</p>
                <p className='text-sm text-gray-500 line-through'>₹ 12000</p>
            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard