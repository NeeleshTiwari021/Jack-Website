import React from 'react'
import './connect.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';

const Connect = () => {
  return (
    <div className='connect flex items-start justify-center p-24 bg-transparent'>
      <div className=' flex-1 flex flex-col gap-6'>
      <div>
        <p className='connect_text mb-2 text-4xl text-white'>Contact Details</p>
        <p className='connect_jack_text text-3xl text-white'>Jack Hunter</p>
        </div>
        <div className=' flex items-center gap-3'>
        <PhoneIcon className=' text-white text-4xl'/>
            <div>
                <p className='text-base font-serif text-white'>PHONE</p>
                <p className=' cursor-pointer text-sm text-white hover:text-amber-200 transition-all duration-300'>(647) 518-9858</p>
            </div>
        </div>
        <div className=' flex items-center gap-2'>
        <MailOutlineIcon className=' text-white text-4xl'/>
            <div>
                <p className=' text-base text-white'>EMAIL</p>
                <p className='cursor-pointer text-sm text-white hover:text-amber-200 transition-all duration-300'>ADMIN@JACKHUNTER.COM</p>
            </div>
        </div>
        <div className=' flex items-center gap-2'>
        <MapIcon className=' text-white text-4xl'/>
            <div>
                <p className=' text-base text-white'>ADDRESS</p>
                <p className='cursor-pointer text-sm text-white hover:text-amber-200 transition-all duration-300'>170 MERTON STREET,<br/>TORONTO, ON M4S 1A1</p>
            </div>
        </div>
      </div>
      <div className=' right_side_connect flex-1 px-8 items-end'>
      <p className='connect_text mb-4 text-4xl text-white'>Submit a Message</p>
      <form>
      <div className=' mb-2'>
      <label className="block uppercase tracking-wide font-bold text-white " htmlFor="name">Name</label>
      <input className='p-2 w-full bg-transparent border-b' type='text' id='name' />
      </div>
      <div className=' mb-2'>
      <label className="block uppercase tracking-wide font-bold mb-2 text-white " htmlFor="email">Email</label>
      <input className='p-2 w-full bg-transparent border-b' type='text' id='email' />
      </div>
      <div className=' mb-2'>
      <label className="block uppercase tracking-wide font-bold mb-2 text-white " htmlFor="phone">Phone</label>
      <input className='p-2 w-full bg-transparent border-b' type='text' id='phone' />
      </div>
      <div className=' mb-2'>
      <label className="block uppercase tracking-wide font-bold mb-2 text-white " htmlFor="massage">Massage</label>
      <textarea  className='p-2 w-full bg-transparent border-b' id='massage' rows={5}></textarea>
      </div>
      <p className=' mb-4 text-sm text-white'>By providing Hakan Hunter your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>

      <button className=' py-2 px-12 border border-white text-white hover:bg-white hover:text-black transition-all duration-300'>SUBMIT</button>
      </form>
      </div>
    </div>
  )
}

export default Connect
