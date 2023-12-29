import React from 'react'
import './neighbourhoods.css'

const Neighbourhoods = () => {
  return (
    <div className='neighbourhoods grid grid-cols-3 overflow-hidden'>
    <div className='neighbourhood-card Neighbourhoods1 flex flex-col justify-center items-center p-4'>
        <p className='upper-text text text-3xl font-extralight text-white'>LEASIDE</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods2 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>Rosedale</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods3 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>Downtown</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods4 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>Midtown</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    
    <div className='flex flex-col justify-center items-center gap-4 bg-blue-600'>
        <p className='text_main_neigh text-white text-4xl font-extralight'>Neighbourhoods</p>
        <button className='text-white mt-2 buttons_neigh px-12 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 w-fit text-lg'>View All</button>
    </div>

    <div className='neighbourhood-card Neighbourhoods5 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>Annex</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods6 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>North York</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods7 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>LEASIDE</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    <div className='neighbourhood-card Neighbourhoods8 flex flex-col justify-center items-center p-4'>
    <p className='upper-text text text-3xl font-extralight text-white'>Rosedale</p>
        <p className='middle-text text text-white text-center'>Located near parent side of the leaside to reach there</p>
        <p className='lower-text text text-white underline'>MORE</p>
    </div>
    </div>
  )
}

export default Neighbourhoods
