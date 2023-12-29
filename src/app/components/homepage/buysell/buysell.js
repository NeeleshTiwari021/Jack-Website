import React from 'react'
import './buysell.css';

const Buysell = () => {
  return (
    <div className='buysell grid grid-cols-2'>
      <div className=' left_buysell flex flex-col gap-4 p-8 py-12 h-96 items-center justify-center'>
      <p className=' text-white text-5xl font-extralight text-center'>Sell For 1% Commission</p>
      <p className='text-white text-center'>Full MLS Listing Services + Staging + 3D Tour and more</p>
      <button className=' w-fit px-4 py-1 text-white border-2 border-white hover:bg-black hover:border-black hover:text-white transition-all duration-300'>GET HOME VALUE</button>
      </div>
      <div className=' right_buysell flex flex-col gap-4 p-8 py-12 h-96 items-center justify-center'>
      <p className='text-white text-5xl font-extralight text-center'>Buy With 1% CashBack</p>
      <p className='text-white text-center'>Earn 1% of your purchase price back</p>
      <button className='text-white px-4 py-1 border-2 border-white hover:bg-black hover:border-black hover:text-white transition-all duration-300 w-fit'>VIEW PROPERTIES</button>
      </div>
    </div>
  )
}

export default Buysell
