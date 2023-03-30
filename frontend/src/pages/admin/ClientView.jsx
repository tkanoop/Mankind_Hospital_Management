
import BaseTable from '../../components/baseTable'
import React, { useEffect, useState } from 'react'

import axios from "../../instance/axios"
import AdminNavbar from '../../components/Sidebar'


const ClientView = () => {
    const [client, setClient] = useState([])
    const getClients = async () => {
        try {
            const response = await axios.get("/api/admin/getClients")

            setClient(response.data)
            console.log(client);


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
            name: "Age",
            selector: row => row.age
        },
        {
            name: "Gender",
            selector: row => row.gender
        },
        {
            name: "Address",
            selector: row => row.address

        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "Mobile",
            selector: row => row.mobile
        },
        {
            name:"Action",
            selector:(row)=> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Block
          </button>
        },

    ];
    useEffect(() => {
        getClients();
    }, []);

    return (
        <>
            <div className='flex gap-24'>
                <div>
                    <AdminNavbar />
                </div>
                <div className='d-flex w-8/12 flex-column align-items-center mt-5'>

                    <BaseTable
                        columns={columns}
                        data={client}
                        title={"Clients"}
                    />

                </div>
            </div>
        </>
    )
}

export default ClientView