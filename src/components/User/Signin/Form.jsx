import React, { useState } from "react"
import Input from "./Input"
import { BsArrowRight, BsApple, BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import cogoToast from "cogo-toast";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate, Navigate } from "react-router";
import { LOGIN_USER } from "../../../Utils/apiConstant";





const Form = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const strAuth = localStorage.getItem("strAuth");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            cogoToast.error("Email is required");
            return;
        }

        if (!password) {
            cogoToast.error("password is required");
            return;
        }

        setLoading(true)

        const data = {
            email: email,
            password: password
        }

        await axios.post(LOGIN_USER, data)
            .then((res) => {
                console.log(res.data);
                cogoToast.success("User logged in successfully");
                setLoading(false);
                localStorage.setItem("strAuth", res.data.token)
                localStorage.setItem('libid', res.data.data.libid)
                localStorage.setItem('apikey', res.data.data.apikey)
                localStorage.setItem('cdn', res.data.data.cdn)
                if(res.data.data.isAdmin){
                    navigate("/dashboard")
                }else{
                    navigate("/")
                }

            })
            .catch(err => {
                
                setLoading(false)
                cogoToast.error(err.response.data.message)
            
            })

    }

    return (
        <div className=" form-auth">
            {strAuth ? <Navigate replace to="/" /> : null}
            <Loader loading={loading} />
            <div className="text-center">
                <h1 className="text-white mx-8 leading-[62px] text-[50px] font-bold md:font-extrabold font-['Rota']">Login Your Account</h1>
                <p className="text-[#999A9C] mx-8 my-3 leading-7 font-normal font-['Rota'] f-a-p">Choose from 130,000 online video courses with new additions published every second month</p>
            </div>
            <div className="flex flex-col sm:flex-col-reverse lg:flex lg:flex-row justify-between my-8 f-a-div">
                <div className="mx-6 lg:mx-8 lg:mx-2 lg:w-full">
                    <form action="" className="sm:mx-auto sm:w-[80%] w-full lg:ml-12 lg:mr-48">
                        <Input name={"Email"} placeholder={"email"} type={"text"} onChange={(e) => setEmail(e.target.value)} id={"user-name"} />
                        <Input name={"pin"} placeholder={"password"} type={"password"} onChange={(e) => setPassword(e.target.value)} id={"pass-word"} />
                        <button className="w-full rounded-md text-white my-2 bg-gradient-to-r from-[#9A3EBF] via-[#C53660, #E93141] to-[#F98B51] py-3 px-4 signin-btn" onClick={(e) => handleSubmit(e)}>Get Started<BsArrowRight size={20} className="float-right mt-1" /></button>
                    </form>
                </div>
                <div className="flex justify-center items-center m-4">
                    <h1 className="text-[#999A9C] leading-10 f-divider">/</h1>
                </div>
                <div className="mx-6 lg:mx-8 lg:mx-2 lg:w-full">
                    <div className="sm:mx-auto sm:w-[80%] w-full lg:ml-12 lg:mr-48">
                        <div className="py-1 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#9052A5] to-[#F76E2E]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white text-sm md:text-md rounded-md med-font">
                                <BsGoogle size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3 " />
                                    Sign In with Google
                                </span>
                            </button>
                        </div>
                        <div className="py-2 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#F76E2E] to-[#9052A5]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white rounded-md med-font">
                                    <FaFacebookF size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3" />
                                    Sign In with Facebook
                                </span>
                            </button>
                        </div>

                        <div className="py-2 px-4">
                            <button className="w-full inline-flex p-[1px] items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-[#9052A5] to-[#F76E2E]">
                                <span className="w-full inline-flex py-4 px-4 bg-[#161616] text-white text-sm md:text-md rounded-md med-font">
                                    <BsApple size={20} className="float-left mr-1 md:mr-1.5 lg:mr-3" />
                                    Sign In with Apple Account
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-white text-center m-8 f-b-t">
                    New User?
                    <a className="underline cursor-pointer ml-2">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default Form
