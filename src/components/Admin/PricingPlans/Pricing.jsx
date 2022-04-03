import Sidebar from '../Dashboard/Sidebar'
import PricingPlans from './PricingPlans'

const Pricing = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[15%] border-black">
                <Sidebar />
            </div>
            <div className="w-[85%]">
                <PricingPlans />
            </div>
        </div>
    )
}

export default Pricing
