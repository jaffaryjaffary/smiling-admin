'use client'
import { CgProfile } from "react-icons/cg";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { redirect } from "next/navigation";
import { DeleteCreateUserSystemAction, UpdateCreateUserSystemAction } from "@/app/Actions";


export default function RightSide({FetchUserById,  currentUser }){
  


    
    const  HanleUpdate=async(formData)=>{
    const confirmUpdate = window.confirm("Are you sure you want to update this user?");
    if(!confirmUpdate){
          return;
    }
    const res = await UpdateCreateUserSystemAction(formData)
    if(res.success){
        redirect('/dashboard/Add-users')
    }

  }  

  const HandleDelete=async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) {   
            return; // Exit if the user cancels the deletion
        }

    await DeleteCreateUserSystemAction(id,'/123456789')
    redirect('/dashboard/Add-users')
  }

   
    return(
        <div className="flex items-center p-4 mt-5 justify-center  h-screen gap-20">
            <div className="hidden  lg:flex w-[20%] h-screen ">
                <div className="p-2">
                    <h1 className="text-2xl font-bold">Account</h1>
                    <p className="text-gray-400">Manage Account Info</p>

                    <div className="flex items-center mt-10 gap-2 bg-gray-400 p-2 rounded-2xl">
                       <span><CgProfile size={20}/></span>
                       <p className="text-xl font-semibold">Profile</p>
                    </div>
                    <div className="mt-5">
                        <small className="text-xl">Privellage:<span className="font-bold">{FetchUserById.role}</span></small>
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-screen">
                <div className="p-4 border-b border-gray-400 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Profile Details</h1>
                  
                </div>
                <div className="p-4 flex items-center justify-between border-b border-gray-400">
                    <h1 className="text-xl font-semibold">Profile</h1>
                    <span className="flex items-center gap-2"><CgProfile size={40}/>
                     <small className="font-bold text-xl">{FetchUserById.fname} {FetchUserById.lname}</small>
                    </span>
                    <p className="font-bold text-xl">{FetchUserById?.userInfo?.role}</p>
                </div>

                <div>
                    <form action={ HanleUpdate}>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            
                            <input type="hidden" name='id' 
                              defaultValue={FetchUserById?._id}
                            //  value={formData._id}
                                //   onChange={(e)=> setFormData({...formData,_id:e.target.value})}
                            />
                            
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Firstname</label>
                                <input type="text" name='fname' className="border p-3 font-serif text-xl"
                                  
                                   defaultValue={FetchUserById?.fname}
                                // onChange={(e)=> setFormData({...formData,fname:e.target.value})}

                                   />
                              


                            </div>
                             <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Lastname</label>
                                <input type="text"  name='lname' className="border p-3 font-serif text-xl"
                                //   value={formData.lname}
                                     defaultValue={FetchUserById?.lname}
                                    // onChange={(e)=> setFormData({...formData,lname:e.target.value})}
                                />
                            </div>
                             <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Email</label>
                                <input type="text"  name='email' className="border p-3 font-serif text-xl" 
                                 defaultValue={FetchUserById?.email}
                                // onChange={(e)=> setFormData({...formData,email:e.target.value})}
                                />
                            </div>
                             {/* <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Phone-Number</label>
                                <input type="text"  name='phone' className="border p-3 font-serif text-xl"
                                  value={formData.phone}
                                  onChange={(e)=> setFormData({...formData,phone:e.target.value})}
                                />
                            </div> */}
                             <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Role</label>
                                <select name="role" id=""
                                className="border p-3 font-serif text-xl"
                                     defaultValue={FetchUserById?.role}
                                    // onChange={(e)=> setFormData({...formData,role:e.target.value})}
                                >
                                    <option value="Admin">Admin</option>
                                     <option value="Normal User">Normal User</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl font-bold">Gender</label>
                                <input type="text"  name='gender' className="border p-3 font-serif text-xl"
                                //   value={formData.lname}
                                     defaultValue={FetchUserById?.gender}
                                    // onChange={(e)=> setFormData({...formData,gender:e.target.value})}
                                />
                            </div>
                         
                        </div>

                       
                        
                       
                          

                            <div className="flex items-center gap-2 px-5">
                                <button onClick={()=> HandleDelete(FetchUserById?._id)}
                                
                                className="flex items-center gap-1 bg-red-700 text-white p-2 cursor-pointer"><FaTrashCan />Delete</button>
                                 <button 
                                 className=
                                 "flex items-center gap-1 bg-blue-700 text-white p-2 cursor-pointer">
                                    <IoIosCloudUpload />Update</button>
                            </div>


                         
                            
                    
                           
                    </form>
                </div>
            </div>
        </div>
    )
}