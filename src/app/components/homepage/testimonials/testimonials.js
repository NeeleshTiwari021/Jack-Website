import React from 'react'
import Image from 'next/image'
import './testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials flex flex-col gap-8 items-center justify-center bg-black p-24'>
            <p className=' text-3xl text-white'>Testimonials</p>
            <div className='testimonials_grid grid grid-cols-2 gap-4'>
                <div className=' flex flex-col gap-8 border-2 border-yellow-700 p-4 items-center justify-center'>
                    <Image src="/images/homepage/comma.jpeg" alt='' height={60} width={60} />
                    <p className=' text-center text-white'>&quot;We recently sold our condo more than asking price with Jack and Tara and it was a very smooth professional experience. They were very quick to answer our questions which is very important and also we sold our condo during the pandemic we thought that it will be very hard to sell it but with in a month it was done. So thumbs up to Jack and his team ​​​​​​​​​​​​​​Thank you.&quot;</p>
                    <p className=' text-white text-lg'>​​​​​​​- YURT GEDIK​​​​​​​</p>
                    <Image src="/images/homepage/logo.png" alt='' height={60} width={60} />
                </div>
                <div className=' flex flex-col items-center justify-center gap-8 border-2 border-yellow-700 p-4'>
                    <Image src="/images/homepage/comma.jpeg" alt='' height={60} width={60} />
                    <p className=' text-center text-white'>&quot;Jack and his team did the impossible for me in finding the home that I was looking for and more within my budget in an incredibly fast amount of time. Hakan and Tara listened and were always there to answer any questions | had throughout the process. Highly recommend and the
                        only team I will suggest ​to my ​​​​​​​friends ​​​​​and family.&quot;​​​​​​​</p>
                    <p className=' text-white text-lg'>​​​​​​​- DENIZ OZTURK​​​​​​​​</p>
                    <Image src="/images/homepage/logo.png" alt='' height={60} width={60} />
                </div>
            </div>
            <button className='text-white mt-2 px-12 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 w-fit text-lg'>View All</button>
        </div>
    )
}

export default Testimonials
