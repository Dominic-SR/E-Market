import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
        title:"How to choose Perfect SmartWatch",
        subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published:"Jan 20, 2024 by Dilshad",
        image: Img1
    },
    {
        title:"How to choose Perfect Gadget",
        subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published:"Jan 20, 2024 by Dilshad",
        image: Img2
    },
    {
        title:"How to choose Perfect VR Headset",
        subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published:"Jan 20, 2024 by Dilshad",
        image: Img3
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            {/* Heading section */}
            <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />

            {/* Blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/* Blog Card */}
                {BlogData.map((data)=>(
                    <div className='bg-white dark:bg-gray-900'>
                        {/* Image section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                        </div>
                        {/* Content Section */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>
                            {data.title}
                            </p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>
                            {data.subtitle}
                            </p>
                        </div>    
                    </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs