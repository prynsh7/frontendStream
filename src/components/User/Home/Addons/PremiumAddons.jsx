import React, {useEffect, useState} from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Addon from './Addon'
import { premiumAddons } from './addonfiles'
import axios from 'axios'
import { GET_ADDON } from '../../../../Utils/apiConstant'

const PremiumAddons = () => {


    const [addon, setAddon] = useState();

    const getData = async () => {
        await axios.get(GET_ADDON)
            .then(res => {
                filterAddon(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const filterAddon = async (data) => {

        var arr = []

        for (var i of data) {

            var obj = {}

            if (i.trial == "yes") {
                obj.title = i.name
                obj.description = i.description
                obj.imgpath = "./Assets/water-can.png"
                obj.btntext = `$ ${i.price}`
                obj.trialtext = '(7 Day free trial available)'
                obj.btncolor = 'bg-[#21ABF9]'
                obj.bgcolor = 'bg-[#EFF9FF]'
            }else{
                obj.title = i.name
                obj.description = i.description
                obj.imgpath= './Assets/hand-icon.png'
                obj.btntext = `$ ${i.price}`
                obj.trialtext= ''
                obj.btncolor = 'bg-[#30D38B]'
                obj.bgcolor = 'bg-[#E5FFF4]'
            }

            arr.push(obj)
        }

        await setAddon(arr);

    }

    useEffect(() => {
        getData()
    }, [])


    let color = '900'
    return (
        <div className='flex justify-center flex-col items-center bg-[#FBF9F6]'>
            <h1 className='text-center text-2xl leading-9 font-[700] text-[#1E1E1F]'>Premium Addons</h1>
            <h1 className='text-center text-xl font-[600] leading-6 text-[#1E1E1F]'>Get powerful addons to boost experience</h1>
            <div className='grid lg:grid-cols-2 gap-4 mx-2 md:mx-6 my-6'>
                {addon && addon.map((element, index) => (
                    <Addon
                        key={index}
                        title={element.title}
                        btntxt={element.btntext}
                        imgpath={element.imgpath}
                        trialtxt={element.trialtext}
                        btncolor={element.btncolor}
                        bgcolor={element.bgcolor}
                        description={element.description}
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