import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Book = () => {
  return (
    <div className=' bg-blue-700 p-4 sticky top-16 flex justify-between'>
      <div className=' flex gap-2'>
        <SearchIcon/> <p className=' text-white'>Search By address or area</p>
      </div>
      <p className=' text-white'>Book an Appointment</p>
    </div>
  )
}

export default Book
