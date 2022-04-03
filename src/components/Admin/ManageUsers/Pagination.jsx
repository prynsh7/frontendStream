import React from 'react'

const Pagination = () => {
    return (

        <nav className='bg-[#F6F8FC] p-1' aria-label="pagination-users">
            <ul className="inline-flex items-center gap-2 bg-[#F6F8FC]">
                <li>
                    <a href="#" className="block py-1 px-2 ml-0 leading-tight text-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">

                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="py-1 px-2 leading-tight text-white bg-black hover:bg-gray-100 hover:text-gray-700">1</a>
                </li>
                <li>
                    <a href="#" className="py-1 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="z-10 py-1 px-2 leading-tight text-gray-500 bg-white">3</a>
                </li>
                <li>
                    <a href="#" className="py-1 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                    <a href="#" className="py-1 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">...</a>
                </li>
                <li>
                    <a href="#" className="block py-1 px-2 leading-tight text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">

                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Pagination