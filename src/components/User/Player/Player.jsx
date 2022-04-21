import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Dropdown from '../Dropdown/Dropdown'
import Toggle from '../Toogle/Toogle'
import AddCallToAction from '../Video/AddCallToAction'
import AdvancedSettings from '../Video/AdvancedSettings'
import Controls from '../Video/Controls'
import LogoPosition from '../Video/LogoPosition'
import PutLogo from '../Video/PutLogo'
import PlayerTheme from './PlayerTheme'
import SideNav from '../SideNav/Index'
import './Player.scss'

const Player = () => {
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    return (
        <div className='relative Player'>
            <SideNav stylevalue={styleValue} />
            {/* Nav */}
            <div className='flex flex-row items-center gap-1 absolute -top-2 left-0 sm:hidden ml-2'>
                <div onClick={showSideNav} className='flex sm:hidden'>
                    <img src='./Assets/home-bar.png' alt='bars' height='16px' width='21px' />
                </div>
                <div className='flex sm:hidden'>
                    <a href='/home' passHref>
                        <img src='./Assets/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
                    </a>
                </div>
            </div >

            {/* Header settings page */}
            <div className='flex sm:gap-4 gap-2 justify-center items-center my-8'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl leading-9 m-auto text-[#1E1E1F] font-[800]'>Universal Player</h1>
                    <div className='lg:w-[60%] sm:w-[75%] w-[100%] mx-auto sm:mt-0 mt-3'>
                        <p className='text-[#1E1E1F] text-sm lg:text-xl sm:text-base mx-8 text-center'>Paste this script in your website’s header
                            to automatically apply our player to videos
                            that are alreday existed on your website you will add in future.</p>

                    </div>
                </div>
                <div className='text-center bg-[#EDD038] h-9 w-9 -mt-5'>
                </div>

            </div>


            <div className='lg:grid lg:grid-cols-2 lg:divide-x-2 divide-black mt-4'>
                {/* Left */}
                <div className=' SetDropdown w-[80%] m-auto'>
                    <div>
                        <h1 className='my-2 text-sm'>Select Player Theme</h1>
                        <PlayerTheme />
                    </div>
                    <div className='flex justify-between my-8'>
                        <AddCallToAction />
                        <div className='flex items-center'>
                            <button className='rounded-full px-1 border text-sm px-2'>FORCE</button>
                            <Toggle />
                        </div>
                    </div>
                    <Dropdown name={'Load below settings from this preset (Optional)'} />
                    <div className="flex justify-between mb-5 flex-col-2 gap-10 mt-2">
                        <div className='w-[50%] '>
                            <h1 className="text-dark text-sm font-semibold ">Control bar color</h1>
                            <div className="grid grid-cols-10 relative border-black border-[1px] rounded-md">
                                <span className="col-span-2 rounded-l-md inline-flex  items-center px-3 border-t bg-black text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="col-span-8 flex-1 rounded-r-md outline-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400" name="text" placeholder="#2b2a2a" />
                            </div>
                        </div>
                        <div className='w-[50%] '>
                            <h1 className="text-dark text-sm font-semibold">Play button color</h1>
                            <div className="grid grid-cols-10 relative border-black border-[1px] rounded-md">
                                <span className="col-span-2 rounded-l-md inline-flex  items-center px-3 border-t bg-[#787C87] text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="col-span-8 flex-1 rounded-r-md outline-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400" name="text" placeholder="#2b2a2a" />
                            </div>
                        </div>
                    </div>
                    <div className='gap-2 flex flex-col'>
                        <Controls />
                        <AdvancedSettings />

                    </div>
                    <div className='uploadSec grid grid-cols-12 gap-3 my-5'>
                        <div className="col-span-11">
                            <button
                                className="rounded-lg text-[#1E1E1F] border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] placeholder-gray-400 flex items-center shadow-sm text-base focus:border-transparent ">
                                <FiUpload size={20} className="mr-2" />
                                During muted autoplay show this image on top of video
                            </button>
                        </div>
                        <div className="col-span-1 flex items-center">

                            <RiDeleteBin6Line size={25} className="mx-1 cursor-pointer" />
                        </div>
                        <div className="gap-2 col-span-11 grid grid-cols-2">
                            <div className="col-span-1">
                                <PutLogo />
                            </div>
                            <div className="col-span-1">
                                <LogoPosition />
                            </div>
                        </div>
                        <input
                            type="text"
                            id="settings-preset"
                            className="col-span-10 rounded-lg border-transparent border-gray-300 w-full py-2 px-4 bg-[#F5F8FA] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-transparent"
                            placeholder="Enter name to save these settings as a new preset"
                        />
                        <button className='col-span-2 bg-[#EFF6FF] text-[#4954CB] rounded-lg'>
                            SAVE
                        </button>

                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <Toggle />
                            <p className='flex-grow w-96'>Auto-covert YouTube & Vimeo videos</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Toggle />
                            <p className='flex-grow w-96'>Impact & display closed caption from YouTube sources</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Toggle />
                            <p className='flex-grow w-96'>Auto-convert video files that are ending in MOV, MPG, AVI, FLV,
                                F4V, MP4, M4V, ASF, WMV, VOB, MOD, 3GP, MKV, DIVX, XVID, WEBM</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Toggle />
                            <p className='flex-grow w-96'>Auto-convert audio files that are ending in MP3, WAV, AIF, AU, M4A</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-center mt-4 mb-8 hidden'>
                        <button className='px-6 py-2 w-[280px] h-[40px] rounded-md text-white bg-black whitespace-nowrap'>Generate Script</button>
                    </div>
                </div>

                {/* Border */}
                <hr className='lg:hidden w-full border-t-black border-t-2 my-8 px-2' />
                {/* Right */}
                <div className=''>
                    <div className='grid grid-cols-2 gap-2 w-[80%] m-auto'>
                        <div className='col-span-2 flex justify-center flex-col items-center'>
                            <video height='270px' width='100%' src="" controls></video>
                        </div>
                        <div className="col-span-2 flex border justify-between my-4 min-h-[200px] py-4 px-4 rounded-xl bg-[#CBD5E0]">
                            <p className='w-[100%]'>
                                Script text
                            </p>
                        </div>
                        <div className='flex justify-center  sm:col-end-3 sm:col-span-1 col-span-2 '>
                            <button className='py-2 px-8 text-[#3F48CC] bg-[#EFF6FF] rounded-md font-semibold sm:w-[90%] w-[80%]'>Copy this script</button>
                        </div>
                        <div className="col-span-2 my-4">
                            <h1 className='text-base text-[#3F48CC] font-semibold mb-2'>NOTE FOR DEVELOPER</h1>
                            <div className='text-sm p-6 border-[#3F48CC] border text-justify'>
                                Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.
                            </div>
                        </div>
                        <div className='flex justify-center mt-4 mb-8 lg:hidden col-span-2 w-full'>
                            <button className='px-6 py-2 w-[280px] h-[40px] rounded-md text-white bg-black whitespace-nowrap'>Generate Script</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
