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

const Player = () => {
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    return (
        <div className='relative'>
            <SideNav stylevalue={styleValue} />
            {/* Nav */}
            <div className='flex flex-row items-center gap-1 absolute top-1 left-0 sm:hidden ml-2'>
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
            <div className='flex gap-4 justify-center items-center my-8'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-xl leading-9 m-auto text-[#1E1E1F] font-[800]'>Universal Player</h1>
                    <p className='text-[#1E1E1F] text-xs sm:text-sm md:text-md mx-8'>Paste this script in your website’s header
                        to automatically apply our player to videos
                        that are alreday existed on your website you will add in future.</p>
                </div>

            </div>

            <div className='text-center bg-[#EDD038] h-9 w-9 absolute -top-2 right-0 m-2'>
            </div>

            <div className='lg:grid lg:grid-cols-2 lg:divide-x-2 divide-black mt-4'>
                {/* Left */}
                <div className='mx-2 sm:mx-4 md:mx-8'>
                    <div>
                        <h1 className='my-2 text-sm'>Select Player Theme</h1>
                        <PlayerTheme />
                    </div>
                    <div className='flex justify-between my-8'>
                        <AddCallToAction />
                        <div className='flex items-center'>
                            <button className='rounded-full px-1 border text-xs'>FORCE</button>
                            <Toggle />
                        </div>
                    </div>
                    <Dropdown name={'Load below settings from this preset (Optional)'} />
                    <div className="flex justify-between flex-col-2 gap-2 mt-2">
                        <div>
                            <h1 className="text-dark text-sm font-semibold">Control bar color</h1>
                            <div className="flex relative border-black border-[1px] rounded-md">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-black text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="flex-1 outline-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400" name="text" placeholder="#2b2a2a" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-dark text-sm font-semibold">Play button color</h1>
                            <div className="flex border-black border-[1px] rounded-md">
                                <span className="rounded-l-md items-center px-3 bg-black text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="flex-1 border-0 w-full outline-none py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base" name="text" placeholder="#6d6a6a" />
                            </div>
                        </div>
                    </div>
                    <Controls />
                    <AdvancedSettings />
                    <div className="flex items-center justify-between">
                        <button
                            className="text-[#1E1E1F] border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] placeholder-gray-400 flex items-center shadow-sm text-base focus:border-transparent py-2 my-3">
                            <FiUpload size={20} className="mr-2" />
                            During muted autoplay show this image on top of video
                        </button>
                        <RiDeleteBin6Line size={25} className="mx-1 cursor-pointer" />
                    </div>
                    <div className="flex flex-col-2 gap-2 justify-between">
                        <PutLogo />
                        <LogoPosition />
                    </div>
                    <div className="flex justify-between gap-2 mt-2 mb-4">
                        <input
                            type="text"
                            id="settings-preset"
                            className="rounded-lg border-transparent border-gray-300 w-full py-2 px-4 bg-[#F5F8FA] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-transparent"
                            placeholder="Enter name to save these settings as a new preset"
                        />
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
                    <div className='flex justify-center mt-4 mb-8'>
                        <button className='px-6 py-2 rounded-md text-white bg-black whitespace-nowrap'>Generate Script</button>
                    </div>
                </div>

                {/* Border */}
                <hr className='lg:hidden w-full border-t-black border-t-2 my-8 px-2' />
                {/* Right */}
                <div className=''>
                    <div className='mx-2 sm:mx-4 md:mx-8'>
                        <h1 className='text-center'>Preview</h1>
                        <div className='flex justify-center flex-col items-center'>
                            <video height='270px' width='482px' src="" controls></video>
                        </div>
                        <div className="flex border justify-between my-4 h-[200px] pt-2 px-2">
                            <h1>
                                script text
                            </h1>
                        </div>
                        <div className='flex justify-end'>
                            <button className='py-2 px-8 text-[#3F48CC] bg-[#EFF6FF] rounded-md font-semibold'>Copy this script</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
