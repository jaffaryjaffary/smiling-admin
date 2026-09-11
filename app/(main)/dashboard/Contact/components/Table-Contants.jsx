'use client'
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import { useRouter } from "next/navigation";
export default function TableContacts({FetchContactVisitor}){
    const [searchInput, setSearchInput]=useState()
    const router = useRouter()

    const HandleClick = (currentUser) => {
         router.push(`/dashboard/Visitor-Details/${currentUser}`) 
       
    }
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs] = useState([
    {
        headerName: "S/N",
        valueGetter: (params) => params.node.rowIndex + 1,
    },
    {
        field: "fname",
        headerName: "First Name",
        filter: true,
    },
    {
        field: "lname",
        headerName: "Last Name",
        filter: true,
    },
    {
        field: "email",
        headerName: "Email",
        filter: true,
    },
    {
        field: "phone",
        headerName: "Phone",
        filter: true,
    },
    {
    headerName: "Action",
    cellRenderer: (params) => {
        return (
            <div className="flex gap-2">
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-600"
                    onClick={()=> HandleClick(params.data?._id)}
                >
                    View
                </button>

              
            </div>
        );
    }
}
]);

    const rowData = FetchContactVisitor ?? [];

    

const modules = [AllCommunityModule];
    return(
         
        <div className="">
          
             <div className="lg:flex items-center justify-between">
                 <h1 className="text-2xl font-semibold text-gray-400">List of all contact visitors</h1>
                  <button className="flex items-center gap-2 bg-blue-400 p-2 text-white cursor-pointer hover:bg-blue-500 "><FaPlus /> Add New Visitor</button>
            </div>
            <div className="mt-5 bg-white  w-80 p-4 rounded-2xl flex items-center gap-2">
                <FaSearch />
                <input type="text" placeholder="Search Visitor"   className="outline-0 w-full"
                onChange={(e)=>setSearchInput(e.target.value)}
                />
            </div>
        {/* Data Grid will fill the size of the parent container */}
        <div style={{ height: 400}} className="mt-10">
              <AgGridProvider modules={modules}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                quickFilterText={searchInput}
                pagination={10}
            />
            </AgGridProvider>
        </div>
   





        </div>
        
         
      
    )
}