'use client'
import { DeleteApproveVisitorAction } from "@/app/Actions";
import {  Trash } from "lucide-react";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
export default function RightPage({FetchApprovedVisitorById,currentUser}){

      async function HandleDelete(currentId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this Visitor?");
        if (!confirmDelete) {   
            return; // Exit if the user cancels the deletion
        }
        await DeleteApproveVisitorAction(currentId,'/dashboard/Approve-Visitor-Details')
        redirect('/dashboard/Approved')
        
    }
    return(
        <div className="mt-5">

            <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Profile</h1>
                <div className="text-center lg:flex items-center gap-2">
                    <CgProfile size={40}/>
                    <span className="font-bold">{FetchApprovedVisitorById.fname} {FetchApprovedVisitorById.lname}</span>
                </div>
                <span className="font-bold text-green-400">Approved</span>

            </div>
            <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Email:</h1>
               
                <span className="">{FetchApprovedVisitorById.email}</span>

            </div>
             <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Phone-Number:</h1>
               
                <span className="">{FetchApprovedVisitorById.phone}</span>

            </div>
             <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Destination:</h1>
               
                <span className="">{FetchApprovedVisitorById.destination}</span>

            </div>
             <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Visit-Date:</h1>
               
                <span className="">{FetchApprovedVisitorById.visitDate}</span>

            </div>
             <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">No of Travellars:</h1>
               
                <span className="">{FetchApprovedVisitorById.travellars}</span>

            </div>
            <div className="flex items-center justify-between border-t-2 p-4">
                <h1 className="text0-xl font-bold">Gender:</h1>
               
                <span className="">{FetchApprovedVisitorById.gender}</span>

            </div>
          
               <div className="border-t-2 p-4 flex justify-end">
               <button onClick={() => HandleDelete(FetchApprovedVisitorById?._id)} className="bg-red-400 text-white p-2 cursor-pointer hover:bg-red-500 flex items-center gap-2"><Trash/>Remove Visitor</button>

            </div>
         
           
        </div>
    )
}