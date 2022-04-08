import React from 'react'
import Input from '../Inputs/Input'
import Select from '../Inputs/Select'
import Pagination from '../ManageUsers/Pagination'

const Header = () => {

    const handleChange = () => {
        //...
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-1 my-16">
                <h1 className="text-2xl font-[600] ">Websites List</h1>
                <p>where people have embedded Dooo videos</p>
            </div>
            <div className="flex justify-between items-center gap-2">
                <div className="flex justify-between gap-2 items-center flex-row">
                    <div className="flex gap-2 items-center">
                        <Input name={""} placeholder={"Search Website"} type={"text"} onChange={handleChange} id={""} value={""} />
                        <button className="py-1 px-4 text-[#4954CB] bg-[#EFF6FF] text-sm rounded-xl">Search</button>
                    </div>

                </div>
                <div>
                    <Select name={"20"} />
                </div>
                <Pagination />
                <button
                    className="text-white bg-[#1E1E1F] py-2 px-4 rounded-lg whitespace-nowrap items-center">
                    Export in CSV
                </button>
            </div>
        </div>
    )
}

export default Header