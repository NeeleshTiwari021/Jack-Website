import React from 'react'
import './news.css';

const News = () => {
  return (
    <div className='news bg-black p-12 flex flex-col items-center justify-center gap-12 news'>
        <p className=' text-5xl text-white text-center'>In The News</p>
    
    <div className=' grid grid-cols-2 gap-4'>
      
      
      <div className=' flex flex-col items-center gap-3 cursor-pointer relative'>
        <img src="https://www.itke.uni-stuttgart.de/.content/fotostrecken_v3/ICD-ITKE-FIT2023_van_Grachten/ICD_ITKE-FIT2023_CvdG_01.jpg?__scale=w:1170,h:658,cx:0,cy:79,cw:1520,ch:854" alt='' className='news_img w-full object-cover h-96'/>
        <div className='flex flex-col gap-3 p-4'>
        <p className=' text-center text-xl text-white'>Pendemic create rare opportunity in real estate market</p>
        <p className='text-center text-sm font-semibold text-white'>Januvary 6, 2021</p>
        </div>
      </div>

      <div className=' flex flex-col items-center gap-3 cursor-pointer relative'>
        <img src="https://www.itke.uni-stuttgart.de/.content/fotostrecken_v3/ICD-ITKE-FIT2023_van_Grachten/ICD_ITKE-FIT2023_CvdG_01.jpg?__scale=w:1170,h:658,cx:0,cy:79,cw:1520,ch:854" alt='' className='news_img w-full object-cover h-96'/>
        <div className='flex flex-col gap-3 p-4'>
        <p className=' text-center text-xl text-white'>Pendemic create rare opportunity in real estate market</p>
        <p className='text-center text-sm font-semibold text-white'>Januvary 6, 2021</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default News
