const Input = (props) => {
    return (
        <div className="flex-1">
            <input
                type={props.type}
                id={props.id}
                className="rounded-md border-transparent my-1 appearance-none border w-full py-2 px-4 bg-[#F4F7F9] text-[#787C87] placeholder-[#787C87] text-base"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default Input