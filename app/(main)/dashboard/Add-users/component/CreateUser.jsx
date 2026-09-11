'use client'
import { RegisterActions } from "@/app/Actions";
import { toast } from "@/components/ui/toast";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { IoMdClose } from "react-icons/io";

const initialValue={
    fname:'',
    lname:'',
    email:'',
    password: '',
    role:'',
    gender:'',

}

export default function CreateUser(){

    const {handleSubmit,reset,register,formState:{errors}} =useForm()
    const [formData, setFormData] = useState(initialValue)
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(false)

    const onSubmit =async(formData, e)=>{
        e.preventDefault()
       const result = await RegisterActions(formData, '/dashboard/Add-users/Add-New-User')

       if(result.success){
        reset()
        toast.add({
        title: "Success",
        description: result.message,
        
})

        setLoading(true)
       setTimeout(()=>{
        setLoading(false)
       },4000)
       }else{
        setError(result.message)
        toast.add({
            title: "Error",
            description: result.message,
            variant:'destructive'
        })
       }
       
    }

    return(
        <div>
            <div>
                <h1 className="text-2xl font-bold text-gray-400">Create New User</h1>
                
              
                <div className="bg-white mt-10">
                    <div className="bg-blue-400 p-2">
                        <h1 className="text-white">Add user form</h1>
                    </div>
                  
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col p-2">
                                <label htmlFor="">Firstname</label>
                                <input type="text" name="fname" placeholder="Enter firstname" className="border p-2"
                                onChange={(e)=>setFormData({...formData,fname:e.target.value})}
                                {...register('fname',{required:'Please firstname is required'})}
                                />
                                {errors.fname &&(<p className="text-red-400">{errors.fname.message}</p>)}
                            </div>
                            <div className="flex flex-col p-2">
                                <label htmlFor="">Lastname</label>
                                <input type="text" name="lname" placeholder="Enter lastname" className="border p-2"
                                  onChange={(e)=>setFormData({...formData,lname:e.target.value})}
                                 {...register('lname',{required:'Please lastname is required'})}
                                
                                />
                                 {errors.lname &&(<p className="text-red-400">{errors.lname.message}</p>)}
                            </div>
                             <div className="flex flex-col p-2">
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" placeholder="Enter email" className="border p-2"
                                  onChange={(e)=>setFormData({...formData,email:e.target.value})}
                                   {...register('email',{required:'Please email is required'})}
                                />
                                 {errors.email &&(<p className="text-red-400">{errors.email.message}</p>)}
                            </div>
                             <div className="flex flex-col p-2">
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" placeholder="Enter password" className="border p-2"
                                  onChange={(e)=>setFormData({...formData,password:e.target.value})}
                                  {...register('password',{required:'Please password is required'})}
                                />
                                {errors.password &&(<p className="text-red-400">{errors.password.message}</p>)}
                            </div>
                             <div className="flex flex-col p-2">
                                <label htmlFor="">Role</label>
                               <select name="" id="" className="border p-2"
                                 onChange={(e)=>setFormData({...formData,role:e.target.value})}
                                {...register('role',{required:'Please role is required'})}
                               >
                                <option value="">Select role</option>
                                 <option value="Admin">Admin</option>
                                  <option value="Normal user">Normal user</option>
                               </select>
                               {errors.role &&(<p className="text-red-400">{errors.role.message}</p>)}
                            </div>
                             <div className="flex flex-col p-2">
                                <label htmlFor="">Gender</label>
                               <select name="" id="" className="border p-2"
                                 onChange={(e)=>setFormData({...formData,gender:e.target.value})}
                               {...register('gender',{required:'Please gender is required'})}
                               >
                                <option value="">Select gender</option>
                                 <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                               </select>
                                 {errors.gender &&(<p className="text-red-400">{errors.gender.message}</p>)}
                            </div>
                        </div>
                        <div className="mt-5 p-2 flex justify-end">
                            <button type="submit" className="bg-blue-400 p-2 text-white flex items-center cursor-pointer gap-2 hover:bg-blue-500" disabled={loading}>
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <Plus />}
                                Create New User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}