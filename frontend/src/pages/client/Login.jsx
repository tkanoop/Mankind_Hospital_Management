import React, { useState } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav";
import axios from "../../instance/axios";
import { useNavigate } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    
    const navigate= useNavigate();
    const [mobile, setMobile] = useState("");
    
    const [password, setPassword] = useState("");

 
   

    const clientLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                "/api/client/login",
                {
                  
                    mobile,
                    password
                }
            ).then((data)=>{

                navigate('/')

            })
        } catch (error) {
          
            console.log(error);
           
        }
    };

    return (
        <>
            <Nav />

            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="hidden sm:block">
                    <img
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dqzhitag2/image/upload/v1679461001/Main%20Project/user%20credentials/sign_up_hamog0.jpg"
                        alt=""
                    />
                </div>

                <div className="bg-gray-800 flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
                        <h2 className="text-4xl dark:text-white font-bold text-center">
                           LOGIN
                        </h2>
                       
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Mobile</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="string"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-gray-400 py-2">
                            <label>Password</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="string"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                      
                        <div className="flex justify-between text-gray-400 py-2">
                            <p>
                                New to here? <span className="font-bold ">Sign UP</span>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full my-5 py-2 bg-teal-500 shadow-lg  hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                            onClick={clientLogin}
                        >
                            SIGN IN
                        </button>
                    </form>
                   
                </div>
            </div>
            <Footer />
        </>
    );


}
