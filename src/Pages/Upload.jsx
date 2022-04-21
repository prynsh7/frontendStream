import Upload from "../components/User/Upload/Upload"
import Sidebar from "../components/User/Home/Sidebar"
import Navigation from "../components/User/Home/Navigation"

const upload = () => {
    return (
        <div className="flex flex-row">
            <div className="sm:w-[4%] w-[0%] h-[100vh] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-[100%] sm:ml-0 ml-5">
                <Navigation />
                <div className="flex justify-center items-center relative">
                    <Upload />
                </div>
            </div>
        </div>
    )
}

export default upload
