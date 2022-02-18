import React from 'react'
import tablet from '../images/bg-tablet-pattern.svg'

function Manage() {
    return (
        <div className='pt-32 pb-10 lg:py-16 relative'>
            <div className='lg:px-32 xl:px-44 flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-32 z-40'>
                <div className='z-40 w-80 md:px-10 lg:px-0 md:w-auto lg:w-auto text-center lg:text-left'>
                    <h2 className='text-3xl font-semibold'>What’s different about Manage?</h2>
                    <p className='pt-3 text-Dark-Grayish-Blue leading-6 lg:w-4/5'>
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                    </p>
                </div>
                <div className='px-3 md:px-10 lg:px-0 flex flex-col gap-5'>
                    <div className='flex flex-col gap-3 lg:gap-2 z-40'>
                        <div className='flex items-center gap-4 bg-Very-Pale-Red lg:bg-white rounded-l-xl'>
                            <div className='bg-Bright-Red text-white text-sm font-bold rounded-xl flex justify-center items-center h-7 w-12'>01</div>
                            <h5 className='text-gray-700 font-bold'>Track company-wide progress</h5>
                        </div>
                        <p className='lg:pl-14 text-Dark-Grayish-Blue'>
                            See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 lg:gap-2'>
                        <div className='flex items-center gap-4 bg-Very-Pale-Red lg:bg-white rounded-l-xl'>
                            <div className='bg-Bright-Red text-white text-sm font-bold rounded-xl flex justify-center items-center h-7 w-12'>02</div>
                            <h5 className='text-gray-700 font-bold'>Advanced built-in reports</h5>
                        </div>
                        <p className='lg:pl-14 text-Dark-Grayish-Blue'>
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 lg:gap-2'>
                        <div className='flex items-center gap-4 bg-Very-Pale-Red lg:bg-white rounded-l-xl'>
                            <div className='bg-Bright-Red text-white text-sm font-bold rounded-xl flex justify-center items-center h-7 w-12'>03</div>
                            <h5 className='text-gray-700 font-bold'>Everything you need in one place</h5>
                        </div>
                        <p className='lg:pl-14 text-Dark-Grayish-Blue'>
                            Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                        </p>
                    </div> 
                </div>
            </div>
            <img className='md:hidden absolute z-0 -right-60 -top-72' src={tablet} alt='bg-tablet' />
            <img className='hidden lg:block absolute w-2/5 z-0 -left-1/4 top-52' src={tablet} alt='bg-tablet' />
        </div>
    )
}

export default Manage

