import { useState } from "react"
import { MdDelete, MdDeleteForever } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from 'react-icons/ai'
import DropdownItem from "../DropdownItem"
import { BsFillStarFill } from "react-icons/bs"

const Addchapter = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="w-full py-2 rounded bg-white border-[#787C87] text-sm font-medium leading-none text-black flex items-center cursor-pointer">
                {isList ? (
                    <div>
                        <AiOutlineMinus size={25} />
                    </div>
                ) : (
                    <div>
                        <FiPlus size={25} />
                    </div>
                )}
                Add a chapter/moment
            </div>
            {isList && (
                <div className="w-full mt-2 p-4 bg-white rounded relative">
                    <div className="flex flex-row items-center gap-2">
                        <input type="text" placeholder="0:00:00:00" className="outline-none border p-2 w-28" />
                        <input type="text" placeholder="Enter chapter title here" className="outline-none border p-2" />
                        <BsFillStarFill className="text-[#FFA701] cursor-pointer" size={25} />
                        <div className="flex flex-row gap-1 absolute -left-8">
                            <MdDelete className="cursor-pointer" size={20} />
                            <FiPlus className="cursor-pointer" size={20} />
                        </div>
                    </div>
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>

        </div>
    );
};
export default Addchapter
