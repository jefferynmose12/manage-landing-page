import React, {useState} from 'react'
import logo from '../images/logo.svg'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [toggle, setToggle]= useState(true);

    return (
        <nav className='px-5 md:px-14 lg:px-32 xl:px-44 flex items-center h-20 lg:h-28 z-40'>
            <div className=''>
                <img src={logo} alt='bookmark-logo' />
            </div>

            <div className='ml-auto lg:hidden z-50' onClick={()=> setToggle(!toggle)}>
                {
                    toggle === true ? 
                    (
                        <FontAwesomeIcon icon={faBars} className='p-2 text-2xl font-bold' />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} className='p-2 text-2xl font-bold' />
                    )
                }
            </div>

            <div className={' lg:hidden absolute px-7 top-0 left-0 w-full h-screen flex backdrop-brightness-75 transition ease-in-out delay-150 z-40 hidden' + (toggle === true ? ' block ' : null)}>
                <ul className='py-6 md:py-10 mt-20 bg-white h-2/5 md:h-2/6 rounded-lg flex flex-col gap-5 md:gap-7 items-center w-full text-lg md:text-xl text-Very-Dark-Blue font-bold'>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Pricing</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Product</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>About Us</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Careers</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Community</a></li>
                </ul>
            </div>

            <ul className='hidden lg:flex items-center gap-7 text-xs text-Very-Dark-Blue font-semibold mx-auto'>
                <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Pricing</a></li>
                <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Product</a></li>
                <li><a href="#" className='hover:text-Dark-Grayish-Blue'>About Us</a></li>
                <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Careers</a></li>
                <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Community</a></li>
            </ul>
            <div className='hidden lg:block z-40'>
                <Button />
            </div>
        </nav>
    )
}

export default Header
