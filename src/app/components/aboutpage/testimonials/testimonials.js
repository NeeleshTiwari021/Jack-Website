"use client"
import React, { useState } from 'react';
import './testimonials.css';

const Testimonials = () => {
    const data = [
        {
            "title": "Representative and Seller Representative Specialist, and is on a mission to transform lives one person at a time. He has also partnered with Re/Max Hallmark Realty Ltd, ",
            "author": "- Golu Solmaaz",
        },
        {
            "title": "Representative and Seller Representative Specialist, and is on a mission to transform lives one person at a time. He has also partnered with Re/Max Hallmark Realty Ltd, ",
            "author": "- David Warner",
        },
        {
            "title": "Representative and Seller Representative Specialist, and is on a mission to transform lives one person at a time. He has also partnered with Re/Max Hallmark Realty Ltd, ",
            "author": "- Micheal French",
        },
        {
            "title": "Representative and Seller Representative Specialist, and is on a mission to transform lives one person at a time. He has also partnered with Re/Max Hallmark Realty Ltd, ",
            "author": "- Emma Watson",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="testimonials grid grid-cols-2 place-content-center gap-4 bg-black h-screen overflow-hidden p-4">
        <div className='testimonials_left flex flex-col gap-4 items-center border-r-2 border-white mr-12'>
        <p className=' text-white text-5xl font-serif'>Testimonials</p>
        <div className=' flex gap-4 items-center'>
            <button className=" text-xl font-serif text-white px-4 py-2 mr-2 h-fit w-fit hover:text-sky-500 transition-all duration-300" onClick={handlePrev}>
                Prev
            </button>
            <p className=' text-3xl font-bold text-white'>|</p>
            <button className=" text-xl font-serif text-white px-4 py-2 mr-2 h-fit w-fit hover:text-sky-500 transition-all duration-300" onClick={handleNext}>
            Next
            </button>
            </div>
            </div>

            <div className="flex-1 relative">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={` absolute -top-6 transition-transform duration-300 transform ${
                            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="p-4 flex flex-col gap-4">
                            <h2 className=" text_title text-xl text-white">{item.title}</h2>
                            <p className=" text_author text-2xl text-white">- {item.author}</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Testimonials;
