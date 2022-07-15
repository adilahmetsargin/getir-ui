import React, { useEffect, useState } from 'react'
import cardsData from '../api/cards.json'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  }, [])
  


  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4'>
      {cards.length && cards.map((card,key)=>(
        <div key={key} className='bg-white p-14 rounded-lg shadow-lg flex flex-col items-center text-center'>
            <img src={card.image} alt="card-icon" className='mb-6' />
            <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
            <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards