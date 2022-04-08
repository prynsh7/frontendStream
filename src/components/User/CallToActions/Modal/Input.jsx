import React from 'react'

const Input = (props) => {
    return (
        <div className="">
            <input
                type={props.type}
                id={props.id}
                className="rounded-md border-transparent my-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 outline-[0.5px] placeholder-gray-4 text-base"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default Input