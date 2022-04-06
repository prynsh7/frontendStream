
const Toggle = () => {
    return (
        <div>
            <label className="relative flex justify-between items-center p-2 text-xl">
                <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full cursor-pointer peer appearance-none rounded-md" />
                <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-[#B3B3B3] rounded-full duration-300 ease-in-out peer-checked:bg-[#1A73B8] after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
            </label>
        </div>
    )
}

export default Toggle
