import React from 'react'
import './work.css';

const Work = () => {
  return (
    <div className=' work flex justify-center items-center flex-col gap-12 p-12'>
      <p className=' text-white text-center text-5xl font-extralight'>Work With Jack</p>
      <hr className=' w-16 text-center text-white'/>
      <p className=' text-white text-center'>An accomplished, enthusiastic and focused real estate broker, Jack Hunter is<br/> committed to helping his clients achieve the American Dream.</p>
      <button className=' w-fit px-12 py-3 text-white border-2 border-white hover:bg-black hover:border-black hover:text-white transition-all duration-300'>LET&apos;S CONNECT</button>
    </div>
  )
}

export default Work
