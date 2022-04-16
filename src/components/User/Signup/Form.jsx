import React, { useState } from "react"
import Input from "./Input"
import { BsArrowRight, BsApple, BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import cogoToast from "cogo-toast";
import { REGISTER_USER } from "../../../Utils/apiConstant";
import Loader from "../Loader/Loader";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";


const Form = () => {


    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const strAuth = localStorage.getItem("strAuth");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userName) {
            cogoToast.error("UserName is required");
            return;
        }
        if (!email) {
            cogoToast.error("Email is required");
            return;
        }
        if (!password) {
            cogoToast.error("UserName is required");
            return;
        }

        setLoading(true);
        const data = {
            name: userName,
            email: email,
            password: password
        }

        await axios.post(REGISTER_USER, data)
            .then((res) => {
                console.log(res.data);
                cogoToast.success("User Registered successfully");
                setLoading(false);
                localStorage.setItem("strAuth", res.data.token)
                navigate("/")
            })
            .catch(err => { 
                setLoading(false)
                cogoToast.error(err.response.data.message)
             })
    }

    return (
        <div className=" form-auth">
            {strAuth ? <Navigate replace to="/" /> : null }
            <Loader loading={loading} />
            <div className="text-center">
                <h1 className="text-white mx-8 leading-[62px] text-[50px] font-bold md:font-extrabold font-['Rota']">Register Your Account</h1>
                <p className="text-[#999A9C] mx-8 my-3 leading-7 font-normal font-['Rota'] f-a-p">Choose from 130,000 online video courses with new additions published every second month</p>
            </div>
            <div className="flex flex-col-reverse md:flex md:flex-row justify-between my-8 f-a-div">
                <div className="mx-6 sm:mx-8 md:mx-2 md:w-full">
                    <form action="" className="md:mr-6 md:ml-32 lg:mr-12 lg:ml-48">
                        <Input name={"username"} placeholder={"User Name"} type={"text"} onChange={(e) => setUserName(e.target.value)} id={"user-name"} />
                        <Input name={"email"} placeholder={"Email"} type={"email"} onChange={(e) => setEmail(e.target.value)} id={"email"} />
                        <Input name={"pin"} placeholder={"password"} type={"password"} onChange={(e) => setPassword(e.target.value)} id={"pass-word"} />

                        <button className="w-full rounded-md text-white my-2 bg-gradient-to-r from-[#9A3EBF] via-[#C53660, #E93141] to-[#F98B51] py-3 px-4 signin-btn" onClick={(e) => handleSubmit(e)}>Get Started<BsArrowRight size={20} className="float-right mt-1" /></button>
                    </form>
                </div>
                <div className="flex justify-center items-center m-4">
                    <h1 className="text-[#999A9C] leading-10 f-divider">/</h1>
                </div>
                <div className="mx-2 sm:mx-8 md:mx-2 md:w-full">
                    <div className="md:ml-6 md:mr-32 lg:ml-12 lg:mr-48">
                        <div className="py-2 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#9052A5] to-[#F76E2E]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white rounded-md med-font">
                                    <BsGoogle size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3 " />
                                    Sign up with Google
                                </span>
                            </button>
                        </div>
                        <div className="py-2 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#F76E2E] to-[#9052A5]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white rounded-md med-font">
                                    <FaFacebookF size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3" />
                                    Sign up with Facebook
                                </span>
                            </button>
                        </div>

                        <div className="py-2 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#9052A5] to-[#F76E2E]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white text-sm md:text-md rounded-md med-font">
                                    <BsApple size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3" />
                                    Sign up with Apple Account
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-white text-center m-8 f-b-t">
                    Already have an account?
                    <a className="underline cursor-pointer ml-2">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Form
