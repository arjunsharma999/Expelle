import Link from 'next/link'
import React from 'react'

function Services() {
  return (
    <div className='flex flex-col gap-[2rem]'>
      <div className='flex flex-col justify-center items-center text-center gap-3'>
          <h4 className='uppercase'>OUR SERVICES</h4>
          <h2 className='text-[2.5rem] font-bold'>we Provide wide range of digital services</h2>
          <p className='text-[1rem] w-[80%]'>Whether you’re a startup looking for that extra kick or an established retailer in need of a fresh perspective, we are here to take your digital commerce to the next level.</p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-[2rem] mt-[3rem]'>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='border-2 rounded-lg flex flex-col gap-4 p-[2rem] w-[70%]'>
            <h2 className='font-bold md:text-[1.5rem]'>Website development</h2>
            <h2>We create website that clearly reflects your expertise, story, and values </h2>
            <Link href={'hh.com'} className='font-bold'>Learn More</Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center gap-3'>
          <Link href={'hh.com'} className='font-bold'>Learn More</Link>
      </div>
    </div>
  )
}

export default Services