'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    

    if (response.status === 200) {
      console.log('Message sent.');
      console.log(resData);
    }
  }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#D1FFFC] mb-4 max-w-md'>
          I am always looking for new opportunities. My inbox is open to people to contact professionally. If you have a question, feel free to ask or say hello, and I will do my best to reply soon.
          (PS. I am still currently working on the email system. When the changes are made, you can send the message
          and i can get it from my inbox. Thank you for your patience.) 
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/Eskanaio98">
            <Image src="/github-icon.svg" alt='github icon' width={50} height={50}/>
          </Link>
          <Link href="https://www.linkedin.com/in/nantharatnam-miller-ab56bb260/">
            <Image src="/linkedin-icon.svg" alt='linkedin icon' width={50} height={50}/>
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
          <div className='mb-6'>
          <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
          <input
           name='email'
           type="email" 
           id="email" 
           required 
           className='bg-[#ADD8E6] border border-[#54e5f0] placeholder-[#33326b] text-sm rounded-lg block w-full p-2.5'
           placeholder='jacob@google.com'
          />
          </div>
          <div className='mb-6'>
           <label htmlFor='email' className='text-white block text-sm mb-2 font-medium'>Subject</label>
           <input
           name='subject'
           type="text" 
           id="subject" 
           required 
           className='bg-[#ADD8E6] border border-[#54e5f0] placeholder-[#33326b] text-sm rounded-lg block w-full p-2.5'
           placeholder='Hello there user!'
           />
          </div>
          <div className='mb-6'>
            <label
             htmlFor='message'
             className='text-white block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea 
             name='message'
             id='message'
             className='bg-[#ADD8E6] border border-[#54e5f0] placeholder-[#33326b] text-sm rounded-lg block w-full p-2.5'
             placeholder='We can talk about...'
            />
          </div>
          <button
           type='submit'
           className='bg-[#D1FFFC] hover:bg-[#4aafaa] text-black font-medium py-2.5 px-5 rounded-lg w-full'>
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className='text-[#A6F7C3] text-sm mt-2'>
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
