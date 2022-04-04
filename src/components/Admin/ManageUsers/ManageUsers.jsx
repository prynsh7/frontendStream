import React, { useState } from "react"
import Date from "../Dashboard/Date"
import Input from "../Inputs/Input"
import Select from "../Inputs/Select"
import Pagination from "./Pagination"
import UserModal from "./UserModal"
import UsersTable from "./UsersTable"
import './ManageUsers.scss'

const ManageUsers = () => {
    const [hide, setHide] = useState(true)

    function modalHandler() {
        setHide(!hide)
    }
    const modalStyle = hide ? 'hidden' : 'none'

    const handleChange = (e) => {
        //...
    }
    return (
        <div className="mx-4 ManageUsers">
            <div className="flex flex-col justify-center items-center gap-2 mt-8 headLeftPadding">
                <h1 className="text-2xl font-[600]">Manage users</h1>
                <Date />
                <div className="flex justify-center gap-2 items-center flex-row ">
                    <h1 className="text-sky-600 text-xs font-semibold">All <span className="text-[#787C87]">(350)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Platinum <span className="text-[#787C87]">(20)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Ultimate <span className="text-[#787C87]">(40)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Boost <span className="text-[#787C87]">(60)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Gold <span className="text-[#787C87]">(50)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Silver <span className="text-[#787C87]">(80)</span> |</h1>
                    <h1 className="text-sky-600 text-xs font-semibold">Free <span className="text-[#787C87]">(100)</span></h1>
                </div>
            </div>
            <div className="flex justify-between h-[29px] items-center my-2">
                <div className="flex flex-row items-center gap-2 h-[22px] selectbr5">
                    <Select name={"Select addon"} />
                    <button className="h-[22px] px-4 text-[#4954CB] bg-[#EFF6FF] text-sm br5">Filter</button>
                </div>
               
                <button className="text-white bg-[#1E1E1F] py-2 px-4 rounded-lg whitespace-nowrap items-center border-box w-[99px] h-[33px] text-xs br5">
                    Export in csv
                </button>
            </div>
            <div className="flex justify-between items-center gap-2">
                <div className="flex flex-row items-center gap-2 selectbr5">
                    <Select name={"Change status/Plan"} />
                    <button className="h-[22px] px-4 text-[#4954CB] bg-[#EFF6FF] text-sm br5">Filter</button>
                </div>
                <div className="flex justify-center gap-x-3 items-center flex-row translateRight">
                    <div className=" text-center flex gap-x-1.5 items-center customInputHeight22">
                        <Input name={""} placeholder={"Enter video ID to find owner"} type={"text"} onChange={handleChange} id={""} value={""} />
                        <button className=" text-[#4954CB] bg-[#EFF6FF] text-sm br5 w-[45px]">Search</button>
                    </div>
                    <div className="text-center flex gap-x-1.5 items-center customInputHeight22">
                        <Input name={""} placeholder={"Search by username or email"} type={"text"} onChange={handleChange} id={""} value={""} />
                        <button className="text-center text-[#4954CB] bg-[#EFF6FF] text-sm br5 w-[45px]">Search</button>
                    </div>
                    <div className="customSelectHeight">
                        <Select name={"20"} />
                    </div>
                    <Pagination />
                </div>
                <button
                    onClick={() => modalHandler()}
                    className="text-white bg-[#1E1E1F] py-2 px-4 rounded-lg whitespace-nowrap items-center border-box w-[99px] h-[33px] text-xs br5">
                    Add new user
                </button>
            </div>
            <UsersTable />
            <UserModal modalStyle={modalStyle} handleModal={modalHandler} />
        </div>
    )
}

export default ManageUsers