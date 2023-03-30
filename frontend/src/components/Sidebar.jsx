import React from 'react'
import { useState,useEffect } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiCustomerService2Line } from 'react-icons/ri'
import { BsBuildingAdd } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { TbBrandBooking } from 'react-icons/tb'
import { MdOutlineLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/admin/useLogout'

const AdminNavbar = () => {
    const { logout }=useLogout();
    const handleLogout = () => {
        logout();
    }
    const menus = [
        { name: "Dashboard", link: '/admin', icon: MdOutlineDashboard },
        { name: "Doctors", link: '/admin/doctorView', icon: AiOutlineUsergroupAdd },
        { name: "Clients", link: '/admin/clientView', icon: RiCustomerService2Line },
        { name: "Departments", link: '/admin/departmentView', icon: BsBuildingAdd },
        { name: "Appointments", link: '/', icon: AiOutlineSchedule },
        { name: "Prescriptions", link: '/', icon: TbBrandBooking },
        
    ];
    const [open, setOpen] = useState(true);
    console.log(open);
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 640) {
            setOpen(false);
          }
          if (window.innerWidth > 640) {
            setOpen(true);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <section className='flex '>
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-2/10' : 'w-16'} duration-500 text-gray-100 px-4 `}>
                <div className='py-3 flex justify-end'>
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />

                </div>

                <div className='mt-4 flex flex-col gap-4 relative' >
                    {
                        menus?.map((menu, i) => (


                            <Link to={menu?.link} key={i} className=" group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-teal-800 rounded-2xl">
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2 style={{
                                    transitionDelay: `${i + 3}00ms`
                                }}
                                    className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                    {menu?.name}
                                </h2>
                                <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-2xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu?.name}
                                </h2>
                            </Link>
                            
                        ))
                    }



                </div>
                <div className='py-6 px-2 flex justify-start'>
                    <MdOutlineLogout size={26} className="cursor-pointer" onClick={handleLogout} />

                </div>

            </div>
            


        </section>
    )
}

export default AdminNavbar