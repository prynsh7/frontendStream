import TableData from "./TableData"

const ActiveUsers = () => {
    return (
        <div className="block w-full overflow-x-hidden ">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr className="w-[95%]">

                        <th className="w-[24%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">User Email</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Storage</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Bandwidth</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Total Videos</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Plan</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Status</th>
                        <th className="w-[12%] align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-black">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <TableData />
                    <TableData />
                </tbody>
            </table>
        </div>
    )
}

export default ActiveUsers