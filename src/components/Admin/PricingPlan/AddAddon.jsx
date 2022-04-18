import React, { useState } from 'react'
import { BiCamera } from 'react-icons/bi'
import Input from '../../User/Input/Input'
import Select from '../../User/Input/Select'
import axios from "axios"
import { ADD_ADDON } from '../../../Utils/apiConstant'
import cogoToast from 'cogo-toast'
import Loader from '../../User/Loader/Loader'



function AddAddon({setTrigger}) {

    const [loading, setLoading] = useState(false)

    const optionsType = [
        { value: 'Every Month', label: 'Every Month' },
        { value: 'One Time', label: 'One Time' },
      ]

      const optionsFreeTrial = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ]
    

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState();
    const [coupons, setCoupons] = useState();
    const [trial, setTrial] = useState()
    
    
    
    const handleChange = async(e) => {

        e.preventDefault()

        setLoading(true)

        const obj = {
            "name": name,
            "description": description,
            "price": price,
            "type": type,
            "coupons": coupons,
            "trial": trial,
            "active": true
        }

        await axios.post(ADD_ADDON, obj)
        .then(res => {
            if(res.data.success){
                cogoToast.success("addon Added successFully");
                setTrigger(true);
            }
        })
        .catch(err => {
            cogoToast.error(err.response.data.message)
        })

        setLoading(false)



    }


    return (
        <div className='AddAddon'>
            <Loader loading={loading} />
            <form className='grid m-4'>
                <div className='col-span-2'>
                    <div className='flex gap-2 justify-between'>
                        <Input name={''} placeholder={'Enter Addon name'} type={'text'} onChange={(e) => setName(e.target.value)} id={''} value={name} />
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <Input name={''} placeholder={'Enter description'} type={'text'} onChange={(e) => setDescription(e.target.value)} id={''} value={description} />
                    </div>
                    {/* <div className='flex gap-2 justify-between'>
                        <Select name={'Select premium Addon'} />
                    </div> */}
                    <div className='grid grid-cols-3 gap-2 justify-between'>
                        <div className='col-span-1'>
                            <Input name={''} placeholder={'Enter price $'} type={'number'} onChange={(e) => setPrice(e.target.value)} id={''} value={price} />
                        </div>
                        <div className='col-span-2'>
                            <Select name={'Every month / OneTime'} options={optionsType} placeholder={"Select Type"} setSelected={setType}/>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <Input name={''} placeholder={'Coupons required for this Addon'} type={'text'} onChange={(e) => setCoupons(e.target.value) } id={''} value={coupons} />
                    </div>
                    {/* <div className='flex gap-2 justify-between'>
                        <Select name={'Enable for these plans by default'}   />
                    </div> */}
                    <div className='flex gap-2 justify-between'>
                        <Select name={'Free Trial (7 Days) YES/NO'} options={optionsFreeTrial} placeholder={"Free Trial (7 Days)"} setSelected={setTrial}/>
                    </div>
                    <div className='flex my-2 gap-2 items-center'>
                        <input type="checkbox" />
                        <span className='text-xs whitespace-nowrap text-black font-semibold'>Make it private and don&apos;t show this within user panel</span>
                    </div>
                    <div className='flex items-start my-4'>
                        <button className='px-6 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded' onClick={(e) => handleChange(e)} >Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddAddon