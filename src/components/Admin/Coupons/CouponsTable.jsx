import CouponTableData from './CouponTableData'

const CouponsTable = () => {
    return (
        <div className="block w-full overflow-x-auto mt-4">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead className='br5 bg-[#F5F8FA]'>
                    <tr>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">
                            <input type="checkbox" className=' text-[#787C87]' />
                        </th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">No.</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Code</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Amount</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Plan</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Usage Limit</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Expiry Date</th>
                        <th className="px-6 mr-[20px] align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Used in orders</th>
                        <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {/* <UserTableData id={1} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />
          <UserTableData id={8} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} /> */}
                    <CouponTableData />
                </tbody>
            </table>
        </div>
    )
}

export default CouponsTable
