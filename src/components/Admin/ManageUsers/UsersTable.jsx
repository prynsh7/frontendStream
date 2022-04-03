import UserTableData from './UserTableData'

const UsersTable = () => {
    return (
        <div className="block w-full overflow-x-auto mt-4">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead className='bg-[#F5F8FA]'>
                    <tr>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">
                            <input type="checkbox" className=' text-[#787C87]' />
                        </th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">No.</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Name/Email</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Plan</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Status</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Date</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Total Videos</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Last login</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Sub accounts</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">WL accounts</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Storage Used</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Bandwidth used</th>
                        <th className="2xl:px-6 px-1 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {/* <UserTableData id={1} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />
                  <UserTableData id={8} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} /> */}
                    < UserTableData />
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable