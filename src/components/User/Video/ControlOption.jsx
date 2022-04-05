import { useState } from "react"

const ControlOption = (props) => {
    const [stat, setStat] = useState("YES");
    const statToggle = ()=>{
        setStat(stat==="YES"?"NO":"YES");
    }
    return (
        <div className="flex justify-between items-center">
            <button className="flex justify-between" onClick={statToggle}>
                <span>{props.label}</span>
                <span>{stat}</span>
            </button>
        </div>
    )
}

export default ControlOption