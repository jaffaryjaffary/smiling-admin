'use client'
import { UploadDestinationActins } from "@/app/Actions";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

const initialValues={
    imageUrl:'',
    name:'',
    location:'',
    description:''
}

export default function AddDestPage(){
    const {register,reset,handleSubmit, formState:{errors}}=useForm()
    const [formData,setFormData] = useState(initialValues)

    const onSubmit =async(formData, e)=>{
    
          e.preventDefault()

        
        
                try {
                    const result = await UploadDestinationActins(formData) 
                    if(result.success){
                        // setError(false)
                        // setSuccess(tue)
                        // setLoading(true)
                        reset()
                        // setTimeout(()=>{
                        //     setLoading(false)
                        //     setSuccess(false)
                        // },4000)
        
                    }else{
                        // setError(result.message)
                        return null
                    }
                } catch (error) {
                    console.log(error)
                    
                }
                
            }
    
    return(
        <div>
            <div>
                <h1 className="text-2xl text-gray-400 font-bold">Add New Destination</h1>

                <div className="mt-10 bg-white">
                    <div className="bg-blue-400 p-2">
                        <p className="text-white">Upload Destination Form</p>
                    </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="flex flex-col mt-5 p-2">
                        <label htmlFor="">Upload Image</label>
                        <input type="file" name='imageUrl' className="p-2 border"
                        {...register('imageUrl',{required:'Please image is required'})}
                        onChange={(e)=>setFormData({...formData,imageUrl:e.target.value})}
                        />
                        {errors.imageUrl &&(<p className="text-red-400">{errors.imageUrl.message}</p>)}
                    </div> 
                     <div className="flex flex-col p-2">
                        <label htmlFor="">Destination name</label>
                        <input type="text" name='name' placeholder="Ex:Serengeti" className="p-2 border"
                        {...register('name',{required:'Please destination name is required'})}
                        onChange={(e)=>setFormData({...formData,name:e.target.value})}
                        />
                         {errors.name &&(<p className="text-red-400">{errors.name.message}</p>)}
                    </div> 
                    <div className="flex flex-col p-2">
                        <label htmlFor="">Destination location</label>
                        <input type="text" placeholder="Ex:Arusha" className="p-2 border"
                         {...register('location',{required:'Please location name is required'})}
                         onChange={(e)=>setFormData({...formData,location:e.target.value})}
                        />
                        {errors.location &&(<p className="text-red-400">{errors.location.message}</p>)}
                    </div> 
                    <div className="flex flex-col p-2">
                        <label htmlFor="">Destination description(optional)</label>
                        <Textarea placeholder="Enter description"name='description'
                        onChange={(e)=>setFormData({...formData,description:e.target.value})}
                        />
                    </div> 
                     <div className="flex p-2 justify-end">
                        <button type="submit"  className="p-2 bg-blue-400 text-white cursor-pointer">Upload Destination</button>
                    </div> 
                 </form>
                   
                    
                  
                </div>
            </div>
        </div>
    )
}