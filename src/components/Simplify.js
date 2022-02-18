import React from 'react'
import simplify from '../images/bg-simplify-section-desktop.svg'
import simplifym from '../images/bg-simplify-section-mobile.svg'

function Simplify() {

    return (
        <div className='mt-10 bg-Bright-Red relative'>
            <div className='lg:px-32 xl:px-44 py-20 flex flex-col gap-7 lg:gap-0 lg:flex-row items-center justify-center lg:h-40 w-4/5 lg:w-auto mx-auto'>
                <div className='text-4xl text-center lg:text-left text-gray-200 font-semibold'>
                    <h3 className='hidden lg:block'>Simplify how your team<br/>works today.</h3>
                    <h3 className='lg:hidden text-center'>Simplify how your team works today.</h3>
                </div>
                <div className='lg:ml-auto z-40'>
                    <button className='bg-white shadow-xl rounded-3xl font-semibold text-Bright-Red text-sm w-36 h-10 cursor-pointer hover:text-red-300'>Get Started</button>
                </div>
            </div>
            <img src={simplifym} className='lg:hidden absolute top-0 left-0 h-full' alt='bg-tablet' />
            <img src={simplify} className='hidden lg:block absolute w-4/5 top-0 right-0 h-full' alt='bg-tablet' />
        </div>
    )
}

export default Simplify;
