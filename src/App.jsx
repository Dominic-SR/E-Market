import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import productData from "./assets/products.json"
import ProductCard from './Components/ProductCard/ProductCard'
function App() {
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState([Math.min(...productData.map((p)=>p.mrp)), Math.max(...productData.map((p)=>p.mrp))])
  const [selectedBrands, setSelectedBrand] = useState([])
  const [selectedRam, setSelectedRam] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const brands = [...new Set(productData.map((p)=>p.brand))].sort();
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
        <div className='flex-1'>
          <div className='p-4'>

          </div>
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default App
