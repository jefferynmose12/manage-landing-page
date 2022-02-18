import React from 'react'
import bgmobile from '../images/illustration-intro.svg'
import bgdesktop from '../images/illustration-intro.svg'
import Button from './Button'
import tablet from '../images/bg-tablet-pattern.svg'

function Main() {
    return (
        <div className='relative'>
            <div className='px-5 md:px-10 lg:px-0 flex flex-col lg:flex-row items-center justify-between'>
                <div className='lg:hidden z-30'>
                    <img src={bgmobile} alt='bg-mobile' />
                </div>
                <div className='lg:pl-32 xl:pl-44 flex flex-col gap-3 lg:gap-8 items-center text-center lg:text-left lg:items-start z-30'>
                    <h1 className='md:hidden lg:block text-4xl lg:text-5xl font-bold lg:font-semibold'>Bring everyone<br/>together to build<br/>better products.</h1>
                    <h1 className='hidden md:block lg:hidden text-4xl lg:text-5xl font-bold lg:font-semibold'>Bring everyone together to build<br/>better products.</h1>
                    <p className='text-Dark-Grayish-Blue leading-6 lg:w-1/2'>Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                    </p>
                    <div className='mt-3 lg:mt-0'>
                        <Button />
                    </div>
                </div>
                <div className='hidden lg:block lg:mr-28 xl:mr-40 z-40'>
                    <img src={bgdesktop} alt='bg-desktop'/>
                </div>
            </div>
            <img className='lg:hidden absolute z-0 -right-16 md:-right-44 -top-40  md:-top-96' src={tablet} alt='bg-tablet' />
            <img className='hidden lg:block absolute w-2/5 z-0 -right-10 bottom-24' src={tablet} alt='bg-tablet' />
        </div>
    )
}

export default Main
