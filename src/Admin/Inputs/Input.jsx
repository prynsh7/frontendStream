const Input = (props) => {
    return (
        <div className="flex-1">
            <input
                type={props.type}
                id={props.id}
                className="rounded-md border-transparent placeholder:text-xs my-[2px] appearance-none border w-full py-[1px] px-2 bg-[#F4F7F9] text-[#787C87] placeholder-[#787C87]"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default Input
