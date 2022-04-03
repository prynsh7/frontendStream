import Date from "./Date"
import { FaUsers } from 'react-icons/fa'
import { AiFillStar } from "react-icons/ai"
import { TiTick } from 'react-icons/ti'
import VisitorsChart from "./VisitorsChart"
import { DeviceChart } from "./DeviceChart"

const Overview = () => {
    return (
        <div className='grid grid-cols-3 mt-12'>
            {/* Section 1 */}
            <div className='col-span-2'>
                <div className="flex justify-end items-center ">
                    {/* <h1 className="text-xl font-[700]">Overview</h1> */}
                    <Date />
                </div>
                <div className="flex justify-between gap-4 flex-wrap my-4">
                    <div className="bg-[#1E1E1F] h-28 w-52 rounded-xl flex justify-center items-center gap-2">
                        <div className="rounded-full bg-white h-12 w-12 flex flex-col justify-center items-center">
                            <FaUsers />
                            <div className="flex items-center">
                                <AiFillStar size={10} />
                                <AiFillStar size={15} />
                                <AiFillStar size={10} />
                            </div>
                        </div>
                        <div className="text-[#FFFFFF] flex flex-col">
                            <span className="font-bold text-sm">Total Sales</span>
                            <span className="font-bold text-sm">18200</span>
                        </div>
                    </div>
                    <div className="bg-[#F2F5FA] h-28 w-52 rounded-xl flex justify-center items-center gap-2">
                        <div className="rounded-full bg-[#1E1E1F] h-12 w-12 flex flex-col justify-center items-center">
                            <TiTick className="rounded-full bg-white" />
                            <div className="flex items-center text-white">
                                <AiFillStar size={10} />
                                <AiFillStar size={15} />
                                <AiFillStar size={10} />
                            </div>
                        </div>
                        <div className="text-[#1E1E1F] flex flex-col">
                            <span className="font-bold text-sm">Total Users</span>
                            <span className="font-bold text-sm">512</span>
                        </div>
                    </div>
                    <div className="bg-[#F2F5FA] h-28 w-52 rounded-xl flex justify-center items-center gap-2">
                        <div className="rounded-full bg-[#1E1E1F] h-12 w-12 flex flex-col justify-center items-center">
                            <FaUsers className="text-white" />
                        </div>
                        <div className="text-[#1E1E1F] flex flex-col">
                            <span className="font-bold text-sm">Total Websites</span>
                            <span className="font-bold text-sm">3252</span>
                        </div>
                    </div>
                    <div className="bg-[#F2F5FA] h-28 w-52 rounded-xl flex justify-center items-center gap-2">
                        <div className="rounded-full bg-[#1E1E1F] h-12 w-12 flex flex-col justify-center items-center">
                            <TiTick className="rounded-full bg-white" />
                            <div className="flex text-white items-center">
                                <AiFillStar size={10} />
                                <AiFillStar size={15} />
                                <AiFillStar size={10} />
                            </div>
                        </div>
                        <div className="text-[#1E1E1F] flex flex-col">
                            <span className="font-bold text-sm">Total Videos</span>
                            <span className="font-bold text-sm">512</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-[700]">Total Visitors</h1>
                    <Date />
                </div>
                <div className="my-4">
                    <VisitorsChart />
                </div>
            </div>
            {/* Section 2 */}
            <div className='col-span-1 bg-[#F2F5FA] rounded-xl mx-4'>
                <DeviceChart />
            </div>
        </div>
    )
}

export default Overview