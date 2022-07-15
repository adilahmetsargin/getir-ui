import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from '../api/banners.json'
import Title from './ui/Title';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const Campaigns = () => {
  const [banners, setBanners] = useState([])



  useEffect(() => {
    setBanners(Banners)
  }, [])

  const NextButton=({onClick})=>{
    return <button className='absolute text-brand-color top-1/2 -right-6 -translate-y-1/2'  onClick={onClick}> <IoIosArrowForward /></button>
}
const PrevButton=({onClick})=>{
    return <button className='absolute text-brand-color top-1/2 -left-6 -translate-y-1/2' onClick={onClick}> <IoIosArrowBack /></button>
}

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive:[
      {
        breakpoint: 1280,
        settings:{
          slidesToShow: 3, 
          arrows:false,
        }
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2, 
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1, 
          arrows:false,
        }
      }
    ]
  };

 


  return (
    <div className='container mx-auto md:pt-8'>
        <div className='hidden md:block'>
      <Title>Kampanyalar</Title>

        </div>
        <Slider {...settings} className='md:-mx-2' >
        {banners.length && banners.map((banner)=>(
          <div key={banner.id}>
            <picture className='block md:px-2'>
              <img src={banner.image} alt="banner-logo" className='md:rounded' />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Campaigns