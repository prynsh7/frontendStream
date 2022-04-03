import { useState } from "react"
import { FiPlus } from "react-icons/fi"


const Dropdown = (props) => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="w-auto mb-2 p-3 rounded bg-[#F7FAFC] border-0 text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer" >
                {props.name}
                {isList ? (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                        </svg>
                    </div>
                )
                }
            </div>
            {isList && (
                <div className="w-auto h-auto overflow-auto mt-2 p-4 bg-white shadow rounded" >
                    {/* Dropdown items go here */}

                </div>
            )
            }
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>

        </div>
    )
}

export default Dropdown
