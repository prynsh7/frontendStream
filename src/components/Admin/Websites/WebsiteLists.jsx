import Sidebar from '../Dashboard/Sidebar'
import Header from './Header'
import WebsiteTables from './WebsiteTables'

const WebsiteLists = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[20%] border-black">
                <Sidebar />
            </div>
            <div className="w-[80%] mx-4">
                <Header />
                <WebsiteTables />
            </div>
        </div>
    )
}

export default WebsiteLists