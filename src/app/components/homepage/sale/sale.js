import React from 'react'
import './sale.css';

const Sale = () => {
  return (
    <div className=' flex flex-col gap-8 p-8 py-20 bg-neutral-200'>
    <p className=' text-4xl p-4'>Exclusive Properties</p>
    <div className='sale_grid grid grid-cols-2 gap-4 p-4'>
      <div className=' flex flex-col items-center gap-3 bg-white cursor-pointer relative'>
      <div className='linear-gradient-overlay flex justify-center items-center'>
      <button className=' text-xl px-5 py-1 border-2 border-black hover:text-white hover:bg-black transition-all duration-300'>VIEW PROPERTY</button>
      </div>
        <img src="https://www.itke.uni-stuttgart.de/.content/fotostrecken_v3/ICD-ITKE-FIT2023_van_Grachten/ICD_ITKE-FIT2023_CvdG_01.jpg?__scale=w:1170,h:658,cx:0,cy:79,cw:1520,ch:854" alt='' className='sale_image w-full object-cover h-96'/>
        <div className='flex flex-col gap-3 p-4'>
        <p className=' text-center text-xl'>28 Roseband DR Unit: 612</p>
        <p className='text-center text-sm font-semibold'>28 Roseband DR Unit: 612 Torronto streets NewYorks</p>
        <p className='text-center text-sm font-semibold'>3BD | 3BA</p>
        <p className='text-center text-base font-semibold'>$599,99</p>
        </div>
      </div>
      <div className=' flex flex-col items-center gap-3 bg-white cursor-pointer relative'>
      <div className='linear-gradient-overlay flex justify-center items-center'>
      <button className=' text-xl px-5 py-1 border-2 border-black hover:text-white hover:bg-black transition-all duration-300'>VIEW PROPERTY</button>
      </div>
      <img src="https://images.squarespace-cdn.com/content/v1/52277759e4b034c78b0ea819/1554137930040-X5Y83OU3873GMURYC6R5/BUILD-LLC-Park-Modern-Night-01.jpg" alt='' className='sale_image w-full object-cover h-96'/>
      <div className='flex flex-col gap-3 p-4'>
      <p className='text-center text-xl'>28 Roseband DR Unit: 612</p>
        <p className='text-center text-sm font-semibold'>28 Roseband DR Unit: 612 Torronto streets NewYorks</p>
        <p className='text-center text-sm font-semibold'>3BD | 3BA</p>
        <p className='text-center text-base font-semibold'>$599,99</p>
        </div>
      </div>
    </div>
    <div className=' w-full flex items-center justify-center'>
    <button className='text-black mt-2 px-12 py-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 w-fit text-lg'>View All</button>
    </div>
    </div>
  )
}

export default Sale
