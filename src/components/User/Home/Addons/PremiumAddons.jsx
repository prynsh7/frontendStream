import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Addon from './Addon'
import { premiumAddons } from './addonfiles'

const PremiumAddons = () => {
    let color = '900'
    return (
        <div className='flex justify-center flex-col items-center bg-[#FBF9F6]'>
            <h1 className='text-center text-2xl leading-9 font-[700] text-[#1E1E1F]'>Premium Addons</h1>
            <h1 className='text-center text-xl font-[600] leading-6 text-[#1E1E1F]'>Get powerful addons to boost experience</h1>
            <div className='grid lg:grid-cols-2 gap-4 mx-2 md:mx-6 my-6'>
                {premiumAddons.map((element, index) => (
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
            <div className='flex justify-center mb-16'>
                <a href='/addons' passHref>
                    <button className='flex bg-[#EFF2F5] items-center font-bold py-2 px-4 text-[#1E1E1F] rounded'>More<FiArrowUpRight /></button>
                </a>
            </div>
        </div>
    )
}

export default PremiumAddons