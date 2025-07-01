import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white shadow p-4 hover:shadow-xl transition-all duration-200'>
        <img src={product.image}
         className='w-full h-48 object-contain mb-4'
         alt={product.name}/>
        <h3 className='text-lg font-semibold mb-2 text-red-500'>{product.name}</h3>
        <p className='text-gray-500 mb-2'>{product.brand} | {product.color}</p>
        <p className='text-gray-500 mb-2'>{product.ram} Ram | {product.storage} Storage</p>
        <p className='text-gray-500 mb-4'>{product.display} Inch Display</p>
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-xl font-bold text-red-500 '>₹ {product.price}</p>
                <p className='text-sm text-gray-500 line-through'>₹ {product.mrp}</p>
            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard