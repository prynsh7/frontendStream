

const Input = (props) => {
    return (
        <div className="relative ">
            <input
                type={props.type}
                id={props.id}
                className="rounded-md border-transparent border-[1px] border-[#787C87] my-2 flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default Input