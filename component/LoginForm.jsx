'use client'
import { LuLoaderCircle } from "react-icons/lu";
import { LoginUserActions } from "@/app/Actions"
import { useState } from "react"
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

const InitialValue={
    email:'',
    password:''
}

export default function LoginForm(){
    const [formData, setFormData] = useState(InitialValue)
    const [error,setError]= useState(false)
    const [loading,setLoading] = useState(false)
    const{handleSubmit,register, formState:{errors}} = useForm()
   
    const onSubmit = async(formData, e)=> {
        e.preventDefault()
        try {

            const result = await LoginUserActions(formData)
            if(result.success){
                setError(false),
                setFormData('')
                setLoading(true)
                setTimeout(()=>{
                    setLoading(false)
                    redirect('/dashboard')
                },4000)
            }else{
                setError(result.message)
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <div className="place-items-center grid h-screen">
            <div className="bg-white p-4 rounded-2xl shadow-sm w-100 lg:w-130">
                <h1 className="text-2xl text-red-400">Admin Access</h1>
                <h1 className="text-2xl font-bold mt-4">Welcome Smiling Hours</h1>
                <p className="text-sm mt-4 text-gray-400">Login to access the admin panel
                 and manage your tours, bookings, and more.</p>

                 {/* Form  start*/}
                 <form onSubmit={handleSubmit(onSubmit)}>
                    {error &&(
                    <p className="bg-red-400 p-2 mt-2 rounded-2xl text-white">{error}</p>
                    )}
                    

                 <div className="flex flex-col mt-5 p-4">
                    <label htmlFor="" className="font-bold text-gray-500">Email</label>
                    <input type="text" placeholder="xxxx@gmail.com" name="email" 
                    className="border p-2  outline-blue-400"
                     
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    {...register('email', {
                        required:'Please email is required'
                    })}
                    />

                    {errors.email &&( <p className="text-red-400">{errors.email?.message}</p>)}
                 
                 </div>

                  <div className="flex flex-col  p-4">
                    <label htmlFor="" className="font-bold text-gray-500">Password</label>
                    <input type="password"    placeholder="••••••••" name="password" 
                     className="border  p-2 outline-blue-400"
                   
                    onChange={(e)=>setFormData({...formData, password:e.target.value})}
                       {...register('password', {
                        required:'Please password is required'
                    })}
                     />
                    {errors.password &&( <p className="text-red-400">{errors.password?.message}</p>)}
                 </div>
                    

                      <div className="flex flex-col  p-4">
                    <button className={`${loading ? 'bg-blue-300 p-2 cursor-not-allowed flex items-center justify-center gap-2' : 
                        'bg-blue-400 cursor-pointer text-white text-xl hover:bg-blue-500 p-2 flex items-center justify-center gap-2'}`}> 
                  
                        {loading ? <LuLoaderCircle className="animate-spin"  size={30} color="white"/> : 'Login'}  
                       </button>
                 </div>
                    

                     
                 </form>

                
                  {/* Form  end*/}
            </div>
        </div>
    )
}