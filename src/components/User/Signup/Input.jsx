import { BsCircle, BsEye, BsEyeSlash } from "react-icons/bs"

const Input = (props) => {
    return (
        <div className="relative ">
            <input
                type={props.type}
                id={props.id}
                className="rounded-md border-transparent my-2 flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-[#222222] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            {props.placeholder === 'Email' && <BsCircle size={20} className="absolute top-6 right-2 text-white" />}
            {props.placeholder === 'Username' && <BsCircle size={20} className="absolute top-6 right-2 text-white" />}
            {props.placeholder === 'Create password' && <BsEyeSlash size={20} className="absolute top-6 right-2 text-white" />}
            {props.placeholder === 'a' && <BsEye size={20} className="absolute top-6 right-2 text-white" />}
        </div>
    )
}

export default Input
