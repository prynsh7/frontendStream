import { useState } from "react"
import { MdDeleteForever } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"

const Category = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div className="Category">
            <div onClick={() => setIsList(!isList)} className="w-auto p-4 shadow rounded bg-[#F4F7F9] text-sm font-medium leading-none text-[#787C87] flex items-center justify-between cursor-pointer">
                Select Category
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
                <div className="w-auto h-auto absolute overflow-auto mt-2 p-4 bg-[#F4F7F9] shadow rounded">
                    <h1 className="text-black">Category 1</h1>
                    <h1 className="text-black">Category 2</h1>
                    <h1 className="text-black">Category 3</h1>

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

export default Category
