import React from 'react'
import Addon from './Addon'
import { FiArrowUpRight } from 'react-icons/fi'
import * as addonTitles from './Titles'
import { allAddons } from './addonfiles'

const Addons = () => {
    return (
        <div className='flex justify-center flex-col items-center bg-[#FBF9F6]'>
            <h1 className='text-center text-2xl leading-9 font-[900] text-[#1E1E1F]'>Addons</h1>
            <h1 className='text-center text-xl font-[600] leading-6 text-[#1E1E1F]'>Get powerful addons to boost experience</h1>
            <div className='grid lg:grid-cols-2 gap-4 mx-2 md:mx-6 my-6'>
                {allAddons.map((element, index) => (
                    <Addon
                        key={index}
                        title={element.title}
                        btntxt={element.btntext}
                        imgpath={element.imgpath}
                        trialtxt={element.trialtext}
                        btncolor={element.btncolor}
                        bgcolor={element.bgcolor}
                    />
                ))}
            </div>
        </div>
    )
}

export default Addons