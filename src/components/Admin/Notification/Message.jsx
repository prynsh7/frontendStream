import React from 'react'
import { AiOutlineCamera, AiOutlinePlus } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import Select from '../../User/Input/Select'

const Message = () => {
    return (
        <div className='grid grid-cols-2'>
            <form className='flex flex-col gap-4 col-span-1'>
                <Select name={'Select notification type'} />
                <div className='border rounded'>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50" placeholder="Write your message here...">
                    </textarea>
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex justify-between items-center gap-2'>
                            <FiMoreVertical className='cursor-pointer' size={20} />
                            <HiOutlineEmojiHappy className='cursor-pointer' size={20} />
                            <AiOutlineCamera className='cursor-pointer' size={20} />
                        </div>
                        <div className='flex justify-center'>
                            <AiOutlinePlus className='text-sky-600 cursor-pointer' size={20} />
                        </div>
                    </div>
                </div>
                <div className='flex items-start'>
                    <button className='py-2 px-4 bg-[#EFF6FF] rounded-lg text-[#4954CB]'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Message