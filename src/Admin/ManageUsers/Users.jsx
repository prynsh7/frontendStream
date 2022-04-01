import Sidebar from "../Dashboard/Sidebar"
import ManageUsers from "./ManageUsers"

const Users = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[15%] border-black">
                <Sidebar />
            </div>
            <div className="w-[85%]">
                <ManageUsers />
            </div>
        </div>
    )
}

export default Users