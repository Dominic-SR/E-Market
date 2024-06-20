import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* first col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='mb-4'>
                    <div>
                        <p className='mb=[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20'>Earphone</p>
                        <Button 
                            text="Browse"
                            bgColor={"bg-primary"}
                            texColor={"text-white"}
                        />
                    </div>
                </div>
                <img src={Image1} alt='' className='w-[320px] absolute bottom-0' />
            </div>
            {/* second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='mb-4'>
                    <div>
                        <p className='mb=[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20'>Earphone</p>
                        <Button 
                            text="Browse"
                            bgColor={"bg-primary"}
                            texColor={"text-white"}
                        />
                    </div>
                </div>
                <img src={Image2} alt='' className='w-[320px] absolute -right-4 lg:top-[40px]' />
            </div>
            {/* third col */}
            </div>
        </div>
    </div>
  )
}

export default Category