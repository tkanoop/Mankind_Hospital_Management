import "./Verify.css";
import React, { useState } from "react";
import OTPInput from 'react18-input-otp';
import axios from "../../instance/axios"
import {useNavigate,useLocation } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Nav from "../../components/nav";
import Footer from "../../components/Footer";

export default function Verify() {
    const navigate = useNavigate()
    const [OTP, setOTP] = useState("");
    const Location=useLocation();
    const data=Location.state;
    const toastConfig={
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastClassName:"toast-container",
        bodyClassName:"toast-body",
        closeButton: true, 
  closeButton: <span className="toast-close-button"></span>,
        theme: "dark",
    }
  
   

    
    function handleChange(OTP) {
        setOTP(OTP);
     
    }
    const submit = async (e) => {
        e.preventDefault();
        try{
            const {datas} = await axios .post(
                "/api/client/submit",
                {
                    OTP,
                    data

                }
            ).then(()=>{
                navigate('/login')

            })

        }catch(error){
            toast.error(`${error.response.data.message}`)
            console.log(error.response.data.message);

        }

    }



    return (
        <>
            <Nav />
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="hidden sm:block">
                    <img
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dqzhitag2/image/upload/v1679637377/Main%20Project/Health-Insurance_pmvllw.jpg"
                        alt=""
                    />
                </div>
                <div className="bg-gray-800 flex flex-col justify-center">
                    <div className="verifyDiv">
                        <p className="p1">Verify Account</p>
                        <p className="p2">
                            An OTP has been sent to your entered mobile number
                        </p>
                        <div className="otpElements">
                            <p className="p3">Enter your Code here</p>
                            <div className="otp">
                                <OTPInput
                                    onChange={handleChange}
                                    value={OTP}
                                    inputStyle="inputStyle"
                                    numInputs={6}
                                    separator={<span></span>}
                                />
                            </div>


                        </div>
                        <div className="sub">
                        <button className="but" onClick={submit} type="submit">VERIFY</button>
                        </div>
                    </div>
                </div>
                <ToastContainer {...toastConfig} />
            </div>

            <Footer />



        </>
    )
}

