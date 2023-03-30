import React,{useState} from "react";
import {ImMenu} from 'react-icons/im'

import { NavLink } from "react-router-dom";

function Nav(){

  const [navb,setNavb] = useState(false)



    return(
      // <div className="text-white h-24 max-w-[1240px] mx-auto px-4 bg-teal-900 items-center flex justify-between">
    
      //   <h1 className="w-full text-3xl font-bold text-white">LOGO</h1>
      //   <ul className="flex hidden">
      //     <li className="p-4 font-semibold">HOME</li>
      //     <li className="p-4 font-semibold">DOCTORS</li>
      //     <li className="p-4 font-semibold">DEPARTMENTS</li>
      //     <li className="p-4 font-semibold">LOGIN</li>
      //   </ul>
      //   <div onClick={handleNavb} className ='block md:hidden'>
      //     {!navb ? <AiOutlineClose size={26}/> : <ImMenu size={26}/>}
          
      //   </div>
      //   <div className={!navb ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-300" : 'fixed left-[-100%]'}>
      //   <h1 className="w-full text-3xl font-bold text-white m-4">LOGO</h1>
      //     <ul className="p-4 uppercase">
      //     <li className="p-4 font-semibold border-b border-gray-600">HOME</li>
      //     <li className="p-4 font-semibold border-b border-gray-600">DOCTORS</li>
      //     <li className="p-4 font-semibold border-b border-gray-600">DEPARTMENTS</li>
      //     <li className="p-4 font-semibold border-b border-gray-600">LOGIN</li>

      //     </ul>
      //   </div>
      //   </div>

      
        <nav className="flex items-center justify-between flex-wrap bg-[#074A52] shadow-2xl ">
  <div className="flex  items-center flex-shrink-0 text-white mr-6 p-3 " >
    <img className="h-[70px] w-[160px]" src="https://res.cloudinary.com/dqzhitag2/image/upload/v1679374789/Main%20Project/logowebsite-removebg-preview_1_d9lqnd.png" alt="Logo" />
    <h1 className="logo text uppercase font-bold text-3xl">Mankind </h1>
  </div>
  <div className="px-4 cursor-pointer md:hidden">
  {<ImMenu size={26}/>}

  </div>
  <div className="menu md:block hidden">
    <NavLink to='/Home' className='pl-8 uppercase text-white font-semibold'>HOmE</NavLink>
    <NavLink to='/Doctors' className='pl-8 uppercase text-white font-semibold'>Doctors</NavLink>
    <NavLink to='/Departments' className='pl-8 uppercase text-white font-semibold'>Departments</NavLink>

  </div>
  <div className="login md:block hidden">
    <NavLink to='/signup' className='pr-8 uppercase text-white font-semibold'>Login</NavLink>
  </div>



        </nav>















    )


}

export default Nav;