import Dropdown from "../../Dropdown/Dropdown"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi"
import Input from "../../Input/Input";

const CallToActions = () => {

    function handleChange(e){
        //---
    }

    return (
        <div className=" bg-white">
            <div className="mt-4">
                <Dropdown name={"Use previously saved popup"} />
            </div>
            <div className="mt-4">
                <Dropdown name={"Select your goal   Promote Link / Grow Email List "} />
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-grow h-[84px] relative">
                    <img src='./Assets/space.png' className="absolute object-fill" alt="space" layout="fill" />
                </div>
                <div className="flex flex-grow h-[84px] relative">
                    <img src='./Assets/1-rocket.png' className="absolute object-fill" alt="rocket" layout="fill" />
                </div>
                <div className="flex flex-grow h-[84px] relative">
                    <img src='./Assets/1-rocket.png' className="absolute object-fill" alt="rocket" layout="fill" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Input name={""} placeholder={"Background Color"} type={"text"} onChange={handleChange} id={""} value={""} />
                <button className="bg-[#616A71] m-auto col-span-1 items-center w-full text-sm text-white py-2.5 rounded px-2"> or upload background Image</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <Input name={""} placeholder={"Enter your headline here"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
                <div className="col-span-1">
                    <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <Input name={""} placeholder={"Enter your text here"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
                <div className="col-span-1">
                    <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <Input name={""} placeholder={"Enter your button text here"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
                <div className="col-span-1">
                    <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                </div>
            </div>
            <div>
                <Input name={""} placeholder={"Display popup after ___seconds"} type={"text"} onChange={handleChange} id={""} value={""} />
            </div>
            <Dropdown name={"Show close button"} />
            <div>
                <Input name={""} placeholder={"Enter button URL here"} type={"text"} onChange={handleChange} id={""} value={""} />
            </div>
            <Dropdown name={"Choose email autoresponder connection"} />
            <div>
                <Input name={""} placeholder={"Enter name to save this CTA"} type={"text"} onChange={handleChange} id={""} value={""} />
            </div>

            <div className="flex absolute top-44 right-4 items-center gap-0.5">
                <HiOutlineArrowSmLeft className="cursor-pointer" size={20} />
                <HiOutlineArrowSmRight className="cursor-pointer" size={20} />
            </div>
            <div className="flex absolute top-[475px] left-4 items-center gap-0.5">
                <AiOutlineMinus className="cursor-pointer" size={20} />
                <AiOutlinePlus className="cursor-pointer" size={20} />
            </div>
        </div>

    );
};

export default CallToActions
