import { useState } from "react"
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from 'react-icons/ai'
import CallToActions from "./CallToAction"
import Select from "../../Input/Select";
import Dropdown from "../../Dropdown/Dropdown";

const AddCallToAction = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="w-full py-2 rounded bg-white border-[#787C87] text-sm font-medium leading-none text-black flex items-center cursor-pointer">
                {isList ? (
                    <div>
                        <AiOutlineMinus size={25} />
                    </div>
                ) : (
                    <div className="pb-1">
                        <FiPlus size={10} />
                    </div>
                )}
                &nbsp;&nbsp;Add Call-to-Action
            </div>
            {isList && (
                <div className="w-full mt-2 bg-white">
                    <div className="relative">
                        <CallToActions />
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

export default AddCallToAction
