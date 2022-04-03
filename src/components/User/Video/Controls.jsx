import { useState } from "react"
import DropdownItem from "./DropdownItem"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import ControlOption from "./ControlOption"

const controls = ['Volume', 'Fullscreen', 'Closed Caption', 'Playback Speed', 'Quality', 'Embed', 'Download', 'Facebook Sharing', 'Twitter Sharing', '10x Backward', '10x Forward', 'Show all chapters', 'Big play button', 'Current Time', 'Duration', 'Progress']

const Controls = () => {
    const [isList, setIsList] = useState(false)

    return (
        <div className="my-2">
            <div onClick={() => setIsList(!isList)} className="p-3 shadow rounded-full bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] border-[1px] border-[#787C87] text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Show these controls
                {isList ? (
                    <div>
                        <MdKeyboardArrowDown size={20} />
                    </div>
                ) : (
                    <div>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                )}
            </div>
            {isList && (
                <div className="relative mt-2 p-4 bg-white shadow rounded">
                    {controls.map((element, index) => (
                        <ControlOption key={index} label={element} />
                    ))}
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    )
}

export default Controls
