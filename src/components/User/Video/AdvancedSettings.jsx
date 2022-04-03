import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import SettingsOption from "./SettingsOption";

const settingsOptionsAdvanced = ['Autoplay', 'Allow Pause', 'Control bar', 'Round Corners', 'Sticky on Scroll', 'Save play position', 'Preload', 'Loop', 'Muted', 'Play captions during muted autoplay'];

const AdvancedSettings = () => {

    const [isList, setIsList] = useState(false)

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="p-3 shadow rounded-full bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] border-[1px] border-[#787C87] text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Advanced Settings
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
                <div className="mt-2 p-4 bg-white rounded">
                    <div className="relative">
                        {settingsOptionsAdvanced.map((element, index) => (
                            <SettingsOption key={index} checked={false} label={element} />
                        ))}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <span className="ml-5">Video Size</span>
                            </div>
                            <div className='flex gap-2'>
                                <input type='text | number' placeholder="1280" className="border w-16 p-1" />
                                <input type='text | number' placeholder="720" className="border w-16 p-1" />
                            </div>
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
    )
}

export default AdvancedSettings
