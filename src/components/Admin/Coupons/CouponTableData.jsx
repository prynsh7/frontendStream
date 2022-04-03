import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { MdEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CouponTableData = () => {
  return (
    <tr className='border-b-[1px]'>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        <input type="checkbox" className=' text-[#787C87]' />
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">1</td>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
        HOLIDAY50
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        $59
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        Gold
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        1/1
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        24/1/2022
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs text-center whitespace-nowrap p-4">
        <FiExternalLink className='mx-auto' />
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
        <div className="flex items-center">
          <div className="flex text-black gap-2">
            <MdEdit className='text-sky-600 cursor-pointer' size={13} />
            <RiDeleteBin6Line className='text-sky-600 cursor-pointer' size={13} />

          </div>
        </div>
      </td>
    </tr>
  )
}

export default CouponTableData
