import { MdDeleteForever } from 'react-icons/md'

const DropdownItem = (props) => {
    return (
        <div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div className="pl-4 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-black text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">{props.category}</p>
                    </div>
                </div>
                <p className="w-8 text-xs leading-3 text-right text-black"><MdDeleteForever className="mx-2" size={20} /></p>
            </div>
            {" "}
        </div>
    )
}

export default DropdownItem
