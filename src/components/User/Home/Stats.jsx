import { GoGraph } from 'react-icons/go'
import Date from './Date'

const Stats = () => {
    return (
        <div className='overflow-hidden home-stats'>
            <div className='grid grid-cols-2 md:grid-cols-4 border-2 bg-[#373A49] mx-2 md:mx-6 my-6 -mr-5 -ml-5'>

                <div className='flex justify-center bg-[#373A49] text-xs sm:text-lg items-center text-white font-bold h-[120px]'>
                    <GoGraph size={22} className='mx-2' /> {"  "} Check stats
                </div>
                <div className='flex justify-center bg-white col-span-1 -skew-x-[16deg] ml-4 md:ml-0 border-white h-[120px]'>
                    <div className="m-auto skew-x-[18deg]">
                        <h1 className="text-xs sm:text-lg">Current Plan</h1>
                        <h1 className="text-[#1E1E1F] font-bold text-xs sm:text-lg">Gold Member</h1>
                    </div>
                </div>
                <div className='flex justify-center bg-white col-span-1 -skew-x-[16deg] mr-4 md:mr-0 md:-ml-1 h-[120px] overflow-hidden'>
                    <div className="m-auto skew-x-[18deg]">
                        <h1 className="text-xs sm:text-lg">Payment Type</h1>
                        <h1 className="text-[#1E1E1F] font-bold text-xs sm:text-lg">Onetime</h1>
                        <h1 className="text-xs sm:text-lg">PayPal <a className="underline text-xs sm:text-lg text-sky-700">change</a></h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-[#373A49] h-[120px]'>
                    <h1 className='leading-6 text-xs sm:text-lg text-[20px] bg-white'>[xxx]</h1>
                    <p className="mx-2 text-xs sm:text-lg text-white font-bold">Redeem Codes</p>
                </div>
            </div>
            <Date />
            <div className='grid grid-cols-2 sm:flex sm:flex-row gap-4 mx-6 my-6'>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">153 viewers watching</h1>
                    <h1 className="font-[900] text-center">Your Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">22000</h1>
                    <h1 className="font-[900] text-center">Total Views</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">22</h1>
                    <h1 className="font-[900] text-center">Total Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">671.5hrs</h1>
                    <h1 className="font-[900] text-center">Watch Time</h1>
                </div>
            </div>

        </div>
    )
}

export default Stats