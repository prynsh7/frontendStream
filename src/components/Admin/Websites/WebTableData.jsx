import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const WebTableData = () => {
    return (
        <tr className='border-b-[1px]'>
            <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
                <input type="checkbox" className=' text-[#787C87]' />
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">1</td>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                next.com
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
                Yousaf
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
                Yousaf101
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
                Yousaf@next.com
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
                <h1><FiExternalLink className='mx-auto cursor-pointer' size={15} /></h1>
            </td>
        </tr>
    )
}

export default WebTableData