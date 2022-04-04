import { BsFillEyeFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdEdit } from 'react-icons/md'
import { RiDeleteBin6Line, RiStackshareLine } from 'react-icons/ri'
import Select from '../Inputs/Select'

const UserTableData = () => {
    return (
        <tr className='border-b-[1px]'>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4"><input type="checkbox" className=' text-[#787C87]' /></td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">1</td>
            <th className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center  h-[29px] w-[29px]'>
                        <img src='./Assets/space.png' width='29px' className="h-[29px] w-[29px] bg-white rounded-full border" alt="..." />
                    </div>
                    <div className='grid items-center'>
                        <div className='flex justify-between'>
                            <span className="ml-1 text-xs text-[#1E1E1F]">Mark Wilson</span>
                            <img src='./Assets/space.png' height='8px' width='18px' className="" alt="..." />
                        </div>
                        <span className="ml-1 text-xs text-[#1E1E1F]">markuser@gmail.com</span>
                    </div>
                </div>
            </th>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                <Select name={'Gold'} />
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                <Select name={'Active'} />
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                24/1/2022
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                56
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                24/1/2022
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                40
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                11
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                <div className='flex flex-col'>
                    <span className='text-xs'>80GB</span>
                    <span className='text-xs'>out of 100GB</span>
                    <span className='text-xs'>16 videos</span>
                </div>
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                70GB
            </td>
            <td className="border-t-0 2xl:px-6 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                    <div className="flex text-black gap-2">
                        <BsFillEyeFill className='cursor-pointer' size={13} />
                        <RiStackshareLine className='cursor-pointer' size={13} />
                        <MdEdit className='text-sky-600 cursor-pointer' size={13} />
                        <RiDeleteBin6Line className='text-sky-600 cursor-pointer' size={13} />
                        <FiSettings className='text-sky-600 cursor-pointer' size={13} />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserTableData