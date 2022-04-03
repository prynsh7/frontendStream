import React from 'react'
import { RiDashboardLine, RiCoupon3Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { CgLoadbarSound } from 'react-icons/cg'
import { BiEditAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import './Dashboard.scss'


function Sidebar() {

    const router = useLocation()

    let bg = 'bg-gradient-to-r text-white'
    return (
        <aside className="absolute bottom-0 top-0 left-0 shadow-2xl w-[15%] sidebar">
            <div className="overflow-y-auto py-4 ">
                <div className="flex mb-5 pl-4 items-center logo">
                    <img src='./Assets/ellipse_1.png' className='text-black cursor-pointer' alt='dooo' height='33px' width='23px' />
                    <img src='./Assets/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <img src='./Assets/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <img src='./Assets/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                </div>
                <ul className="space-y-2 flex flex-col gap-4 absolute top-32 w-[100%]">
                    <li className={`flex font-semibold items-center ${router.pathname === '/dashboard' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] px-1 py-3 gap-2 whitespace-nowrap`}>
                        <RiDashboardLine size={20} />
                        <a href='/dashboard' passHref>
                            Dashboard
                        </a>
                    </li>
                    <li className={`flex ${router.pathname === '/manage-users' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] font-semibold items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <FiUsers size={20} />
                        <a href='/manage-users' passHref>
                            Manage Users
                        </a>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/pricing' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <CgLoadbarSound size={20} />
                        <a href='/pricing' passHref>
                            Pricing Plans
                        </a>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/coupons' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <RiCoupon3Line size={20} />
                        <a href='/coupons' passHref>
                            Coupons
                        </a>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/notifications' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <BiEditAlt size={20} />
                        <a href='/notifications' passHref>
                            Send Notification
                        </a>
                    </li>
                </ul>
            </div >
        </aside >
    )
}

export default Sidebar