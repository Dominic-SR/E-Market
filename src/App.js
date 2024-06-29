import React, { useMemo } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'

import headphone from './assets/hero/headphone.png';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jam to 28 Jan",
  image: headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Loream ispum dolar sit amet cosecture",
  bgColor:"#f42c37"
}

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jam to 28 Jan",
  image: smartwatch2,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4:"Loream ispum dolar sit amet cosecture",
  bgColor:"#2dcc6f"
}

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
    </div>
  )
}

export default App