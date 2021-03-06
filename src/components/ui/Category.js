import React from 'react'

const Category = ({category: {id, title, image}}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href='#' className='flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50'>
        <img src={image} alt="category-logo" className='w-12 h-12 rounded border border-gray-200' />
        <span className='text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight'>{title}</span>
    </a>
  )
}

export default Category