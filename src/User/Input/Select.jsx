

const Select = (props) => {
    return (
        <div className="relative flex-1">
            <select className="block appearance-none my-1 w-full bg-[#F4F7F9] text-gray-700 py-1 px-3 pr-8 rounded leading-tight focus:outline-none" id="grid-state">
                <option>{props.name}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    )
}

export default Select
