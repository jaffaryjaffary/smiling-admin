'use client'
import { FaPeopleGroup } from "react-icons/fa6";
import { FcApprove } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
export default function CardsPage({FetchContactVisitor,FetchApprovedVisitor,FetchAllUser, FetchAllDestination}){
    return(
        <div className="p-10 h-screen">
            <div className="">
                <h1 className="text-2xl font-bold text-gray-400">Dashboard</h1>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                <div className="bg-blue-400 rounded-2xl p-4  border border-blue-300">
                    <h1 className="text-white text-xl">Contact Visitors</h1>
                    <div className="flex items-center gap-5 mt-2">
                          <h1 className="bg-gray-300 w-15 rounded-2xl flex items-center justify-center p-2 mt-2">
                         <FaPeopleGroup color="#9932CC" size={30}/>  
                    </h1>
                   
                   <div>
                     <span className="text-xl font-bold">{FetchContactVisitor?.length} Total</span>
                    <h1 className="text-amber-300 font-bold">Available</h1>
                   </div>
                  

                    </div>
                  
                </div>

                {/* secand card */}

                <div className="bg-blue-400 rounded-2xl p-4">
                    <h1 className="text-white text-xl">Approved Visitors</h1>
                    <div className="flex items-center gap-5 mt-2">
                          <h1 className="bg-gray-300 w-15 rounded-2xl flex items-center justify-center p-2 mt-2">
                         <FcApprove color="#9932CC" size={30}/>  
                    </h1>
                   
                   <div>
                     <span className="text-xl font-bold">{FetchApprovedVisitor?.length} Total</span>
                    <h1 className="text-amber-300 font-bold">Available</h1>
                   </div>
                  

                    </div>
                  
                </div>

                {/* Third cards */}
                <div className="bg-blue-400 rounded-2xl p-4 ">
                    <h1 className="text-white text-xl">Added System User</h1>
                    <div className="flex items-center gap-5 mt-2">
                          <h1 className="bg-gray-300 w-15 rounded-2xl flex items-center justify-center p-2 mt-2">
                         <FaUsers color="#9932CC" size={30}/>  
                    </h1>
                   
                   <div>
                     <span className="text-xl font-bold">{FetchAllUser?.length} Total</span>
                    <h1 className="text-amber-300 font-bold">Available</h1>
                   </div>
                  

                    </div>
                  
                </div>
                {/* fourth card */}

                <div className="bg-blue-400 rounded-2xl p-4">
                    <h1 className="text-white text-xl">Destinations</h1>
                    <div className="flex items-center gap-5 mt-2">
                          <h1 className="bg-gray-300 w-15 rounded-2xl flex items-center justify-center p-2 mt-2">
                         <FaRegHandPointer color="#9932CC" size={30}/>  
                    </h1>
                   
                   <div>
                     <span className="text-xl font-bold">{FetchAllDestination?.length} Total</span>
                    <h1 className="text-amber-300 font-bold">Available</h1>
                   </div>
                  

                    </div>
                  
                </div>

                {/* fifth cards */}

                {/* <div className="bg-blue-400 rounded-2xl p-4">
                    <h1 className="text-white text-xl">Help && Support</h1>
                    <div className="flex items-center gap-5 mt-2">
                          <h1 className="bg-gray-300 w-15 rounded-2xl flex items-center justify-center p-2 mt-2">
                         <GrHelpBook color="#9932CC" size={30}/>  
                    </h1>
                   
                   <div>
                     <span className="text-xl font-bold">0 Total</span>
                    <h1 className="text-amber-300 font-bold">View Details</h1>
                   </div>
                  

                    </div>
                  
                </div> */}
            </div>
              
                   {/* <ChartPage/> */}
                   {/* <PieChart/> */}
             
           
        </div>
    )
}