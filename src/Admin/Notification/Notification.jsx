import Sidebar from '../Dashboard/Sidebar'
import Header from './Header'
import Message from './Message'

const Notification = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[20%] border-black">
                <Sidebar />
            </div>
            <div className="w-[80%] mx-4">
                <Header />
                <Message />
            </div>
        </div>
    )
}

export default Notification