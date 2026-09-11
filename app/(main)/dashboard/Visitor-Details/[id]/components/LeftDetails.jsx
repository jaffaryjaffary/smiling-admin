'use client'
import { ApproveVisitorAction, DeleteVisitorAction } from "@/app/Actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
export default function LeftDetailsPage({FetchVisitoById,currentUser}){
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    async function HandleDelete(currentId) {
        try {

            await DeleteVisitorAction(currentId, '/dashboard/Visitor-Details')

            router.replace('/dashboard/Contact')
            
        } catch (error) {
          console.log(error)            
        }
        
    }

    async function HandleSubmit(currentId) {

        try {

            const result = await ApproveVisitorAction({
                 fname:FetchVisitoById?.fname,
                 lname:FetchVisitoById?.lname,
                 email:FetchVisitoById?.email,
                 phone:FetchVisitoById?.phone,
                 visitDate:FetchVisitoById?.visitDate,
                 travellars:FetchVisitoById?.travellars,
                 gender:FetchVisitoById?.gender,
                 destination:FetchVisitoById?.destination,
                 approvedByFname: currentUser?.data.fname,
                 approvedByLname: currentUser?.data.lname,

            },currentId,'/dashboard/Visitor-Details')

            await DeleteVisitorAction(currentId, '/dashboard/Visitor-Details')
            
            if(result.success){
                setSuccess(result.message)
                setTimeout(()=>{
                router.replace('/dashboard/Contact')
                },4000)

            }else{
                setSuccess(result.message)
            }
        } catch (error) {
            console.log(error)
            
        }
        
    }
    return(
        <div>
              {success &&(

                <div className="bg-white shadow-lg w-90 mt-4  border-l-5 border-l-green-500">
                 <p className="flex items-center gap-2"> <FcApprove size={50}/>{success}</p>
              </div>

              )}
              
           
          

            <div className=" border-t flex justify-between items-center p-4 mt-4">

                
               
                <h1 className="font-bold">Profile</h1>
                <div className="flex items-center gap-2">

                      <CgProfile  size={40}/>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{FetchVisitoById?.fname}</span>
                       <span className="text-sm font-bold"> {FetchVisitoById?.lname}</span> 
                      </div>
                    


                </div>
              
                <h1>New Visitor</h1>

            </div>
             <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Email</h1>
                <span>{FetchVisitoById?.email}</span>
            </div>

             <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Phone-Number</h1>
                <span>{FetchVisitoById?.phone}</span>
            </div>

            <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Visit Date</h1>
                <span>{FetchVisitoById?.visitDate}</span>
            </div>
            <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Travellars</h1>
                <span>{FetchVisitoById?.travellars}</span>
            </div>

            <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Destination</h1>
                <span>{FetchVisitoById?.destination.join(',')}</span>
            </div>

             <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Gender</h1>
                <span>{FetchVisitoById?.gender}</span>
            </div>

            <div className=" border-t flex justify-between items-center p-4">
               
                <h1 className="font-bold">Comment</h1>
                <span>{FetchVisitoById?.comment}</span>
            </div>

                <div className="border-t flex gap-2 items-center justify-end">
                    <button typ='submit' onClick={()=>HandleDelete(FetchVisitoById?._id)}  className="flex items-center gap-2 bg-red-400 text-white p-2 mt-4 cursor-pointer hover:bg-red-600"><FaTrash />Delete</button>
                     <button type="submit" onClick={()=>HandleSubmit(FetchVisitoById?._id)} className="flex items-center gap-2 bg-blue-400 text-white p-2 mt-4 cursor-pointer hover:bg-blue-500"><FcApprove />Approve</button>
                </div>
        </div>
    )
}