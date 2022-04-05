import { useState } from "react"

const ControlOption = (props) => {
    const [stat, setStat] = useState("OFF");
    const statToggle = ()=>{
        setStat(stat==="OFF"?"ON":"OFF");
    }
    return (
        <div className="flex justify-between items-center">
            <button className="flex justify-between bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] w-[100%] h-[45px] px-3 rounded-full text-center items-center" onClick={statToggle}>
                <span>{props.label}</span>
                <span className={stat==='OFF'?'text-red-700':'text-green-700'}>{stat}</span>
            </button>
        </div>
    )
}

export default ControlOption