import React, { useEffect, useState } from 'react'
import lightButton from '../../assets/website/light-mode-button.png';
import darkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light'
    )

    const element = document.documentElement; 

    // set theme localstorage to html element
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme === 'dark'){
          element.classList.add('dark')
          element.classList.add('dark')
        }
        else{
          element.classList.remove('light')
          element.classList.remove('dark')
        }
    })
  return (
    <div className='relative'>
        <img src={lightButton} alt='' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`} />
        <img src={darkButton} alt='' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} className={`w-12 cursor-pointer`} />
    </div>
  )
}

export default DarkMode