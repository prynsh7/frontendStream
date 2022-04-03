import React, { useState } from 'react'
import Input from '../Inputs/Input'
import Select from '../Inputs/Select'
import Pagination from '../ManageUsers/Pagination'
import CouponModal from './CouponModal'

const Header = () => {
    const [hide, setHide] = useState(true)

    function modalHandler() {
        setHide(!hide)
    }
    const modalStyle = hide ? 'hidden' : 'none'

    const handleChange = (e) => {
        //...
    }

    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center gap-2 mt-8">
                <h1 className="text-2xl font-[600]">Coupons</h1>
            </div>
            <div className="flex justify-between items-center my-2">
                <div className="flex flex-row items-center gap-2">
                    <h1>Total Coupons - 2</h1>
                </div>
                <button className="text-white bg-[#1E1E1F] py-2 px-4 rounded-lg whitespace-nowrap items-center">
                    Export in csv
                </button>
            </div>
            <div className="flex justify-between items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                    <button className="py-1 px-4 text-[#9A2F3A] bg-[#FCDECE] whitespace-nowrap text-sm rounded-md">Bulk Remove</button>
                </div>
                <div className="flex justify-center gap-2 items-center flex-row">
                    <div className="flex gap-2 items-center">
                        <Input name={""} placeholder={"Search coupons"} type={"text"} onChange={handleChange} id={""} value={""} />
                        <button className="py-1 px-4 text-[#4954CB] bg-[#EFF6FF] text-sm rounded-xl">Search</button>
                    </div>
                    <div>
                        <Select name={"20"} />
                    </div>
                    <Pagination />
                </div>
                <button
                    onClick={() => modalHandler()}
                    className="text-white bg-[#1E1E1F] py-2 px-4 rounded-lg whitespace-nowrap items-center">
                    Add coupons
                </button>
            </div>
            <CouponModal modalStyle={modalStyle} handleModal={modalHandler} />
        </div>
    )
}

export default Header