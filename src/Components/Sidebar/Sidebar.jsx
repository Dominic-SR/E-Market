import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import productData from "../../assets/products.json"
const Sidebar = ({brands, priceRange, selectedBrands, setSelectedBrand, setPriceRange, selectedRam, setSelectedRam, selectedStorage, setSelectedStorage}) => {
  const ramOption = [...new Set(productData.map((p)=>p.ram))].sort((a,b)=> a - b)
  const storageOption = [...new Set(productData.map((p)=>p.storage))].sort((a,b)=> a - b)
  const minPrice = Math.min(...productData.map((p)=>(p.price)))
  const maxPrice = Math.max(...productData.map((p)=>(p.price)))

  return (
    <div className='w-64 bg-red-100 bg-grey-100 p-4 h-screen sticky top-16 overflow-y-auto shadow'>
      <GiHamburgerMenu 
        className='absolute h-8 w-2xs top-[-20px] z-20'
      />
      <h2 className='text-xl font-semibold text-red-500 mb-6'>Sidebar</h2>
      {/* Brand FIlter */}
      <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Brads</h3>
        {brands.map((brand)=>(
          <label key={brand} className='flex items-center mb-2 cursor-pointer'>
            <input 
            type='checkbox'
            value={selectedBrands.includes(brand)}
            onChange={()=>setSelectedBrand(selectedBrands.includes(brand)?selectedBrands.filter((b)=>b!==brand):[...selectedBrands,brand])} 
            className='mr-2 accent-red-500' 
            />
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </label>
        ))}
      </div>
      {/* Price Range */}
        <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Price Range</h3>
        <input 
        min={minPrice}
        max={maxPrice}
        value={priceRange[1]}
        onChange={(e)=>setPriceRange([minPrice,parseInt(e.target.value)])}
        type='range' 
        className='w-full accent-red-500' 
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹ {priceRange[0]}</span>
          <span>₹ {priceRange[1]}</span>
        </div>
      </div>
      {/* Ram  */}
      <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>RAM</h3>
        <select 
          value={selectedRam}
          onChange={(e)=>setSelectedRam(e.target.value?parseInt(e.target.value):null)}
          className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 p-2'>
          <option value="">All</option>
          {ramOption.map((ram)=>(
            <option key={ram} value={ram}>
              {ram} GB
            </option>
          ))}
        </select>
      </div>
      {/* Storage */}
         <div className="mb-6">
        <h3 className='text-red-500 font-medium mb-3'>Storage</h3>
        <select 
        value={selectedStorage}
        onChange={(e)=>setSelectedStorage(e.target.value?parseInt(e.target.value):null)}
        className='w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 p-2'>
          <option value="">All</option>
          {storageOption.map((storage)=>(
            <option key={storage} value={storage}>
              {storage}
            </option>
          ))}
        </select>
      </div>
      </div>
  )
}

export default Sidebar