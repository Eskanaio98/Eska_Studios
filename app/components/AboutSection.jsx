'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul>
                <li>Maya</li>
                <li>Blender</li>
                <li>Unity C#</li>
                <li>Unreal C++</li>
                <li>Python</li>
                <li>HTML and CSS</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Davinci Resolve</li>
                <li>Adobe Premiere Pro</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>Shooters Hill Sixth Form College</li>
                <li>University of Greenwich</li>
            </ul>
        )
    },
    {
        title: 'Certificates',
        id: 'certificates',
        content: (
            <ul>
                <li>ICT BTEC Lvl3 Extended Diploma - D*D*D*</li>
                <li>GCSE Maths - C</li>
                <li>GCSE English - C</li>
                <li>Games Design and Development (Anim & Mod) - 2:2</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src= "/images/computer.png" width={500} height={500}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>  Hello, my name is Miller. I am a multifaceted creative professional specializing in 3D art, video editing, and game coding.
                         With a passion for visual storytelling and a keen eye for detail, I bring projects to life through immersive visuals and 
                         captivating narratives. Motivated by the challenge of bringing your ideas to fruition, I am dedicated to delivering high-quality 
                         3D art tailored to your specific needs and requirements. Whether it's crafting stunning visuals, refining video sequences, 
                         or developing engaging gameplay experiences, I am committed to exceeding expectations and bringing your vision to reality.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                          selectTab={() => handleTabChange('skills')} 
                          active={tab === 'skills'}> 
                          {' '}
                          Skills {' '}
                        </TabButton>

                        <TabButton 
                          selectTab={() => handleTabChange('education')} 
                          active={tab === 'education'}> 
                          {' '}
                          Education {' '}
                        </TabButton>

                        <TabButton 
                          selectTab={() => handleTabChange('certificates')} 
                          active={tab === 'certificates'}> 
                          {' '}
                          Certificates {' '}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;