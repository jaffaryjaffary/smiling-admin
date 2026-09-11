'use client'
import { FaPlus } from "react-icons/fa6";
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react'; 
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AddUserPage({FetchAllUser}){
    const router = useRouter()
      const [searchInput, setSearchInput]=useState()
     
      const HandleClick=(currentId)=>{

        router.push(`/dashboard/Add-users/ViewUserById/${currentId}`)

      }
   
       const [colDefs] = useState([
           {
               headerName: "S/N",
               valueGetter: (params) => params.node.rowIndex + 1,
           },
           {
               field: "fname",
               headerName: "Firstname",
               filter: true,
           },
           {
               field: "lname",
               headerName: "Lastname",
               filter: true,
           },
           {
               field: "email",
               headerName: "Emal",
               filter: true,
           },
           {
               field: "gender",
               headerName: "Gender",
               filter: true,
           },
        //    {
        //        field: "role",
        //        headerName: "Role",
        //        filter: true,
        //    },
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

         const rowData =  FetchAllUser ?? [];

          const modules = [AllCommunityModule];
    return(
        <div>
            <div className="flex items-center justify-between">
             <h1 className="text-2xl font-semibold text-gray-400">List of system users</h1>
             <button onClick={()=> router.push('/dashboard/Add-users/Add-New-User')}
             className="flex items-center gap-2 bg-blue-400 p-2 cursor-pointer hover:bg-blue-500 text-white">
                <FaPlus /> Add New User</button>
        </div>
       <div className="mt-5 bg-white shadow-sm w-100 p-4 rounded-2xl flex items-center gap-2">
                     <FaSearch />
                                     <input type="text" placeholder="Search Visitor"   className="outline-0 w-full"
                                     onChange={(e)=>setSearchInput(e.target.value)}
                                     />
                  </div>
        <div style={{ height: 300}} className="mt-20">
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