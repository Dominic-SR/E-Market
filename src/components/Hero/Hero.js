import React from 'react'
import Slider from "react-slick";
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/hero/vr.png'
import Image3 from '../../assets/hero/macbook.png'

const Hero = () => {

    const HeroData = [
        {
            id:1,
            img: Image1,
            subtitle: "Beats Solo",
            title: "Wireless",
            title2: "Headphone",
        },
        {
            id:2,
            img: Image2,
            subtitle: "Beats Solo",
            title: "Wireless",
            title2: "Virtual"
        },
        {
            id:3,
            img: Image3,
            subtitle: "Beats Solo",
            title: "Branded",
            title2: "Laptops"
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
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color'>
            <div className='container pb-8 sm:pb-0'>
            {/* Hero Section */}
            <Slider {...settings}>
                {HeroData.map((data)=>(
                    <div key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* Text Content Section */}
                            <div>
                                <h1>{data.subtitle}</h1>
                                <h1>{data.title}</h1>
                                <h1>{data.title2}</h1>
                                <div>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                            {/* Img Section */}
                            <div>
                                <div>
                                    <img src={data.img} alt="" 
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6pxrgpa(0,0,0,.4)]'/>
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

export default Hero