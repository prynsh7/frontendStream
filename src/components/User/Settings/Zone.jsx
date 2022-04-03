import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

const Zone = (props) => {
    return (
        <div className="border flex justify-between gap-2 col-span-2 m-2">
            <div className="flex items-center gap-2 py-2 px-4 w-[60%]">
                <h1>{props.checked ? (<BsCheckCircleFill className="text-[#50992B] cursor-pointer" size={15} />) : <MdCancel className="text-[#8e8f8e] cursor-pointer" size={15} />}</h1>
                <p className="whitespace-nowrap text-xs font-bold">{props.zone}</p>
            </div>
            <div className="flex flex-1 py-2 px-4 w-[40%] m-auto">
                <p className="whitespace-nowrap text-xs font-bold">{props.storage}</p>
            </div>
        </div>
    )
}

export default Zone