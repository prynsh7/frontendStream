const Select = (props) => {
    return (
        <div className="relative items-center py-[3px] h-[10px]">
            <select style={{Height:'40px'}} className="py-[3px] appearance-none my-1 w-20 flex flex-1 bg-[#F4F7F9] text-gray-700 py-1 px-2 pr-6 rounded-lg text-xs leading-tight focus:outline-none" id="grid-state">
                <option className=''>{props.name}</option>
            </select>
            <div className="pointer-events-none absolute bg-transparent inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    )
}

export default Select
