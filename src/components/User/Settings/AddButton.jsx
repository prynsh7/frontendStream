import React from 'react'
import { BiPlus } from 'react-icons/bi'

const AddButton = () => {
    return (
        <div className='border-[#C5C7CD] mt-2 border-[1px] px-1 py-1 ml-1 mr-8 flex rounded-sm justify-between'>
            <input
                type="text"
                className='outline-0 text-[#787C87]'
                placeholder='Example:*.mywebsite.com' />
            <button
                className='bg-gradient-to-r from-[#FD6D4E] to-[#FDA34F] flex rounded items-center px-3 py-1 text-white text-md'>
                <BiPlus /> ADD
            </button>
        </div>
    )
}

export default AddButton