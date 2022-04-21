import Sidebar from "../components/User/Home/Sidebar"
import Video from "../components/User/Video/Video"

const video = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-[100vw] m-auto">
                <Video />
            </div>
        </div>
    )
}

export default video