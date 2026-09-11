'use client'
import LogoutActions from "@/app/Actions"
import { MdOutlineMenu } from "react-icons/md";
import NavBar from "./NavBarToogle";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import SideBar from "./SideBar";



export default function Headers({currentUser}){
    const [open,setOpen] = useState(false)
    const  fullName = `${currentUser.data.fname} ${currentUser.data.lname}`
    const initials = fullName
    .trim()
    .split(/\s+/)
    .map((word)=>word.charAt(0))
    .join('')
    .toUpperCase()

    async function HandleLogout() {

        await LogoutActions()
        
    }
    return(
        <>
        <div className="bg-orange-100   p-4 flex justify-between items-center">
            <div>
                <h1 className="hidden text-xl font-bold lg:block">Get Start With Smiling</h1>
               
                  {open ?  <IoClose onClick={()=>setOpen(false)} className='lg:hidden'size={30}/>:
                  
                    <MdOutlineMenu onClick={()=>setOpen(true)} className='lg:hidden'size={30}/>
                  }
                
                 
                  
                
                  
                  
             
               
            </div>
            <div className="flex items-center gap-2">
               
                    <h1  className="bg-amber-500 rounded-full w-10 h-10 items-center justify-center flex text-xl text-white">{initials}</h1>

                    <div className="border border-amber-300 p-2 rounded-2xl">
                        <button onClick={HandleLogout} className="text-sm font-bold text-red-400 cursor-pointer">Logout</button>
                    </div>
                   
            </div>
        </div>

         {open&&(
                        <SideBar setOpen={setOpen} open={open}/>
                        //  <NavBar/>
                      )}

        </>
    )
}