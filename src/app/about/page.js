import React from 'react'
import Herosection from '../components/aboutpage/herosection/herosection'
import Meet from '../components/aboutpage/meet/meet'
import Testimonials from '../components/aboutpage/testimonials/testimonials'

const page = () => {
  return (
    <div>
      <Herosection/>
      <Meet/>
      <Testimonials/>
    </div>
  )
}

export default page
