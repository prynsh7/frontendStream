import React from 'react'
import Input from '../../Input/Input'

const Modal = (props) => {
    function handleChange(e) {
        //...
    }

    return (
        <div className={`${props.modalStyle} py-12 bg-[#383838] opacity-95 transition duration-150 ease-in-out z-10 absolute left-0 right-0 top-0`} id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-2xl">
                <div className="relative py-8 px-5 md:px-12 bg-white rounded border border-gray-400">
                    <form>
                        <div className='flex flex-col justify-center gap-2 my-4'>
                            <h1 className='text-center font-bold'>Reedem your codes here!</h1>
                            <h1 className='text-center'>Note: Please type in one code per line and click &quot;Redeem&quot;.</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <Input name={'Code1'} placeholder={'Code 1'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code2'} placeholder={'Code 2'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code3'} placeholder={'Code 3'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code4'} placeholder={'Code 4'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code5'} placeholder={'Code 5'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code6'} placeholder={'Code 6'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code7'} placeholder={'Code 7'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code8'} placeholder={'Code 8'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code9'} placeholder={'Code 9'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code10'} placeholder={'Code 10'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code11'} placeholder={'Code 11'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code12'} placeholder={'Code 12'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code13'} placeholder={'Code 13'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code14'} placeholder={'Code 14'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code15'} placeholder={'Code 15'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code16'} placeholder={'Code 16'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code17'} placeholder={'Code 17'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code18'} placeholder={'Code 18'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code19'} placeholder={'Code 19'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={'Code20'} placeholder={'Code 20'} type={'text'} onChange={handleChange} id={''} value={''} />
                        </div>
                        <hr className='border-t-[1px] my-3' />
                        <div className='flex gap-4 justify-end'>
                            <button className='bg-[#E8F6FF] px-4 py-2 text-[#171B2C] rounded-md'>Close</button>
                            <button className='bg-[#171B2C] px-4 py-2 text-white rounded-md'>Redeem</button>
                        </div>
                    </form>
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={props.handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal