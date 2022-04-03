import Upload from "../components/User/Upload/Upload"
import Sidebar from "../components/User/Home/Sidebar"
import Navigation from "../components/User/Home/Navigation"

const upload = () => {
    return (
        <div className="flex flex-row">
            <div className="w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Navigation />
                <div className="flex justify-center items-center relative">
                    <Upload />
                </div>
            </div>
        </div>
    )
}

export default upload
