import Input from "./Input"
import { BsPlay } from 'react-icons/bs'
import Category from "./Categories"
import Playlist from "./PlayList"
import { FiPlus, FiUpload } from "react-icons/fi"
import { MdOutlineContentCopy } from 'react-icons/md'
import Presets from "./Presets"
import AdvancedSettings from "./AdvancedSettings"
import Controls from "./Controls"
import PutLogo from "./PutLogo"
import LogoPosition from "./LogoPosition"
import { RiDeleteBin6Line } from 'react-icons/ri'
import Addcard from "./Addcard"
import AddCaption from "./Addcaption"
import Addchapter from "./Addchapter"
import AddCallToAction from "./AddCallToAction"
// import PlayerTheme from "../Player/PlayerTheme"
import Toggle from "../Toogle/Toogle"
import { useState } from "react"
// import SideNav from "../SideNav"

const Video = () => {
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    const handleChange = (e) => {
        //...
    }

    return (
        <div className="mt-16">
            {/* <SideNav stylevalue={styleValue} /> */}
            {/* Nav */}
            <div className='flex flex-row items-center gap-1 float-left absolute top-5 left-0 sm:hidden mx-8'>
                <div className='flex sm:hidden' onClick={showSideNav}>
                    <img src='./Assets/home-bar.png' alt='bars' height='16px' width='21px' />
                </div>
                <div className='flex sm:hidden'>
                    <a href='/home' passHref>
                        <img src='./Assets/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
                    </a>
                </div>

            </div >

            {/* Header --> Loader and camcel button */}
            <div className="grid justify-items-stretch mx-8">
                <div className="flex sm:items-center flex-col sm:flex-row sm:justify-around">
                    <div className="w-full sm:w-[35%] rounded-full justify-self-center items-center">
                        <div className=" bg-[#000000] text-xs font-medium text-white text-center p-2 leading-none rounded-full">Uploading 45%...30 seconds left!</div>
                    </div>
                    <div className="sm:justify-self-start">
                        <button className="rounded-full w-full sm:w-auto border-[1px] border-[#787C87] text-[#1E1E1F] py-1 px-6 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9]">Cancel</button>
                    </div>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:divide-x-2 divide-black mt-4">
                {/* COLUMN 1 --> Left */}
                <div className="col-span-1 mb-8 lg:mb-0">
                    <div className="mx-8">
                        <div className="">
                            <Input name={""} placeholder={"Enter video title here"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-2 my-2">
                            <div className="flex justify-center items-center w-24 sm:flex-grow flex-col h-[66px] border-[1px] border-dashed">
                                <p className="text-center">
                                    <img src="./Assets/thumbnail-vector.png" height='18px' width='18px' alt='thumbnail' />
                                </p>
                                <p className="text-xs text-center">Upload thumbnail</p>
                            </div>
                            <div className="flex sm:flex-grow w-[120px] h-[66px] relative">
                                <img src='./Assets/space.png' className="absolute object-fill" alt="space" layout="fill" />
                            </div>
                            <div className="flex sm:flex-grow w-[120px] h-[66px] relative">
                                <img src='./Assets/1-rocket.png' className="absolute object-fill" alt="rocket" layout="fill" />
                            </div>
                            <div className="flex justify-center items-center w-24 sm:flex-grow h-[66px] border-[1px] border-dashed flex-col">
                                <p className="text-center">
                                    <img className="items-center" src="./Assets/thumbnail-vector.png" height='18px' width='18px' alt='thumbnail' />
                                </p>
                                <p className="text-xs text-center">Use Current Frame</p>
                            </div>
                        </div>
                        {/* <PlayerTheme /> */}
                        <div>
                            <Input name={""} placeholder={"Enter password to protect the video(s) (Optional)"} type={"password"} onChange={handleChange} id={""} value={""} />
                        </div>
                        <div className="flex justify-between gap-2">
                            <Category />
                            <Playlist />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex justify-between">
                                <Addcard />
                                <Toggle />
                            </div>
                            <div className="flex justify-between">
                                <AddCaption />
                                <Toggle />
                            </div>
                            <div className="flex justify-between">
                                <Addchapter />
                                <Toggle />
                            </div>
                            <div className="flex justify-between">
                                <AddCallToAction />
                                <div className="flex gap-1 items-center">
                                    <button className="border rounded-full px-1 text-xs">FORCE</button>
                                    <Toggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* COLUMN 2 ---> Right */}
                <div className="col-span-1 mt-16 lg:mt-0">
                    <div className="mx-8">
                        <div className="">
                            <div className="flex justify-center flex-col items-center bg-[#F8F8F8]">
                                <video className="flex flex-grow w-96 h-auto" src="" controls></video>
                                <div className="flex justify-between items-center pt-2 px-2">
                                    <h1>Video a</h1>
                                    <MdOutlineContentCopy />
                                </div>
                            </div>

                            <a href="" className="px-2 text-sky-500 underline">
                                https://dooo/md/watch
                            </a>
                            <div className="p-2">
                                <p>Filename</p>
                                <h1 className="text-black font-bold">Update.mp4</h1>
                            </div>
                        </div>
                        <div className="m-auto w-full">
                            <Presets />
                        </div>
                        <div className="flex flex-col-2 gap-2 mt-2">
                            <div>
                                <h1 className="text-dark font-bold">Control bar color</h1>
                                <div className="flex relative border rounded-l-md">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-[#2b2a2a] text-gray-500 text-sm">
                                    </span>
                                    <input
                                        type="text"
                                        id="color-with-icon"
                                        className="rounded-r-lg flex-1 outline-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400" name="text" placeholder="#2b2a2a" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-dark font-bold">Play button color</h1>
                                <div className="flex relative border rounded-l-md">
                                    <span className="rounded-l-md inline-flex items-center px-3 bg-[#6d6a6a] border-gray-300 text-gray-500 text-sm">
                                    </span>
                                    <input
                                        type="text"
                                        id="color-with-icon"
                                        className="flex-1 border-0 w-full outline-none py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base"
                                        name="text"
                                        placeholder="#6d6a6a" />
                                </div>
                            </div>
                        </div>
                        <div className="my-2">
                            <Controls />
                            <AdvancedSettings />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="text-[#1E1E1F] border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] placeholder-gray-400 flex items-center shadow-sm text-base focus:border-transparent py-2 my-3">
                                <FiUpload size={20} className="mr-2" />
                                During muted autoplay show this image on top of video
                            </button>
                            <RiDeleteBin6Line size={20} className="mx-1" />
                        </div>
                        <div className="flex flex-col-2 gap-2 justify-between">
                            <PutLogo />
                            <LogoPosition />
                        </div>
                        <div className="flex justify-between gap-2 mt-2 mb-4">

                            <input
                                type="text"
                                id="settings-preset"
                                className="rounded-lg border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-transparent"
                                placeholder="Enter name to save these settings as a new preset"
                            />
                            <button className="rounded-md font-bold border-[1px] border-[#787C87] text-[#4954CB] py-2 px-2 bg-[#F7F7F7]">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video