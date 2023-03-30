
import BaseTable from '../../components/baseTable'
import React, { useEffect, useState } from 'react'

import axios from "../../instance/axios"
import { NavLink } from 'react-router-dom'
import AdminNavbar from '../../components/Sidebar'



const DepartmentView = () => {
    const [department, setDepartment] = useState([])
    const getDepartments = async () => {
        try {
            const response = await axios.get("/api/admin/getDepartments")

            setDepartment(response.data)
            console.log(department);


        } catch (error) {

        }
    };
    const columns = [
        {
            name: "#",
            cell: (row, index) => <div>{index + 1}</div>,
          },
      
        {
            name: "Department",
            selector: row => row.department
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
        getDepartments();
    }, []);

    return (
        <>
            <div className='flex gap-24'>
                <div>
                    <AdminNavbar />
                </div>
                <div className='d-flex w-8/12 flex-column align-items-center'>
                <NavLink to="/admin/addDepartment">
                <button class="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
            Add Department
          </button>
          </NavLink>

                    <BaseTable
                        columns={columns}
                        data={department}
                        title={"Departments"}
                    />

                </div>
            </div>
        </>
    )
}

export default DepartmentView