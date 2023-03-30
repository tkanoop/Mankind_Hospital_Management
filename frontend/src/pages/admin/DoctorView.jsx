
import BaseTable from '../../components/baseTable'
import React, { useEffect, useState } from 'react'

import axios from "../../instance/axios"
import AdminNavbar from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'


const DoctorView = () => {
    const [doctor, setDoctor] = useState([])
    const getDoctors = async () => {
        try {
            const response = await axios.get("/api/admin/getDoctors")

            setDoctor(response.data)
            console.log(doctor);


        } catch (error) {

        }
    };
    const columns = [
        {
            name: "#",
            cell: (row, index) => <div>{index + 1}</div>,
          },
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Department",
            selector: row => row.department
        },
        {
            name: "Speciality",
            selector: row => row.speciality
        },
        {
            name: "Mobile",
            selector: row => row.mobile

        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "Hospitals",
            selector: row => row.hospitals
        },
        {
            name:"Photo",
            selector:(row) => <img width={50} height={50} src={row.image}/>
        },
        {
            name:"Action",
            selector:(row)=> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Block
          </button>
        },

    ];
    useEffect(() => {
        getDoctors();
    }, []);

    return (
        <>
            <div className='flex gap-24'>
                <div>
                    <AdminNavbar />
                </div>
                <div className='d-flex  flex-column align-items-center'>
                    <NavLink to="/admin/addDoctor">
                <button class="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 mb-4">
            Add Doctor
          </button>
          </NavLink>
                

                    <BaseTable
                        columns={columns}
                        data={doctor}
                        title={"Doctors"}
                    />

                </div>
            </div>
        </>
    )
}

export default DoctorView