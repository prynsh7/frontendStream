import { useState } from "react"
import { MdDeleteForever, MdOutlineCancelPresentation } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"
import Dropdown from "../../Dropdown/Dropdown";

const EmbedButton = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div className="flex items-center">
                <div onClick={() => setIsList(!isList)} className="w-auto p-4 shadow rounded bg-[#F4F7F9] border-dashed border-2 text-sm font-medium leading-none text-[#787C87] flex items-center justify-between cursor-pointer">
                    Embed this playlist
                </div>
                {isList && (<MdOutlineCancelPresentation className="ml-1" onClick={() => setIsList(!isList)} size={35} />)}
            </div>
            {isList && (
                <div className="w-auto h-auto absolute overflow-auto mt-2 p-4 bg-[#F4F7F9] shadow rounded">
                    <Dropdown name={"Player Style"} />
                    <Dropdown name={"Playlist Style"} />
                    <button className="bg-black text-white py-2 px-4 mt-2 rounded-md">Copy embed code</button>

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
export default EmbedButton
