import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import productData from "./assets/products.json"
import ProductCard from './Components/ProductCard/ProductCard'
function App() {
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState([Math.min(...productData.map((p)=>p.price)), Math.max(...productData.map((p)=>p.price))])
  const [selectedBrands, setSelectedBrand] = useState([])
  const [selectedRam, setSelectedRam] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const brands = [...new Set(productData.map((p)=>p.brand))].sort();

  const filterProducts = productData.filter((product)=>{
    
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()) || product.color.toLowerCase().includes(search.toLowerCase())
    return matchesSearch;
  })
  return (
    <div>
      <Navbar 
        search={search}
        setSearch={setSearch}
      />
      <div className='flex'>
        <Sidebar 
          brands={brands} 
          selectedBrands={selectedBrands} 
          setSelectedBrand={setSelectedBrand}
          priceRange={priceRange} 
          setPriceRange = {setPriceRange}
          selectedRam={selectedRam}
          setSelectedRam={setSelectedRam}
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
        />
        <div className='flex-1 bg-red-50'>
        <div className='max-w-7xl mx-auto p-4'>
          <h2 className='text-2xl font-bold text-red-500 p-4'>Products ({productData.length})</h2>
          {productData.length == 0 ?(
            <p className='text-center text-gray-600'>No product found match you creteria.</p>
          ):(
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filterProducts.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
          )}
          

        </div>
        </div>
      </div>
    </div>
  )
}

export default App
