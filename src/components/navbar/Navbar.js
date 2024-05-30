import React from 'react'

function Navbar() {

  const MenuLinks =[
      {
        id: 1,
        name: "Home",
        link: "/#"
      },
      {
        id: 2,
        name: "Shop",
        link: "/#shop"
      },
      {
        id: 3,
        name: "About",
        link: "/#about"
      },
      {
        id: 4,
        name: "Blogs",
        link: "/#blogs"
      },

  ]

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative Z-40'>
      <div className='py-4'>
        <div className='container'>
          {/* Logo and Link Section */}
          <div className='flex items-center gap-4'>
            <a
            href='#'
            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
            >
              E Market
            </a>
            {/* Menu items */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {
                  MenuLinks.map((data, index) => (
                    <li>
                      <a href={data.link} className='inline-block px-4 font-semibold'>{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
            {/* Navbar Right section */}
        </div>
      </div>
    </div>
  )
}

export default Navbar