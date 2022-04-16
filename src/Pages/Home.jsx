import PremiumAddons from "../components/User/Home/Addons/PremiumAddons"
import Navigation from "../components/User/Home/Navigation"
import Sidebar from "../components/User/Home/Sidebar"
import Stats from "../components/User/Home/Stats"
import {Navigate} from "react-router-dom"

const home = () => {

    const strAuth = localStorage.getItem("strAuth");

    return (
        <>
        {strAuth ? null : <Navigate replace to="/signin" /> }
        <div className="flex flex-cols-2">
            <div className="sm:w-[4%] sm:border-r-[1.5px] sm:border-black relative">
                <Sidebar />
            </div>
            <div className="sm:w-[96%] w-full">
                <div className="w-[90%] m-auto">
                <Navigation />
                <Stats />
                <PremiumAddons />

                </div>
            </div>
        </div>
        </>
    )
}

export default home
