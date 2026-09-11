'use client'
import Image from "next/image";
import { MenuList } from "./Share";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SideBar({setOpen, open, currentUser}){
    const usePath = usePathname()

    const  fullName = `${currentUser?.data.fname} ${currentUser?.data.lname}`
    const initials = fullName
    .trim()
    .split(/\s+/)
    .map((word)=>word.charAt(0))
    .join('')
    .toUpperCase()
    return(
        <div className="shadow-sm h-screen  p-4 ">
            <div className="flex items-center justify-center gap-2">
                 <Image 
             src="/images/picture36.jpeg"
             alt=""
            className="object-cover rounded-full"
            width={60}
            height={60}
            />
              <h1 className="text-red-400 text-xl font-bold">Smiling Hours</h1>
              
            </div>
             <hr className="mt-5 text-gray-400" />

             <div className="mt-5 p-4">
                {MenuList.map((item,index)=>
                

                    <ul key={index} >

                    <Link href={item.path}>
                   
                    <li className={`flex items-center gap-2 p-3 text-md text-slate-500  rounded-2xl  ${usePath === item.path
                        ? 'bg-blue-400 text-white' :''
                    }`}>
                          <span>{item.icon}</span>
                       
                        <span className="">{item.title}</span>
                        </li>
                        </Link>
                   
                </ul>

                )}
                
            
                 <div className="flex items-center gap-2 bottom-5 fixed">
                    <div>
                    <h1  className="bg-amber-300 rounded-full w-10 h-10 items-center justify-center flex">{initials}</h1>
                   </div>
                   <div>
                       <p className="font-bold">{currentUser?.data.fname} {currentUser?.data.lname}</p>
                    <p className="text-slate-500">{currentUser?.data.email}</p>
                   </div>
                  
                 </div>
               
             </div>
        </div>
    )
}