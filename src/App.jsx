import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import productData from "./assets/products.json"
import ProductCard from './Components/ProductCard/ProductCard'
import CardSidebar from './Components/CardSidebar/CardSidebar'
function App() {
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState([Math.min(...productData.map((p)=>p.price)), Math.max(...productData.map((p)=>p.price))])
  const [selectedBrands, setSelectedBrand] = useState([])
  const [selectedRam, setSelectedRam] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const brands = [...new Set(productData.map((p)=>p.brand))].sort();

  const [cartItems, setCartItems] = useState([{
    "id": 3,
    "name": "iPhone 15 Pro Max",
    "brand": "Apple",
    "color": "Natural Titanium",
    "ram": 8,
    "storage": 512,
    "display": 6.7,
    "mrp": 88900,
    "price": 78000,
    "image": "https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    "id": 4,
    "name": "OnePlus 12R",
    "brand": "OnePlus",
    "color": "Iron Grey",
    "ram": 16,
    "storage": 256,
    "display": 6.78,
    "mrp": 45999,
    "price":35900,
    "image": "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg"
  }])
  const [isCardOpen, setIsCardOpen] = useState(false)

  const addToCard = (product) =>{}
  const removeCard = (id) =>{}
  const updatedQuatity = (id, quantity) =>{}

  const filterProducts = productData.filter((product)=>{
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()) || product.color.toLowerCase().includes(search.toLowerCase())

    const matchCheckBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)

    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchRam = selectedRam === null || product.ram === selectedRam;

    const matchStorage = selectedStorage === null || product.storage === selectedStorage;

    return matchesSearch && matchCheckBrand && matchPrice && matchRam && matchStorage;
  })
  return (
    <div>
      <Navbar 
        search={search}
        cartItems={cartItems}
        setSearch={setSearch} 
        setIsCardOpen={setIsCardOpen}
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
      <CardSidebar 
       cartItems={cartItems} 
       isCardOpen={isCardOpen} 
       setIsCardOpen={setIsCardOpen}
      />
    </div>
  )
}

export default App
