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
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />
  };

 


  return (
    <div className='container mx-auto py-8'>
      <Title>Kampanyalar</Title>
        <Slider {...settings} className='-mx-2' >
        {banners.length && banners.map((banner, index)=>(
          <div key={banner.id}>
            <picture className='block px-2'>
              <img src={banner.image} alt="banner-logo" className='rounded' />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Campaigns