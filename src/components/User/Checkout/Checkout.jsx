import { BsArrowRightShort } from 'react-icons/bs'
import { SiAmericanexpress } from 'react-icons/si'
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from 'react-icons/fa'
import './Checkout.scss'


const index = () => {
    return (
        <div className="mx-auto w-full">

            <div className="bg-[#462291] h-16 flex justify-center items-center">
                <h1 className="text-white text-xl">Lets Checkout &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; </h1>
                <span className='rounded-full overflow-hidden h-6 w-6 flex flex-col mb-1'>
                    <span className='w-full h-full bg-[#CC172C]'></span>
                    <span className='w-full h-full bg-[#FFFFFF]'></span>
                </span>
            </div>
            <div className="bg-white h-16 flex justify-center items-center">
                <h1 className="text-[#1E1E1F] font-bold leading-10">Order Summary</h1>
            </div>
            {/* checkout form */}
            <div className='mx-4 sm:mx-12 lg:mx-[280px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 mt-4'>
                    <div className='col-span-1 flex justify-start'>
                        <img
                            src='./Assets/gold-plan.png'
                            alt='gold plan'
                            className='object-fill h-[120px] w-[120px] sm:h-[190px] sm:w-[190px]  mx-auto sm:m-0 mb-2' />
                    </div>
                    <div className='col-span-1 my-auto'>
                        <div className='border-[#462291] border-2 px-2 py-2 flex items-center rounded-sm justify-between'>
                            <div className='flex items-center'>
                                <input type="radio" className='outline-2 h-5 w-5 text-[#787C87]' placeholder='Enter coupon code' />
                                <h1 className='mx-2'>Onetime payment</h1>
                            </div>
                            <h1 className='text-[#462291] rounded-full px-3 py-1 text-bold'>$110.00</h1>
                        </div>
                        <div className='border-[#462291] mt-2 border-2 px-2 py-2 flex rounded-sm justify-between'>
                            <input type="text" className='outline-0 text-[#787C87] w-50% overflow-hidden sm:w-[100%]' placeholder='Enter coupon code' /><span className='sm:hidden'>..</span>&nbsp;&nbsp;
                            <button className='bg-[#462291] rounded-full px-3 py-1 text-white text-sm'>APPLY</button>
                        </div>
                        <h1 className='text-base text-[#787C87]'>You have a 7-day free trial ending on 20 Jan 2022</h1>
                    </div>
                </div>

                <br />
                <form action="">
                    <div className='flex items-center'>
                        <div className="w-6 h-1 bg-[#462291]">
                        </div>
                        <h1 className='mx-2'>
                            CHOOSE METHOD
                        </h1>
                    </div>
                    <div className='flex grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4'>

                        <div className='border-[#462291] border-2 col-span-1 flex gap-4 p-3 py-6 rounded-lg'>
                            <input type="radio" name='payMethod' className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>Credit Card</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='border-[#C5C7CD] border-2 col-span-1 flex gap-4 p-3 py-6 rounded-lg'>
                            <input type="radio" name='payMethod' className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>PayPal</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='border-[#C5C7CD] border-2 col-span-1 flex gap-4 p-3 py-6 rounded-lg'>
                            <input type="radio" name='payMethod' className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>Checkout</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>
                    <div className='my-8 grid grid-cols-3 gap-2'>

                        <div className='col-span-3 sm:col-span-2 grid grid-cols-1 gap-8 '>
                            <div className='col-span-1'>
                                <h1 className='text-[#787C87] text-sm'>CARD NUMBER</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='.... .... .... ....' />
                            </div>

                            <div className='col-span-1'>
                                <h1 className='text-[#787C87] text-sm'>NAME ON CARD</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='' />
                            </div>
                        </div>

                        <div className='col-span-3 sm:col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-8'>
                            <div className='col-span-1'>
                                <h1 className='text-[#787C87] text-sm'>EXPIRY DATE</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='MM/YY' />
                            </div>
                            
                            <div className='col-span-1'>
                                <h1 className='text-[#787C87] text-sm'>CODE</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='...' />
                            </div>
                        </div>

                    </div>
                    <div className='bg-[#462291] h-13 flex justify-between items-center p-4 rounded-lg'>
                        <h1 className='text-white'>GRAND TOTAL</h1>
                        <h1 className='text-white'>$110</h1>
                    </div>
                    <div className='flex justify-center my-12 h-12'>
                        <button className='bg-[#462291] text-white rounded-full px-12 py-2 flex items-center'>Confirm & pay <BsArrowRightShort size={15} className='float-right' /></button>
                    </div>
                </form>
                <div className='flex justify-center items-center gap-4 my-8'>
                    <FaCcMastercard size={35} />
                    <FaCcPaypal size={35} />
                    <FaCcVisa size={35} />
                    <SiAmericanexpress size={27} />
                </div>
            </div>

        </div>
    )
}

export default index
