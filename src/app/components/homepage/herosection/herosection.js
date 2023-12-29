"use client"
import React, { useState, useEffect } from 'react';
import './hero.css';

const Herosection = () => {
  
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection % 2) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className='herosection_home flex justify-start items-center p-16'>
      <video autoPlay muted loop className='background-video'>
        <source src="/images/homepage/interior-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="gradient-overlay"></div>
      <div className={`content-section section-${currentSection} z-10`}>
          <div className='flex flex-col gap-8'>
            <p className='text-white text-xl hero_upper_text'>Embark on the use of advantage of technology in this operation</p>
            {currentSection === 1 ? (
              <>
                <p className='main_text text-white text-7xl'>JACK HUNTER</p>
                <p className='text-white text-xl hero_lower_text'>Known for his resources in tough situations</p>
                <p className='underline text-white hero_lower_text'>MLS Search</p>
              </>
            ) : (
              <>
                <p className='main_text text-white text-7xl'>INNOVATION MARKETING TECHNOLOGY</p>
                <p className='text-white text-xl hero_lower_text'>Known for his resources in tough situations</p>
                <p className='underline text-white hero_lower_text'>LEARN MORE</p>
              </>
            )}
          </div>
        </div>
    </div>
    </>
  );
};

export default Herosection;
