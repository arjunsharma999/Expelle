import Learnmore from '../../Common/LearnMore/Learnmore'
import Link from 'next/link'
import React from 'react'

function Showcase() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem]">
        <div className="flex flex-col justify-center items-center mt-[8rem]">
            <h1 className='text-[1.3rem] lg:text-[3rem] w-80% font-bold text-center'>We turn ideas into extraordinary digital & experiences products</h1>       
        </div>
        <div className='flex justify-center items-center' >
            <p className='text-center w-[70%] text-[0.5rem] lg:text-[1rem]'>Whether you’re a startup looking for that extra kick or an established retailer in need of a fresh perspective, we are here to take your digital commerce to the next level.</p>
        </div>
        <Link href={'https://t.me/Ritz_Expelee'}>
				  <Learnmore text="Lets Talk" />
			  </Link>
    </div>
  )
}

export default Showcase