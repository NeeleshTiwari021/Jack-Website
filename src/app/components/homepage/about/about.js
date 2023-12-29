import React from 'react'
import './about.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className='about flex gap-4 items-center py-20'>
      <div className=' left_side_about flex justify-end items-end'>
        <Image src="/images/homepage/about.webp" alt='' className=' h-full' height={400} width={400} priority/>
      </div>
      <div className=' right_side_about flex flex-col gap-4 justify-center items-start px-8'>
      <p className=' text-6xl font-extralight'>Meet Jack Hunter</p>
      <hr className='my-4 border-t-2 border-gray-300 w-24'  />
      <p className=' text-xl text-gray-600'>An accomplished, enthusiastic and focused real estate broker, Jack Hunter is committed to helping his clients achieve the American Dream. By providing a wide range of exceptional customer oriented services, he gets to be a part of their experiences as they make one of the most important decisions in their lives, guiding them step by step in their transition to the next phase successfully and seamlessly.</p>
      <button className=' w-fit text-gray-500 border-0 underline p-1'><span className=''>LEARN MORE</span></button>
      </div>
    </div>
  )
}

export default About
