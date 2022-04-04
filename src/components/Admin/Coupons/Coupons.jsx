import Sidebar from "../Dashboard/Sidebar"
import CouponsTable from "./CouponsTable"
import Header from "./Header"

const Coupons = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[15%] border-black">
                <Sidebar />
            </div>
            <div className="w-[85%] mx-4">
                <Header />
                <CouponsTable />
            </div>
        </div>
    )
}

export default Coupons