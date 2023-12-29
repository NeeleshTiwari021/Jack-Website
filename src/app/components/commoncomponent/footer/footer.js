import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className='flex flex-col gap-12 bg-black p-12 px-20 footer'>
            <div className=' flex flex-col gap-4'>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t6let4dn44daejktvtlu/lightgold_v2" alt="Logo" className="h-12 object-cover w-fit" />
                <p className=' text-base font-light text-white'>Known for his resourcefulness in tough situations, Jack is capable of negotiating for prices that have almost no room for negotiations as well as finding homes for clients who are on tight budgets.</p>
            </div>
            <div className='address_contact flex gap-16'>
                <div className=' flex flex-col gap-3'>
                    <p className=' text-white text-xl font-sans'>ADDRESS</p>
                    <p className=' text-white font-light'>170 Merton St.,<br/>Toronto, ON M4S 1A1</p>
                </div>
                <div className=' flex flex-col gap-3'>
                    <p className=' text-white text-xl font-sans'>CONTACT</p>
                    <div>
                    <p className=' text-white font-light'>(647) 518-9858</p>
                    <p className=' text-white font-light'>admin@jackhunter.com</p>
                    </div>
                </div>
            </div>
            <div className=' flex gap-4 items-center'>
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/cagatignppb4n7e73r2z/remax_hallmark_collection-logo_col-white" alt='' className=' w-fit h-16'/>
                <p className=' text-white'>While some of the listings on this site may not be our exclusive listings, we have ongoing relationships with all of the listing agents.</p>
            </div>
            <div className='copyright grid grid-cols-2 gap-4'>
                <p className=' text-white text-lg'>Website Designed & Developed by <span className=' underline underline-offset-2'>Luxury Presence</span></p>
                <p className=' text-white text-lg'>Copyright 2023 | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer
