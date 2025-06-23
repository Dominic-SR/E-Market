import { useState } from 'react'
import './App.css'
import productData from "./assets/products.json"
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
