import CallToActions from "../components/User/CallToActions/CallToAction"
import Sidebar from "../components/User/Home/Sidebar"

const call_to_actions = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-full">
                <CallToActions />
            </div>
        </div>
    )
}

export default call_to_actions
