import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
    return (
        <div className='relative Search'>
            <BsSearch size={20} className='absolute text-black left-3 z-20 top-4' />
            <input
                type="text"
                className="block w-full p-3 pl-10 leading-normal rounded focus:border-transparent focus:outline-none text-[#787C87] bg-[#F4F7F9]"
                placeholder="Search videos by id or title" />
        </div>
    )
}

export default Search


// absolute left-0 z-20 hidden w-4 h-4


