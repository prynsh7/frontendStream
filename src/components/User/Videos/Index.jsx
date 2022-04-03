import Category from './Inputs/Category'
import Playlist from './Inputs/Playlist'
import Search from './Inputs/Search'
import TableData from './TableData'
import EmbedButton from './Inputs/EmbedButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SideNav from '../SideNav/Index'

const VideosList = () => {
    const router = useNavigate()
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    return (
        <div className='relative'>
            <SideNav stylevalue={styleValue} />

            <div className="rounded-t mb-0 px-4 py-3 border-0 relative">
                {/* Nav */}
                <div className='flex flex-row items-center gap-1 float-left absolute top-4 left-4 sm:hidden'>
                    <div onClick={showSideNav} className='flex sm:hidden'>
                        <img src='./Assets/home-bar.png' alt='bars' height='16px' width='21px' />
                    </div>
                    <div className='flex sm:hidden'>
                        <a href='/home' passHref>
                            <img src='./Assets/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
                        </a>
                    </div>
                </div >

                <div className="flex ml-16 sm:ml-0 gap-2 items-center">
                    <div className="cursor-pointer">
                        <a href='/manage-videos' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Videos</h1>
                        </a>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-sky-600">|</h3>
                    </div>
                    <div className="cursor-pointer">
                        <a href='/playlist' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Playlist</h1>
                        </a>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-sky-600">|</h3>
                    </div>
                    <div className="cursor-pointer">
                        <a href='/playlist' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Popups</h1>
                        </a>
                    </div>
                </div>
            </div>

            <section className="relative py-12 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">

                        <div className="flex flex-col sm:flex-row justify-between rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                <div className="flex items-start justify-start w-full">
                                    <Search />
                                </div>
                                <div className="flex flex-row gap-2 w-full">
                                    <Category />
                                    {router.pathname === '/playlist' && (<Playlist />)}
                                </div>
                            </div>

                            <div className='flex items-start w-full sm:w-auto sm:items-end sm:px-2 my-4 sm:my-0'>
                                {router.pathname === '/playlist' && (<EmbedButton />)}
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto ">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Move</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Videos(3 Total)</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Views</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Avg view duration</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Avg % viewed</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <TableData id={1} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />
                                    <TableData id={8} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default VideosList
