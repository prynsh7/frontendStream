import { MdOutlineDateRange } from 'react-icons/md'

const Date = () => {
    return (
        <div className='flex justify-center sm:justify-end mx-6 my-4'>
            <div className='border-gray-600 border-[1px] flex justify-between gap-2 items-center p-2'>
                <h1>March 2020</h1>
                <MdOutlineDateRange size={15} />
            </div>
        </div>
    )
}

export default Date