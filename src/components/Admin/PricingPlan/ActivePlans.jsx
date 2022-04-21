import axios from 'axios'
import cogoToast from 'cogo-toast'
import React from 'react'
import { useEffect, useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { RiDeleteBin5Line, RiShoppingCartLine } from 'react-icons/ri'
import { DELETE_ADDON, GET_ADDON, UPDATE_ADDON } from '../../../Utils/apiConstant'
import Loader from '../../User/Loader/Loader'
import Toggle from './ToogleAddon'


function ActivePlans({ trigger, setTrigger, showAddonForm, showPlanForm, setAddonData }) {
    const [addOn, setAddon] = useState();
    const [pricingPlan, setPricingPlan] = useState();
    const [active, setActive] = useState();

    const [loading, setLoading] = useState(false);

    const getData = async () => {
        await axios.get(GET_ADDON)
            .then(res => {
                setAddon(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [trigger])


    const handleUpdate = (data) => {

        axios.put(`${UPDATE_ADDON}/${data._id}`, {active: !data.active})
        .then(res => {
            console.log(res);
            setTrigger(prev => !prev);
        })
        .catch(err => {
            console.log(err);
        })

    }


    const deletePlan = async (e, id) => {

        e.preventDefault();

        setLoading(true)

        await axios.delete(`${DELETE_ADDON}/${id}`)
            .then(res => {
                if (res.data.success) {
                    setTrigger(false);
                    cogoToast.success("addon Deleted successfully")
                }
            })
            .catch(err => {
                console.log(err)
            })

        setLoading(false);

    }



    return (
        <div className='ActivePlans'>
            <Loader loading={loading} />
            <div className='flex flex-col justify-center px-4'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-[500] text-md'>Active Pricing Plans</h1>
                        <hr className='w-[50%] border-t-black mt-1' />
                    </div>
                    <div className='flex justify-between gap-2 items-center'>
                        {
                            pricingPlan ? pricingPlan.map((data, key) => {
                                return <><h1 className='text-[#787C87]'>
                        {data.name} (100GB) - <span className='text-[#4954CB]'>${data.price}/{data.type}</span>
                    </h1>
                        
                    <div className='flex justify-between items-center gap-2'>
                        <Toggle active={data.active} />    
                        <BsPencilFill size={20} />
                        <RiDeleteBin5Line size={20} />
                        <RiShoppingCartLine size={20} />
                    </div>
                    </>
                            }) 
                            :
                            <h6>No plans present</h6> 
                        }
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
                            
                            <div >

                            <Toggle active={data.active}  handleChange={() => handleUpdate(data)}/>     
                            </div>
                            
                                <div onClick={() => {showAddonForm('addon'); setAddonData(data)}}>

                                <BsPencilFill size={20} />
                                </div>
                                <div onClick={(e) => deletePlan(e, data._id)}>
                                    <RiDeleteBin5Line size={20} />
                                </div>
                                <RiShoppingCartLine size={20} />
                            </div>
                        </div>
                    })
                        : <h6>No addons present</h6>}


                </div>
                <hr className='border-t-black mt-8' />
                <div className='flex justify-end gap-4 items-center my-2 buttonContainer'>
                    <button onClick={() => showAddonForm('addon')} className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md my-2 py-2 px-4'>+ Add Addon</button>
                    <button onClick={() => showPlanForm('plan')} className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md my-2 py-2 px-4'>+ Add Plan</button>
                </div>
            </div>
        </div>
    )
}

export default ActivePlans