import Sidebar from "../components/User/Home/Sidebar"
import Player from "../components/User/Player/Player"

const player = () => {
    return (
        <div className="flex">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="w-full sm:w-[96%]">
                <Player />
            </div>
        </div>
    )
}

export default player
