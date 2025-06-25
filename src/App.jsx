import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import productData from "./assets/products.json"
function App() {
  const brands = [...new Set(productData.map((p)=>p.brand))].sort();
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar brands={brands} />
      </div>
    </div>
  )
}

export default App
