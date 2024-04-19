'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return(
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, sclae: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
         <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
           <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-400'>
             Hello, I am {" "}
           </span>
           <br></br>
           <TypeAnimation
             sequence={[
              'Miller',
              1000,
             'a 3D Artist',
              1000,
             'a Video Editor',
              1000,
             'a Coder',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
           />
         </h1>
         <p className='text-[#bdf5ef] text-base sm:text-lg mb-6 lg:text-xl'>
            “The harder you work, the more important you become.”
         </p>
         <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-300 to-red-400 hover:bg-slate-200 text-black'>
            <a href='https://www.linkedin.com/in/nantharatnam-miller-ab56bb260/?trk=opento_sprofile_goalscard'>
                Hire Me
            </a>
          </button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 via-purple-600 to-blue-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#000066] hover:bg-slate-800 rounded-full px-5 py-2'>
              <a href='https://drive.google.com/file/d/18FnlxtlohIiWA61LOOUqhG6GDvp9SAcT/view?usp=sharing'>
                  Download CV
              </a>
            </span>
          </button>
         </div>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, sclae: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative'>
           <Image
             src="/images/profile.png"
             alt="profile picture"
             className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
             width={250}
             height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
