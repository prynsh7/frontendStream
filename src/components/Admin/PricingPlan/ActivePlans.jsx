import React from 'react'
import { useEffect, useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { RiDeleteBin5Line, RiShoppingCartLine } from 'react-icons/ri'
import Toggle from '../../User/Toogle/Toogle'


function ActivePlans(props) {
    const [addOn, setAddon] = useState();
  return (
    <div className='ActivePlans'>
        <div className='flex flex-col justify-center px-4'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='font-[500] text-md'>Active Pricing Plans</h1>
                    <hr className='w-[50%] border-t-black mt-1' />
                </div>
                <div className='flex justify-between gap-2 items-center'>
                    <h1 className='text-[#787C87]'>
                        Gold plan (100GB) - <span className='text-[#4954CB]'>$59/onetime</span>
                    </h1>
                    <div className='flex justify-between items-center gap-2'>
                        <Toggle />
                        <BsPencilFill size={20} />
                        <RiDeleteBin5Line size={20} />
                        <RiShoppingCartLine size={20} />
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className='font-[500] text-md'>Active Addons</h1>
                    <hr className='w-[50%] border-t-black mt-1' />
                </div>
                {addOn ? addOn.map((data, key) => {
                    return <div className='flex justify-between gap-2 items-center' key={key}>
                    <h1 className='text-[#C5C7CD]'>
                        {data.name} - <span className='text-[#4954CB]'>${data.price}/{data.type}</span>
                    </h1>
                    <div className='flex items-center justify-between gap-2'>
                        <Toggle />
                        <BsPencilFill size={20} />
                        <RiDeleteBin5Line size={20} />
                        <RiShoppingCartLine size={20} />
                    </div>
                </div>
                })
                 :<div>No addons present</div> }
                
                
            </div>
            <hr className='border-t-black mt-8' />
            <div className='flex justify-end gap-4 items-center my-2 buttonContainer'>
                <button onClick={() => props.showAddonForm('addon')} className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md my-2 py-2 px-4'>+ Add Addon</button>
                <button onClick={() => props.showPlanForm('plan')} className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md my-2 py-2 px-4'>+ Add Plan</button>
            </div>
        </div>
    </div>
  )
}

export default ActivePlans