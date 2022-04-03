import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
// import { ModalProps } from '../../../types'
import Select from '../Inputs/Select'
import Input from '../Inputs/Input'

const UserModal = (props) => {

    function handleChange(e){
        //---
    }

    return (
        <div className={`${props.modalStyle} py-12 bg-[#383838] opacity-95 transition duration-150 ease-in-out z-10 absolute left-0 right-0 top-0 bottom-0`} id="modal">
            <div role="alert" className="container mx-auto w-11/12 max-w-2xl">
                <div className='px-12 rounded-t relative py-4 bg-[#F2F5FA]'>
                    <h1 className='text-lg text-black font-[700]'>Add User</h1>
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={props.handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
                <div className="relative py-8 px-5 md:px-12 bg-white shadow-md border-gray-400">
                    <form className='flex flex-row gap-2' action="">
                        <div className='flex flex-col gap-2'>
                            <Input name={''} placeholder={'Enter name'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={''} placeholder={'Enter email'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Input name={''} placeholder={'Enter password'} type={'text'} onChange={handleChange} id={''} value={''} />
                            <Select name={'Select plan'} />
                            <button className='whitespace-nowrap py-2 px-6 text-white rounded-lg bg-[#181D31]'>Add User</button>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='relative border p-4'>
                                <FaUser size={25} />
                                <MdDeleteForever className='absolute top-0 right-0 m-[1px] text-red-600 cursor-pointer' size={15} />
                            </div>
                            <button className='py-2 px-4 text-[#4152D0] bg-[#EFF6FF] rounded-lg text-sm'>Generate</button>
                        </div>
                    </form>

                </div>



            </div>
        </div>

    )
}

export default UserModal