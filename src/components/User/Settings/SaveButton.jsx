import { FaSave } from 'react-icons/fa'

const SaveButton = (props) => {
    return (
        <div className='border-[#C5C7CD] mt-2 border-[1px] px-1 py-1 mr-8 flex rounded-sm justify-between'>
            <input type="text" className='outline-0 text-[#787C87]' placeholder={props.placeholder} />
            <button className='bg-gradient-to-r from-[#FD6D4E] to-[#FDA34F] flex rounded items-center px-3 py-1 text-white text-md'><FaSave size={20} className='text-white' /> SAVE</button>
        </div>
    )
}

export default SaveButton
