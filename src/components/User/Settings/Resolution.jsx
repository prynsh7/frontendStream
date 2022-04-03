import { BsCheckCircleFill } from "react-icons/bs"
import { MdCancel } from 'react-icons/md'

const Resolution = (props) => {
    return (
        <div className="border flex justify-between gap-2 sm:col-span-1 lg:col-span-2 m-2">
            <div className="flex items-center gap-2 py-2 px-4 w-[60%]">
                <h1>{props.checked ? (<BsCheckCircleFill className="text-[#50992B] cursor-pointer" size={15} />) : <MdCancel className="text-[#8e8f8e] cursor-pointer" size={15} />}</h1>
                <p className="whitespace-nowrap text-xs font-bold">{props.value1}</p>
            </div>
            <div className="bg-[#F6F6F6] flex flex-1 py-2 px-4 w-[40%] m-auto">
                <p className="whitespace-nowrap text-xs font-bold">{props.value2}</p>
            </div>
        </div>
    )
}

export default Resolution
