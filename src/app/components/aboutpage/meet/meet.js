import React from 'react'
import Image from 'next/image';
import './meet.css';

const Meet = () => {
  return (
    <div className='meet_about grid grid-cols-2 gap-2 p-16'>
      <div className=' flex flex-col items-center gap-8'>
        <Image src="/images/about/jack.webp" alt='' height={400} width={400}/>
        <p className=' text-xl text-white'>(647) 518-9858 | admin@jackhunter.com</p>
        <img src='https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t6let4dn44daejktvtlu/lightgold_v2' alt='' className='h-16 w-fit'/>
      </div>
      <div className=' flex flex-col gap-8 pr-4'>
        <p className=' text-white text-6xl font-light'>Meet Jack Hunter</p>
        <p className='text-white text-lg'>An accomplished, enthusiastic and focused real estate broker, Jack Hunter is committed to helping his clients achieve the American Dream. By providing a wide range of exceptional customer oriented services, he gets to be a part of their experiences as they make one of the most important decisions in their lives, guiding them step by step in their transition to the next phase successfully and seamlessly. </p>
        <p className=' text-white text-lg'>Jack has always been passionate about investing in financial markets and real estate. Coupled with a degree in psychology, he utilizes a strategic yet personable approach and always has his clients’ best interests at heart. He is able to discern and understand the needs of buyers and sellers, and takes pride in knowing the right questions to ask. Leveraging statistical data analysis, innovative marketing techniques as well as keen negotiation insights, he embraces the use of advanced technologies in his operations, adding to the quality and strength of his coverage within the local Toronto market thereby providing expert representation.</p>
      </div>
    </div>
  )
}

export default Meet
