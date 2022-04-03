import React, { useState } from 'react'
import { BiCamera } from 'react-icons/bi'
import Input from '../../User/Input/Input'
import Select from '../../User/Input/Select'

function AddAddon() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('one Time');
    const handleChange = () => {
        //--
    }


  return (
    <div>
        <form className='grid grid-cols-3 m-4'>
            <div className='col-span-2'>
                <div className='flex gap-2 justify-between'>
                    <Input name={''} placeholder={'Enter Addon name'} type={'text'} onChange={(e) => setName(e.target.value)} id={''} value={name} />
                </div>
                <div className='flex gap-2 justify-between'>
                    <Input name={''} placeholder={'Enter description'} type={'text'} onChange={(e) => setDescription(e.target.value)} id={''} value={description} />
                </div>
                <div className='flex gap-2 justify-between'>
                    <Select name={'Select premium Addon'} />
                </div>
                <div className='grid grid-cols-3 gap-2 justify-between'>
                    <div className='col-span-1'>
                        <Input name={''} placeholder={'Enter price $'} type={'number'} onChange={(e) => setPrice(e.target.value)} id={''} value={price} />
                    </div>
                    <div className='col-span-2'>
                        <Select name={'Every month / OneTime'} />
                    </div>
                </div>
                <div className='flex gap-2 justify-between'>
                    <Input name={''} placeholder={'Coupons required for this Addon'} type={'text'} onChange={handleChange} id={''} value={''} />
                </div>
                <div className='flex gap-2 justify-between'>
                    <Select name={'Enable for these plans by default'} />
                </div>
                <div className='flex gap-2 justify-between'>
                    <Select name={'Free Trial (7 Days)    YES/NO'} />
                </div>
                <div className='flex my-2 gap-2 justify-between items-center'>
                    <input type="checkbox" />
                    <span className='text-xs whitespace-nowrap text-black font-semibold'>Make it private and don&apos;t show this within user panel</span>
                </div>
                <div className='flex items-start my-4'>
                    <button className='px-6 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded' >Add</button>
                </div>
            </div>
            <div className='span-col-1'>
                <BiCamera className='mt-3 ml-3 cursor-pointer' size={25} />
            </div>
        </form>
    </div>
  )
}

export default AddAddon