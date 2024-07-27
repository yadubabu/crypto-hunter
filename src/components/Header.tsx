import React from 'react'
import './style.css';
type Props = {}

export default function Header({}: Props) {
  return (
    <div className='head max-w-full bg-gray-900 '>
      <h1 className='text-4xl text-white font-serif text-center py-3'><span className='text-yellow-500'>C</span>rypto <span className='text-yellow-500'>C</span>urrency</h1>
      
    </div>
  )
}