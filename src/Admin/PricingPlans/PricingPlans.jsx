import React, { useState } from 'react'
import ActivePlans from './ActivePlans'
import AddAddon from './AddAddon'
import AddPlan from './AddPlan'
import PaymentGateway from './PaymentGateway'


function PricingPlans() {

    const [show, setShow] = useState(false)
    const [id, setId] = useState('')

    const showAddonForm = (id) => {
        setShow(!show)
        setId(id)
    }

    const showPlanForm = (id) => {
        setShow(!show)
        setId(id)
    }
    const handleChange = () => {
        //...
    }


  return (
    <div className='mt-4'>
            <div className='mb-16'>
                <h1 className='font-[600] text-2xl text-center'>Pricing Plans</h1>
            </div>
            <div className='flex divide-black divide-x-2'>
                <div className='basis-1/2'>
                    <PaymentGateway />
                </div>
                <div className='basis-1/2'>
                    <ActivePlans showAddonForm={showAddonForm} showPlanForm={showPlanForm} />
                    {show && id === 'addon' && <AddAddon />}
                    {show && id === 'plan' && <AddPlan />}
                </div>
            </div>
        </div>
  )
}

export default PricingPlans