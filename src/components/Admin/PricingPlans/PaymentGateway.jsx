import React from 'react'
import Input from '../../User/Input/Input'

const PaymentGateway = () => {

    const handleChange = () => {

    }

    return (
        <div className='px-4'>
            <div className='my-2'>
                <h1 className='font-bold text-md'>Setup Payment Gateways</h1>
                <hr className='w-[50%] border-t-black mt-1' />
            </div>
            <form className='flex justify-center flex-col' action="">
                <div className=''>
                    <Input name={''} placeholder={'Enter PayPal email to enable PayPal on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                    <Input name={''} placeholder={'Enter Stripe Secret Key to enable Stripe on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                    <Input name={''} placeholder={'Enter 2checkout key to enable 2Checkout on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                </div>
                <div className='flex justify-between items-center'>
                    <button className='px-6 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Save</button>
                    <div className='flex gap-1 items-center'>
                        <input type="checkbox" className="checkbox w-4 h-4 cursor-pointer" />
                        <h1>Enable sandbox/testing node</h1>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentGateway