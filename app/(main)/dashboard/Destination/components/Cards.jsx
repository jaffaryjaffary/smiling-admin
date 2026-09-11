'use client'
import { UploadDestinationActins } from "@/app/Actions"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@base-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

const initialValue={
imageUrl:'',
name:'',
location:'',
description:''
}

export function CardsDialogy({open,setOpen}) {
  const {register,handleSubmit,reset, formState:{errors}} = useForm()
  const [formData,setFormData]=useState(initialValue)

  const onSubmit=async(formData, e)=>{
   e.preventDefault()

     try {

     const result = await UploadDestinationActins(formData,'/dashboard/Destination')

     if(result.success){
      reset()
      setOpen(false)
     }
      
     } catch (error) {
     console.log(error)
      
     }
     
  }
  console.log(formData)
  return (
    <Dialog open={open} asChild>
      {/* <DialogTrigger render={<Button variant="outline">No Close Button</Button>} /> */}
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Upload New Destination</DialogTitle>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col">
                    <label htmlFor="" className="text-sm">Upload Image</label>
                    <input type="file" name='imageUrl'  className="border p-2"
                    {...register('imageUrl',{required:'Please image is required'})}
                    onChange={(e)=>setFormData({...formData,imageUrl:e.target.value})}
                    />
                    {errors.imageUrl &&(<p className="text-red-400">{errors.imageUrl.message}</p>)}
              </div>
              <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-sm">Destination name</label>
                    <input type="text" name='name' placeholder="Ex:Serengeti" className="border p-2"
                    {...register('name',{required:'Please destination name is required'})}
                     onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    />
                     {errors.name &&(<p className="text-red-400">{errors.name.message}</p>)}
              </div>
              <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-sm">Destination Location</label>
                    <input type="text" name='location' placeholder="Ex:Arusha" className="border p-2"
                     {...register('location',{required:'Please destination location is required'})}
                      onChange={(e)=>setFormData({...formData,location:e.target.value})}
                    />
                     {errors.location &&(<p className="text-red-400">{errors.location.message}</p>)}
              </div>

              <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-sm">Destination Description(optional)</label>
                    <Textarea placeholder="Enter Description" name='description'
                   
                     onChange={(e)=>setFormData({...formData,description:e.target.value})}
                    />
              </div>

              <div className="flex items-center gap-2 justify-end mt-5">
                   <button onClick={()=>setOpen(false)} className="bg-red-400 text-white p-2 cursor-pointer hover:bg-red-500">Cancel</button>
                    <button type="submit" className="bg-blue-400 text-white p-2 cursor-pointer hover:bg-blue-500">Upload Destination</button>
              </div>
            
            </form>
          </div>
            
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
