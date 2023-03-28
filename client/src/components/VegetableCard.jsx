import React from 'react'
import carrot from '../assets/carrot.jpg';

export const VegetableCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center h-max border-2 w-max mx-auto p-3'>
        <img src={carrot} alt="" width={200}/>
        <p className='font-bold text-2xl'>Carrot</p>
        <button className='rounded-lg bg-red-500 p-1 px-2'>Add to Cart</button>
    </div>
  )
}
