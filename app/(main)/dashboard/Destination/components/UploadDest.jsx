'use client'
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react'; 
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const initialValue={
    name:'',
    description:'',
    location:'',
    imageUrl:''
}

export default function UploadDestPage({ FetchAllDestination}){
    const [formData, setFormData]= useState(initialValue)
    const [error,setError] = useState(false)
    const [success,setSuccess]= useState(false)
    const {loading, setLoading} = useState(false)
    const [searchInput, setSearchInput]=useState()
    const router= useRouter()

    const [colDefs] = useState([
        {
            headerName: "S/N",
            valueGetter: (params) => params.node.rowIndex + 1,
        },
        {
            field: "imageUrl",
            headerName: "Image",
            filter: true,
        },
        {
            field: "name",
            headerName: "Title",
            filter: true,
        },
        {
            field: "location",
            headerName: "Region",
            filter: true,
        },
        // {
        //     field: "",
        //     headerName: "Description",
        //     filter: true,
        // },
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

   

    const rowData =  FetchAllDestination ?? [];
    
        
    
    const modules = [AllCommunityModule];
    return(
        <div className="p-10">
            <div className='flex items-center justify-between'>
                  <h1 className="text-2xl font-semibold text-gray-400">Upload New Destination</h1>
                 <button className={'p-2 bg-blue-400 cursor-pointer text-white  hover:bg-blue-500 flex items-center gap-2'} 
                 onClick={()=>router.push('/dashboard/Destination/Add-Destination')}>
                    <Plus/>
                    Add Destination</button>
            </div>
          
<div className="mt-5 bg-white  w-80 p-4 rounded-2xl flex items-center gap-2">
                <FaSearch />
                <input type="text" placeholder="Search Visitor"   className="outline-0 w-full"
                onChange={(e)=>setSearchInput(e.target.value)}
                />
            </div>
          <div style={{ height: 400}} className="mt-20">
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