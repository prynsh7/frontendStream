import Sidebar from "../components/User/Home/Sidebar"
import Stats from "../components/User/Statistics"

const statistics = () => {
    return (
        <div className="flex">
            <div className="w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Stats />
            </div>
        </div>
    )
}

export default statistics
