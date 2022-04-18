import React from 'react';
import Addons from "../components/User/Home/Addons/Addons"
import Navigation from "../components/User/Home/Navigation"
import Sidebar from "../components/User/Home/Sidebar"

const AddonsMain = () => {
    return (
        <div className="flex">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-full">
                <Navigation />
                <Addons />
            </div>
        </div>
    )
}

export default AddonsMain