import { useState } from "react"
import { MdDelete, MdDeleteForever } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from 'react-icons/ai'
import DropdownItem from "../DropdownItem"
import Select from "../../Input/Select"

const AddCaption = () => {
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
                Add Caption
            </div>
            {isList && (
                <div className="w-full mt-2 p-4 bg-white rounded">
                    <form className="flex flex-col relative">
                        <div className="flex justify-between gap-32 bg-[#F4F7F9] items-center border px-1">
                            <h1 className="text-xs">Video language</h1>
                            <Select name='English' />
                        </div>
                        <div className="flex justify-between flex-row items-center">
                            <textarea
                                name="caption-text"
                                id="caption-text"
                                rows={3}
                                className="w-full outline-none border my-1 mr-1 px-1 placeholder:text-xs"
                                placeholder="Here you can insert the caption text..."></textarea>
                            <div className="flex flex-col my-1 justify-between">
                                <input type="text" name="" id="" className="outline-none border w-16 my-1 p-1" placeholder="00:00" />
                                <input type="text" name="" id="" className="outline-none border w-16 my-1 p-1" placeholder="00:01" />
                            </div>
                            <div className="flex flex-row gap-1 absolute -left-12">
                                <MdDelete className="cursor-pointer" size={20} />
                                <FiPlus className="cursor-pointer" size={20} />
                            </div>
                        </div>
                    </form>
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
export default AddCaption
