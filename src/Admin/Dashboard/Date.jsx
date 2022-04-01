import { MdOutlineDateRange } from 'react-icons/md'

const Date = () => {
    return (
        <div className='flex'>
            <div className='border-gray-600 border-[1px] flex justify-between gap-2 rounded-sm items-center p-1'>
                <h1 className=''>March 2020</h1>
                <MdOutlineDateRange size={15} />
            </div>
        </div>
    )
}

export default Date