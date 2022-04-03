import { useState } from "react"
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from 'react-icons/ai'
import DropdownItem from "../DropdownItem"
import Input from "../Input"

const Addcard = () => {
    const [isList, setIsList] = useState(false)
    const [show, setShow] = useState(false)

    const handleChange = () => {

    }

    const toggle = () => {
        setShow(!show)
    }

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
                Add Card/Annotation
            </div>
            {isList && (
                <div className="w-full overflow-auto mt-2 p-4 bg-white shadow rounded">
                    <div className="flex flex-row gap-2 items-center">
                        <FiPlus size={20} className='cursor-pointer' />
                        <div className="bg-[#F5F8FA] px-4 py-2 flex flex-row items-center gap-2">
                            <input
                                type="text"
                                placeholder="Enter card text here"
                                className="outline-none bg-[#F5F8FA]" />
                            <p className="border px-1 py-0.5" >02:04</p>
                            {!show ? <MdKeyboardArrowDown onClick={toggle} className="cursor-pointer" size={20} /> : <MdKeyboardArrowUp onClick={toggle} className="cursor-pointer" size={20} />}
                            <MdDelete className="cursor-pointer" size={20} />
                        </div>
                    </div>
                    {show && (<Input name={""} placeholder={"Insert your link here"} type={"text"} onChange={handleChange} id={""} value={""} />
                    )}
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
export default Addcard
