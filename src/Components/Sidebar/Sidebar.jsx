import React from 'react'
import productData from "../../assets/products.json"
const Sidebar = ({brands}) => {
    const ramOption = [...new Set(productData.map((p)=>p.ram))].sort((a,b)=> a - b)
  const storageOption = [...new Set(productData.map((p)=>p.ram))].sort((a,b)=> a - b)
  return (
    <div className='w-64 bg-grey-100 p-4 h-screen sticky top-16 overflow-y-auto shadow'>
      <h2 className='text-xl font-semibold text-red-500 mb-6'>Sidebar</h2>
      {/* Brand FIlter */}
      <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Brads</h3>

        {brands.map((brand)=>(
          <label className='flex items-center mb-2 cursor-pointer'>
            <input type='checkbox' className='mr-2 accent-red-500' />
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </label>
        ))}
      </div>
      {/* Price Range */}
        <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Price Range</h3>
        <input type='range' className='w-full accent-red-500' />
        <div className="flex justify-between text-sm mt-2">
          <span>₹ 4500</span>
          <span>₹ 10000</span>
        </div>
      </div>
      {/* Ram  */}
      <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>RAM</h3>
        <select className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 p-2'>
          <option value="">All</option>
          {ramOption.map((ram)=>(
            <option key={ram} value={ram}>
              {ram}
            </option>
          ))}
        </select>
      </div>
      {/* Storage */}
         <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Storage</h3>
        <select className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 p-2'>
          <option value="">All</option>
          {storageOption.map((ram)=>(
            <option key={ram} value={ram}>
              {ram}
            </option>
          ))}
        </select>
      </div>
      </div>
  )
}

export default Sidebar