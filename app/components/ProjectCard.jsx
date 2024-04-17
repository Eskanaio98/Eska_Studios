import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { Tilt_Neon } from 'next/font/google';
import React from 'react';
import { CodeBracketIcon, EyeIcon, CubeIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
      <div>
        <div
          className='h-52 md:h-72 rounded-t-xl relative group'
          style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
        >
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#4C516D] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            <Link href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#efbbff] hover-border-white group/link'>
              <CubeIcon className='h-10 w-10 text-[#efbbff] absolute top-1/2 left-1.5 transform-translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
            <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#efbbff] hover-border-white group/link'>
              <EyeIcon className='h-10 w-10 text-[#efbbff] absolute top-1/2 left-1.5 transform-translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
          </div>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#4C516D]py-6 px-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#daf4f0]'>{description}</p>
        </div>
      </div>
  )
};

export default ProjectCard;