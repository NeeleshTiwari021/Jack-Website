"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className={` ${isOpen ? 'bg-black' : 'bg-transparent'} fixed z-10 w-full p-4 px-8`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
          <Link href="/">
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t6let4dn44daejktvtlu/lightgold_v2" alt="Logo" className="h-12" />
          </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 space-x-4">
          <Link href="/about">
            <p className="hover:underline text-white transition duration-300 font-sans font-bold cursor-pointer text-sm">
            ABOUT JACK
            </p>
            </Link>
            <Link href="/testimonials">
            <p className="hover:underline text-white transition duration-300 font-sans font-bold cursor-pointer text-sm">
            TESTIMONIALS
            </p>
            </Link>
            <Link href="/connect">
            <p className="hover:underline text-white transition-all duration-300 font-sans font-bold cursor-pointer text-sm">
            LET&apos;S CONNECT
            </p>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {/* You can use an icon here for better visibility */}
              {isOpen ? (<Image src="/images/navbar/close.svg" alt='' height={30} width={30}/>) : (<Image src="/images/navbar/menu.svg" alt='' height={30} width={30}/>)}
            </button>
          </div>
        </div>
        {/* Responsive Nav */}
        {isOpen && (
          <div className="md:hidden bg-black h-screen flex flex-col items-start p-8 absolute top-20 left-0 z-20 w-full gap-8">
            <p className="block text-white mb-2 font-sans font-semibold cursor-pointer text-sm">
            ABOUT JACK
            </p>
            <p className="block text-white mb-2 font-sans font-semibold cursor-pointer text-sm">
            TESTIMONIALS
            </p>
            <p className="block text-white mb-2 font-sans font-semibold cursor-pointer text-sm">
            LET&apos;S CONNECT
            </p>
          </div>
        )}
      </nav>
    );
  };
  

export default Navbar
