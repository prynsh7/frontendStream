import Sidebar from "../components/User/Home/Sidebar"
import Settings from "../components/User/Settings/Settings"

const settings = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-full">
                <Settings />
            </div>
        </div>
    )
}

export default settings