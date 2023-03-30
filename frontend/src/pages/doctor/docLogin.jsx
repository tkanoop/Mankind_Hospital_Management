import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../instance/axios"



export default function DocLogin() {
  const navigate=useNavigate();
    const[email, setEmail]=useState("");

    const[password,setPassword]=useState("")

    const doctorLogin = async (e) => {
      e.preventDefault();

      try {
          const { data } = await axios.post(
              "/api/doctor/login",
              {
                
                  email,
                  password
              }
          ).then((data)=>{

              navigate('/docHome')

          })
      } catch (error) {
        
          console.log(error);
         
      }
  };




    return (
        <>

<div className="min-h-screen bg-cover bg-center flex flex-col md:flex-row">
      <div className="md:w-1/2 h-64 md:h-auto relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>
        <img
          className="absolute w-full h-full object-cover"
          src="https://res.cloudinary.com/dqzhitag2/image/upload/v1679064651/Main%20Project/hosuserside_chuwmd.jpg"
          alt="Background"
        />
        <div className="absolute w-full h-full flex items-center justify-center">
        
          <h1 className="text-black text-4xl font-bold">Welcome</h1>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-teal-800">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="username">
             Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
            onClick={doctorLogin}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    );
}

