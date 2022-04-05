import { useState } from "react"
import { MdDeleteForever } from 'react-icons/md'
import { FiPlus } from "react-icons/fi";
import DropdownItem from "./DropdownItem";

const Playlist = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className=" p-4 shadow rounded bg-white border-[1px] border-[#787C87] text-sm font-medium leading-none text-gray-800 flex flex-grow items-center justify-between cursor-pointer">
                Add to playlist
                {isList ? (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                        </svg>
                    </div>
                )}
            </div>
            {isList && (
                <div className="absolute overflow-auto mt-2 p-4 bg-white shadow rounded z-50">
                    <DropdownItem category={"Watch later"} />
                    <DropdownItem category={"Project Management"} />
                    <DropdownItem category={"NFT crypto"} />
                    <div>
                        <button className="flex justify-start text-xs bg-gray rounded-md mt-6 font-medium py-2 w-full leading-3 text-dark items-center"><FiPlus className="mx-2" size={20} />Create new playlist</button>
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
export default Playlist
