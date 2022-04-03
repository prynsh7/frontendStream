
import { BiMoviePlay } from 'react-icons/bi'
import { BsFillArrowDownSquareFill, BsRecordCircle } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import { RiCodeBoxLine, RiDeleteBin6Line } from 'react-icons/ri'
import { GiWorld } from 'react-icons/gi'
import Dropdown from '../Dropdown/Dropdown'

const TableData = () => {

    return (
        <tr className='border-b-[1px]'>

            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <h1 className='pr-4 text-black'>Email@gmail.com</h1>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                <div className='grid'>
                    <span className="ml-3 font-bold text-[#1E1E1F]">80GB</span>
                    <span className="ml-3 font-bold text-[#1E1E1F]">out of 100GB</span>
                    <span className="ml-3 font-bold text-[#7b7be4]">16 videos</span>
                </div>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                70GB
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                56
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <Dropdown name={'Gold'} />
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <Dropdown name={'Active'} />
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                    <div className="flex text-black gap-2">
                        <MdEdit size={25} />
                        <RiDeleteBin6Line size={25} />
                    </div>
                </div>
            </td>

        </tr>
    )
}

export default TableData