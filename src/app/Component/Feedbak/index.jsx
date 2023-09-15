import React from 'react'

function index() {
    return (
        <div className=' container-fluid opacity-50 bg-gray-300 py-[2rem]'>
            <div className='flex flex-col gap-[3rem] '>
                <div>
                    <div className='flex flex-col gap-[2rem]'>
                        <div className='flex flex-col justify-center items-center text-center gap-3'>
                            <h4 className='uppercase'>OUR SERVICES</h4>
                            <h2 className='text-[2.5rem] font-bold'>we Provide wide range of digital services</h2>
                            <p className='text-[1rem] w-[80%]'>Whether you’re a startup looking for that extra kick or an established retailer in need of a fresh perspective, we are here to take your digital commerce to the next level.</p>
                            <div className='flex gap-4'>
                                <img src="/Homepage/brandlogo.png" alt="" />
                                <img src="/Homepage/brandlogo.png" alt="" />
                                <img src="/Homepage/brandlogo.png" alt="" />
                                <img src="/Homepage/brandlogo.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index