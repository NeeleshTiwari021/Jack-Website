import React from 'react'
import './property.css';

const Property = () => {
  return (
    <div className=' bg-black p-8 flex items-center gap-4'>
      <div className=' left_property flex flex-col gap-6'>
        <p className=' text-white text-5xl font-light'>Featured Property</p>
        <p className=' text-white'>Welcome to 138 St. Helens Ave at Bloordale Village, an amazing neighbourhood with character.</p>
      </div>
      <div className=' right_property'>
        <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/yb8xlitl458amlg4jhzt/new-listing-138-st-helens-avenue-0-31-screenshot" alt=''/>
      </div>
    </div>
  )
}

export default Property
