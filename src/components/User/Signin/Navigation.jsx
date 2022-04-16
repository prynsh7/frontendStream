import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router'

const Navigation = () => {
    const [show, setShow] = useState(false)
    function toggle(){
        setShow(!show)
    }

    const navigate = useNavigate();

    return (
        <nav className="bg-[#161616] border-gray-200 px-2 sm:px-4 py-2.5 rounded lg:px-[40px] md:pt-12">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex">
                    <button onClick={toggle} data-collapse-toggle="mobile-menu" className="md:hidden inline-flex items-center p-2 text-sm text-white">
                        <img src='./Assets/bars.png' alt='bars' height='16px' width='21px' />
                    </button>
                    <img src='./Assets/dooo-logo.png' height='33px' width='88px' alt='dooo' />
                </div>
                <div className="flex justify-between gap-4 md:gap-8 items-center md:order-2">
                    <FiSearch size={25} className="md:mt-2 text-white cursor-pointer" />
                    <button className="text-white font-medium bg-gradient-to-r from-[#9A3EBF] via-[#C53660, #E93141] to-[#F98B51] rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 med-font"  onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
                <div className={`${show ? 'hidden' : 'none'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-mid md:font-medium items-center">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Category</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Tract For Business</a>
                        </li>
                        <li className='relative'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Teach on Tract</a>
                            <div className='absolute hidden bg-gradient-to-r from-[#9A3EBF] via-[#E93141] to-[#F98B51] md:flex justify-center items-center rounded-2xl text-white text-xs px-[4px] text-center top-[-15px] right-0'>
                                <p className='flex justify-center items-center'>new</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navigation
