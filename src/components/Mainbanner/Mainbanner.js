import React from 'react'
import Slider from "react-slick";
import Button from '../Shared/Button';

import HomeAppliances from "../../assets/mainbanner/home-appliances.png"
import SmartPhones from "../../assets/mainbanner/smartphones.png"
import Furniture from '../../assets/mainbanner/Furniture.png'

const Mainbanner = ({handlOrderPopup}) => {

    const HeroData = [ 
        {
            id:1,
            img: HomeAppliances,
            subtitle: "On Lowest",
            title: "EMI 45%",
            title2: "Appliances"
        },
        {
            id:2,
            img: SmartPhones,
            subtitle: "Latest Modal",
            title: "Branded",
            title2: "Smartphones"
        },
        {
            id:1,
            img: Furniture,
            subtitle: "Watter Proof",
            title: "Wooden",
            title2: "Furniture"
        }
    ]
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true

      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            {/* Hero Section */}
            <Slider {...settings}>
                {HeroData.map((data)=>(
                    <div key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 ml-2'>
                            {/* Text Content Section */}
                            <div className='flex flex-col justify-center gap-4 sm-pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true" 
                                className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className='text-5xl sm:text-5xl lg:text-7xl font-bold'>{data.title}</h1>
                                <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                <div
                                data-aos="fade-up"
                                data-aos-offset="0"
                                data-aos-duration="500"
                                data-aos-delay="300"
                                >
                                    <Button
                                        text="Shop Buy Category"
                                        bgColor="bg-primary"
                                        textColor="text-white"
                                        handler={handlOrderPopup}
                                    />
                                </div>
                            </div>
                            {/* Img Section */}
                            <div className='order-1 sm-order-2'>
                                <div
                                data-aos="zoom-in"
                                data-aos-once="true"
                                className='relative z-10'
                                >
                                    <img src={data.img} alt="" 
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6pxrgpa(0,0,0,.4)] relative z-40'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Mainbanner