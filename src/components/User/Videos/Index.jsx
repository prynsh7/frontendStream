import Category from './Inputs/Category'
import Playlist from './Inputs/Playlist'
import Search from './Inputs/Search'
import TableData from './TableData'
import EmbedButton from './Inputs/EmbedButton'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import SideNav from '../SideNav/Index'
import './Videos.scss'
import { ImCross } from "react-icons/im";
import Input from '../Input/Input'
import Select from '../Input/Select'
import Loader from '../Loader/Loader'


const VideosList = () => {

    const [libid, setlibid] = useState(localStorage.getItem('libid'));
    const [apikey, setapikey] = useState(localStorage.getItem('apikey'));
    const [cdn, setCdn] = useState(localStorage.getItem('cdn'));
    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState();


    const router = useNavigate()
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    const GetAll = async () => {

        setLoading(true)

        await axios
            .get(`http://video.bunnycdn.com/library/${libid}/videos`, {
                headers: {
                    Accept: 'application/json',
                    libraryId: libid,
                    AccessKey: apikey,
                }
            }
            ).then(res => {
                setVideos(res.data.items);
            })
        
        setLoading(false)

    }


    useEffect(() => {
    
        GetAll();
    
    }, [])


    return (
        <div className='relative Videos h-[100vh] '>
            <SideNav stylevalue={styleValue} />

            <div className="rounded-t mb-0 px-4 py-3 border-0 relative">
                {/* Nav */}
                <Loader loading={loading} />
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

            </div>


            <section className="relative bg-blueGray-50 ">
                <div className="w-full mb-12 px-4 shadow-lg ">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded sm:w-[92%] mr-auto">

                        <div className="flex flex-col sm:flex-row justify-between rounded-t mb-0 px-4 py-3 pt-1 border-0">
                            <div className="grid w-full grid-cols-10 gap-5 items-center">
                                <div className="col-span-7 flex flex-col justify-start gap-10 mt-0 h-full">
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
                                    <div className="flex flex-row gap-2">
                                        <div className="flex items-start justify-start w-full searchInput">
                                            <Search />
                                        </div>
                                        <div className="flex flex-row w-full catHeight">
                                            <Category />
                                        </div>
                                        <div className="flex flex-row w-full catHeight">
                                            <Category />
                                        </div>
                                    </div>

                                </div>

                                <div className="col-span-3 grid grid-cols-6 px-5 pr-0">
                                    <div className="col-span-5 borderDot">
                                        <Input placeholder="Embed This Playlist" />
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center">
                                        <div className='border p-3'>
                                            <ImCross />
                                        </div>
                                    </div>
                                    <div className="col-span-6 selectHeight">
                                        <Select name="Player Name" />
                                    </div>
                                    <div className="col-span-6 selectHeight">
                                        <Select name="Playlist Name" />
                                    </div>
                                    <div className="col-span-4">
                                        <button className='w-full px-6 py-2 text-white bg-[#1E1E1F] font-[600] rounded mt-1'>Copy Embeded Code</button>
                                    </div>

                                </div>
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

                                {
                                    videos ? videos.map((data, key) => {

                                    return <TableData id={8} thumbnail={'/Assets/space.png'} title={data.title} date={'Feb 17, 2021'} views={data.views} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />

                                    }) : null
                                }

                                    
                                    <TableData id={8} thumbnail={'/Assets/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />

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
