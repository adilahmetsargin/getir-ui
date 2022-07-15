/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const MobileApp = () => {
  return (
    <div className='bg-brand-color bg-mobile-app flex flex-col md:flex-row justify-between items-center md:rounded-lg text-white'>
      <div className='flex flex-col gap-y-3 p-10 text-center md:text-left'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indirin!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim</p>
        <nav className='flex flex-wrap md:flex-nowrap justify-center gap-2 mt-5'>
          <a href="/" className='transition-all transform hover:scale-105'>
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="app-store-icon" />
          </a>
          <a href="/" className='transition-all transform hover:scale-105'>
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="play-store-icon" />
          </a>
          <a href="/" className='transition-all transform hover:scale-105'>
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="app-gallery-icon" />
          </a>
        </nav>
      </div>
      <picture className='pt-6 md:self-end'>
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
      </picture>
    </div>
  )
}

export default MobileApp