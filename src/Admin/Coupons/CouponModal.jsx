import React from 'react'
import { BiUpload } from 'react-icons/bi'
import Input from '../../User/Input/Input'
import Select from '../../User/Input/Select'

const CouponModal = (props) => {
    const handleChange = () => {
        //...
    }
    return (
        <div className={`${props.modalStyle} py-12 bg-[#383838] opacity-95 transition duration-150 ease-in-out z-10 absolute left-0 right-0 top-0 bottom-0`} id="modal">
            <div role="alert" className="container mx-auto w-11/12 max-w-2xl">
                <div className='px-12 rounded-t relative py-4 bg-[#F2F5FA]'>
                    <h1 className='text-lg text-black font-[700]'>Add Coupons</h1>
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={props.handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
                <div className="relative py-8 px-5 md:px-12 bg-white shadow-md border-gray-400">
                    <form className='flex flex-col justify-center' action="">
                        <button className='flex justify-center gap-2 items-center bg-[#F4F7F9] py-2 w-full rounded-md'><BiUpload size={15} />Upload coupons in csv</button>
                        <div className='flex justify-between gap-4'>
                            <Input name={''} placeholder={'Enter amount or %'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Select name={'Fixed/Percentage'} />
                        </div>
                        <Select name={'Coupon expiry date  DD/MM/YY'} />
                        <Select name={'Coupons are valid for these plans'} />
                        <Select name={'Coupons are valid for these Addons'} />
                        <Input name={''} placeholder={'Usage limit per coupon'} type={'text'} onChange={handleChange} id={''} value={''} />
                        <Input name={''} placeholder={'Usage limit per user'} type={'text'} onChange={handleChange} id={''} value={''} />
                        <div className='flex justify-between gap-2 my-2'>
                            <input type='checkbox' className='' /><span>For new users only</span>
                        </div>
                        <button className='flex text-white justify-center items-center rounded-md bg-[#181D31] my-2 py-2 w-full'>Add Coupons</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CouponModal