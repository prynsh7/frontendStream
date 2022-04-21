import React, { useState, useEffect } from 'react'
import Addon from './Addon'
import { FiArrowUpRight } from 'react-icons/fi'
import * as addonTitles from './Titles'
import { allAddons } from './addonfiles'
import { GET_ADDON } from '../../../../Utils/apiConstant'
import axios from "axios"



const Addons = () => {

    const [addOn, setAddOn] = useState();

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

            if(i.active == true){
            if (i.trial == "true") {
                obj.title = i.name
                obj.imgpath= i.imgUrl
                obj.btntext = `$ ${i.price} / month`
                obj.description = i.description
                obj.trialtext = '(7 Day free trial available)'
                obj.btncolor = i.btncolor
                obj.bgcolor = i.bgcolor
            }else{
                obj.title = i.name
                obj.imgpath= i.imgUrl
                obj.btntext = `$ ${i.price} / month`
                obj.description = i.description
                obj.trialtext= ''
                obj.btncolor = 'bg-[#30D38B]'
                obj.bgcolor = 'bg-[#E5FFF4]'
            }

            arr.push(obj)
        }
    }
        await setAddOn(arr);
        console.log(arr)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='flex justify-center flex-col items-center bg-[#FBF9F6] min-h-[100vh]'>

            <h1 className='text-center text-2xl leading-9 font-[900] text-[#1E1E1F]'>Addons</h1>
            <h1 className='text-center text-xl font-[600] leading-6 text-[#1E1E1F]'>Get powerful addons to boost experience</h1>
            <div className='grid lg:grid-cols-2 gap-4 mx-2 md:mx-6 my-6'>
                {addOn && addOn.map((element, index) => (
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
        </div>
    )
}

export default Addons