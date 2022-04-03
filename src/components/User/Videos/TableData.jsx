
import { BiMoviePlay } from 'react-icons/bi'
import { BsFillArrowDownSquareFill, BsRecordCircle } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import { RiCodeBoxLine, RiDeleteBin6Line } from 'react-icons/ri'
import { GiWorld } from 'react-icons/gi'
import { useNavigate, useLocation } from 'react-router-dom'
import Toggle from '../Toogle/Toogle'

const TableData = (props) => {
    const router = useNavigate()
    const location = useLocation()
    return (
        <tr className='border-b-[1px]'>
            <td><div className='flex justify-center text-black'><BsRecordCircle size={30} /></div></td>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <h1 className='pr-4 text-black'>1</h1>
                <img src={props.thumbnail} height='68px' width='116px' className="h-28 w-24 bg-white rounded-md border" alt="..." />
                <div className='grid'>
                    <span className="ml-3 font-bold text-[#1E1E1F]">{props.title}</span>
                    <span className="ml-3 font-bold text-[#1E1E1F]">{props.date}</span>
                </div>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">{props.views}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                {props.avgViewDuration}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[#1E1E1F] text-xs whitespace-nowrap p-4">
                {props.avgPercentViewed}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div className="flex items-center">
                <div className="flex text-black gap-2">
                    <MdEdit size={25} />
                    {location.pathname != '/call-to-actions' ? (<RiCodeBoxLine size={25} />) : null}
                    {location.pathname != '/call-to-actions' ? (<BiMoviePlay size={25} />) : null}
                    {location.pathname == '/call-to-actions' ? (<GiWorld size={25} />) : null}
                    {location.pathname != '/call-to-actions' ? (<BsFillArrowDownSquareFill size={25} />) : null}
                    <RiDeleteBin6Line size={25} />
                </div>
            </div>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <Toggle />
            </td>
        </tr>
    )
}

export default TableData