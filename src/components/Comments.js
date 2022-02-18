import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Avatar from '@mui/material/Avatar';
import anisha from '../images/avatar-anisha.png'
import ali from '../images/avatar-ali.png'
import richard from '../images/avatar-richard.png'
import shanai from '../images/avatar-shanai.png'
import Button from './Button';

function Comments() {
    return (
        <div className='py-10 lg:py-12 flex flex-col items-center justify-center relative z-40'>
            <h2 className='text-3xl text-gray-800 font-bold'>What they've said</h2>
            <Carousel showIndicators={false} showStatus={false} autoFocus={true} centerSlidePercentage={45} infiniteLoop={true} centerMode={true} autoPlay={true} swipeable={true} className='lg:w-full mt-10'>
                <div className='p-4 bg-Vary-Light-Gray rounded-md shadow mx-auto flex flex-col items-center h-full w-full lg:w-2/3'>
                    <div className=''>
                        <Avatar alt="Remy Sharp" src={anisha} />
                    </div>
                    <div className=''>
                        <h6 className='font-bold '>Anisha Li</h6>
                        <p className='text-sm'>
                        “Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.” 
                        </p>
                    </div>
                </div>
                <div className='p-4 bg-Vary-Light-Gray rounded-md shadow mx-auto flex flex-col items-center h-full w-full lg:w-2/3'>
                    <div className=''>
                        <Avatar alt="Remy Sharp" src={ali} />
                    </div>
                    <div className=''>
                        <h6 className='font-bold'>Ali Bravo</h6>
                        <p className='text-sm'>
                        “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”
                        </p>
                    </div>
                </div>
                <div className='p-4 bg-Vary-Light-Gray rounded-md shadow mx-auto flex flex-col items-center h-full w-full lg:w-2/3'>
                    <div className=''>
                        <Avatar alt="Remy Sharp" src={richard} />
                    </div>
                    <div className=''>
                        <h6 className='font-bold '>Richard Watts</h6>
                        <p className='text-sm'>
                        “Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can't stop recommending them to everyone I talk to!”
                        </p>
                    </div>
                </div>
                <div className='p-4 bg-Vary-Light-Gray rounded-md shadow mx-auto flex flex-col items-center h-full w-full lg:w-2/3'>
                    <div className=''>
                        <Avatar alt="Remy Sharp" src={shanai} />
                    </div>
                    <div className=''>
                        <h6 className='font-bold '>Shanai Gough</h6>
                        <p className='text-sm'>
                        “Their software allows us to track, manage and collaborate on our projects 
                        from anywhere. It keeps the whole team in-sync without being intrusive.”
                        </p>
                    </div>
                </div>
            </Carousel>
            <div className='mt-5 lg:mt-0 flex items-center mx-auto'>
                <Button />
            </div>
        </div>
    )
}

export default Comments;
