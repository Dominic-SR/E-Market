import React from 'react'
import { FaFacebook, FaLinkedinIn, FaMobileAlt } from 'react-icons/fa'
import { FaInstagram, FaLocationArrow } from 'react-icons/fa6'

const FooterLink = [
  {
    title:"Home",
    link:"/#"
  },
  {
    title:"About",
    link:"/#about"
  },
  {
    title:"Contact",
    link:"/#contact"
  },
  {
    title:"Blog",
    link:"/#blog"
  }

]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
            {/* COMPANY DETAILS */}
            <div className='py-8 px-4'>
              <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-2xl'>
              E Market
              </a>
              <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                Loream ispum Loream ispum Loream ispum Loream ispum Loream ispum Loream ispum
              </p>
              <p className='text-gray-500 mt-4'>
                Made with by the code
              </p>
              <a href="#" className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit Profile</a>
            </div>

            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Link</h1>
                <ul className='space-y-3'>
                  {
                    FooterLink.map((data, index) =>(
                      <li key={index}>
                          <a href={data.link}
                          className='text-gray-600 hover:dark:text-white
                          hover:text-black duration-300'
                          >
                            {data.title}
                          </a>
                      </li>
                      )
                    )
                  }
                </ul>
              </div>

              {/* Second col link */}
              <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Link</h1>
                <ul className='space-y-3'>
                  {
                    FooterLink.map((data, index) =>(
                      <li key={index}>
                          <a href={data.link}
                          className='text-gray-600 hover:dark:text-white
                          hover:text-black duration-300'
                          >
                            {data.title}
                          </a>
                      </li>
                      )
                    )
                  }
                </ul>
              </div>


            {/* Company Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Link</h1>
                <div>
                  <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>Banglore, Karnataka</p>
                  </div>
                  <div className='flex items-center gap-3 mt-6'>
                    <FaMobileAlt />
                    <p>+91 9876543210</p>
                  </div>

                  {/* Social links */}
                  <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                      <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>

                    <a href='#'>
                      <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>

                    <a href='#'>
                      <FaLinkedinIn className='text-3xl hover:text-primary duration-300'/>
                    </a>
                  </div>

                </div>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer