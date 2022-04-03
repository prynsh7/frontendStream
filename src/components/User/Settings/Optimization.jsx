import { CgDanger } from "react-icons/cg"
import Toggle from "../Toogle/Toogle"

const Optimization = (props) => {
    return (
        <div className='flex gap-2 items-center lg:col-span-1'>
            <Toggle />
            <h1 className='font-bold'>{props.text}</h1>
            <CgDanger className='items-center text-black' />
        </div>
    )
}

export default Optimization