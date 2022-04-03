import { BsArrowRightShort } from 'react-icons/bs'
import { SiAmericanexpress } from 'react-icons/si'
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from 'react-icons/fa'


const index = () => {
    return (
        <div className="mx-auto">

            <div className="bg-[#462291] h-16 flex justify-center items-center">
                <h1 className="text-white">Lets Checkout | </h1>
            </div>
            <div className="bg-white h-16 flex justify-center items-center">
                <h1 className="text-[#1E1E1F] font-bold leading-10">Order Summary</h1>
            </div>
            {/* checkout form */}
            <div className='mx-4 sm:mx-32 lg:mx-[250px]'>
                <div className='flex flex-col lg:flex-row justify-between mt-4'>
                    <div className='flex justify-center'>
                        <img
                            src='./Assets/gold-plan.png'
                            alt='gold plan'
                            className='object-fill'
                            height='120px'
                            width='120px' />
                    </div>
                    <div>
                        <div className='border-[#462291] border-2 px-2 py-2 flex items-center rounded-sm justify-between'>
                            <div className='flex items-center'>
                                <input type="radio" className='outline-2 h-5 w-5 text-[#787C87]' placeholder='Enter coupon code' />
                                <h1 className='mx-2'>Onetime payment</h1>
                            </div>
                            <h1 className='text-[#462291] rounded-full px-3 py-1 text-bold'>$110.00</h1>
                        </div>
                        <div className='border-[#462291] mt-2 border-2 px-2 py-2 flex rounded-sm justify-between'>
                            <input type="text" className='outline-0 text-[#787C87]' placeholder='Enter coupon code' />
                            <button className='bg-[#462291] rounded-full px-3 py-1 text-white text-sm'>APPLY</button>
                        </div>
                        <h1>You have a 7-day free trial ending on 20 Jan 2022</h1>
                    </div>
                </div>

                <form action="">
                    <div className='flex items-center'>
                        <div className="w-6 h-1 bg-[#462291]">
                        </div>
                        <h1 className='mx-2'>
                            CHOOSE METHOD
                        </h1>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-2 mt-4'>

                        <div className='border-[#462291] border-2 flex gap-4 p-3'>
                            <input type="radio" className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>Credit Card</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='border-[#C5C7CD] border-2 flex gap-4 p-3'>
                            <input type="radio" className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>PayPal</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='border-[#C5C7CD] border-2 flex gap-4 p-3'>
                            <input type="radio" className='outline-2 h-6 w-6 text-[#787C87]' />
                            <div>
                                <h1 className='font-bold'>Checkout</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>
                    <div className='my-8'>

                        <div className='grid grid-cols-3 gap-4 mb-6'>
                            <div className='col-span-3 lg:col-span-2'>
                                <h1 className='text-[#787C87] text-sm'>CARD NUMBER</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='.... .... .... ....' />
                            </div>
                            <div className='col-span-3 lg:col-span-2'>
                                <h1 className='text-[#787C87] text-sm'>NAME ON CARD</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='' />
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2'>
                                <h1 className='text-[#787C87] text-sm'>EXPIRY DATE</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='MM/YY' />
                            </div>
                            <div className='col-span-1'>
                                <h1 className='text-[#787C87] text-sm'>CODE</h1>
                                <input type="text" className='outline-1 h-10 px-2 items-center w-full rounded-md border border-[#C5C7CD]' placeholder='...' />
                            </div>
                        </div>

                    </div>
                    <div className='bg-[#462291] h-16 flex justify-between items-center p-4'>
                        <h1 className='text-white'>GRAND TOTAL</h1>
                        <h1 className='text-white'>$110</h1>
                    </div>
                    <div className='flex justify-center my-12'>
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
