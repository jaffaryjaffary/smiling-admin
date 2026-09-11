'use client'
import { FaPlus } from "react-icons/fa6";
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react'; 
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function ApprovedVisitor({FetchAllApprovedVisitor}){
    const[search,setSearch]=useState()
    const router = useRouter()


     const HandleClick = (currentUser) => {
         router.push(`/dashboard/Approve-Visitor-Details/${currentUser}`) 
       
    }
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
       const rowData = FetchAllApprovedVisitor ?? [];     
    
    
       
    
    const modules = [AllCommunityModule];
    return(
      <div className="p-10">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-400">List of approved visitors</h1>
            <button onClick={()=>router.push('/dashboard/Add-Visitor')}
            className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 p-2 text-white cursor-pointer"><FaPlus />Add New Visitor</button>
        </div>

         <div className="mt-5 bg-white  w-80 p-4 rounded-2xl flex items-center gap-2">
                        <FaSearch />
                        <input type="text" placeholder="Search Visitor"  className="w-full outline-0"
                        onChange={(e)=>setSearch(e.target.value)}
                        />
                    </div>

          <AgGridProvider modules={modules}>
                {/* Data Grid will fill the size of the parent container */}
                <div style={{ height: 400 }} className="mt-10">
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                        quickFilterText={search}
                        pagination={10}
                    />
                </div>
            </AgGridProvider>
      </div>
    )
}