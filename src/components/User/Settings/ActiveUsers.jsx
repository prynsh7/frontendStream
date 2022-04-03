import TableData from "./TableData"

const ActiveUsers = () => {
    return (
        <div className="block w-full overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>

                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">User Email</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Storage</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Bandwidth</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Total Videos</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Plan</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Status</th>
                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Actions</th>
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