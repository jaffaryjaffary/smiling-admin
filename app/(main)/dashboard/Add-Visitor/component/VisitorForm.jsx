'use client'
import { FcApprove } from "react-icons/fc";
import { AddVisiorActions } from "@/app/Actions"
import { useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
const InitialValue={
    fname:'',
    lname:'',
    email:'',
    phone:'',
    visitDate:'',
    travellars:'',
    gender:'',
    destination:''
}



export default function VisitorForm({FetchAllDestination,currentUser}){
    const [formData, setFormData] = useState(InitialValue)
    const[loading,setLoading]= useState(false)
    const [success, setSuccess]= useState(false)
    
    const {handleSubmit, register, reset, formState: {errors} }=useForm()
   const router = useRouter()

    const onSubmit =async(formData, e)=> {
         e.preventDefault()

        try {

            const result = await AddVisiorActions({
                ...formData,
                 approvedByFname: currentUser?.data.fname,
                 approvedByLname: currentUser?.data.lname,
            
            
            }, '/dashboard/Add-Visitor')
            if(result.success){
                 reset()
                 
                  toast.add({
                        title: "Success",
                        description: result.message,

                  })



                setLoading(true)
                setSuccess(result.message)
                setTimeout(()=>{
                    setLoading(false)
                     setSuccess(false)
                 
                },4000)
            }
            else{
               toast.add({
                         title: "Error",
                         description: result.message,
                         variant:'destructive'
                     })
            }
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    return(
        <div className="mt-15">
            <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="bg-blue-300 text-white p-2 text-xl">Visitor Form</p> 
                
                <div className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                        <div className="flex flex-col">
                            <label htmlFor="">Firstname</label>
                            <input type="text" placeholder="Enter firstname"
                            className="border p-2 mt-0   outline-blue-400" name="fname"
                          
                            onChange={(e)=>setFormData({...formData,fname:e.target.value})}
                             {...register('fname', {
                             required:'Firstname is required'
                            })}
                            />
                           {errors.fname &&( <p className="text-red-400 p-2">{errors.fname.message}</p> )}
                        </div>
                         <div className="flex flex-col">
                            <label htmlFor="">Lastname</label>
                            <input type="text" placeholder="Enter lastname"
                            className="border p-2 mt-0   outline-blue-400" name="lname"
                            
                             onChange={(e)=>setFormData({...formData,lname:e.target.value})}
                               {...register('lname',{
                                required:'Lastname is required'
                               })}
                            />
                             {errors.lname &&( <p className="text-red-400 p-2">{errors.lname.message}</p> )}
                        </div>
                         <div className="flex flex-col">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter email address" name="email"
                            className="border p-2 mt-0  outline-blue-400"
                             
                             onChange={(e)=>setFormData({...formData,email:e.target.value})}

                               {...register('email',{
                                required:'Email is required'
                               })}
                            />
                            {errors.email &&( <p className="text-red-400 p-2">{errors.email.message}</p> )}
                        </div>
                         <div className="flex flex-col">
                            <label htmlFor="">Phone-Number</label>
                            <input type="text" placeholder="Enter phone number" name="phone"
                            className="border p-2 mt-0  outline-blue-400"
                             
                             onChange={(e)=>setFormData({...formData,phone:e.target.value})}

                               {...register('phone',{
                                required:'Phone number is required'
                               })}
                            />
                             {errors.phone &&( <p className="text-red-400 p-2">{errors.phone.message}</p> )}
                        </div>
                         <div className="flex flex-col">
                            <label htmlFor="">Visit-Date</label>
                            <input type="date" placeholder="Enter phone number" name="visitDate"
                            className="border p-2 mt-0  outline-blue-400"
                            
                             onChange={(e)=>setFormData({...formData,visitDate:e.target.value})}

                               {...register('visitDate',{
                                required:'Visit date is required'
                               })}
                            />
                              {errors.visitDate &&( <p className="text-red-400 p-2">{errors.visitDate.message}</p> )}
                        </div>
                         <div className="flex flex-col">
                            <label htmlFor="">Number of Travellars</label>
                            <input type="text" placeholder="Enter number of travellars" name="travellars"
                            className="border p-2 mt-0  outline-blue-400"
                             
                             onChange={(e)=>setFormData({...formData,travellars:e.target.value})}
                             {...register('travellars',{
                                required:'Number of travellars is required'
                               })}
                             
                            />
                             {errors.travellars &&( <p className="text-red-400 p-2">{errors.travellars.message}</p> )}
                        </div>
                         
                         <div className="flex flex-col">
                            <label htmlFor="">Gender</label>
                          <select name="gender" id="" className="border p-2 mt-0  outline-blue-400"
                          
                           onChange={(e)=>setFormData({...formData,gender:e.target.value})}
                           {...register('gender',{
                                required:'Gender is required'
                               })}
                          >
                            <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                                <option value="Female">Female</option>
                          </select>
                            {errors.gender &&( <p className="text-red-400 p-2">{errors.gender.message}</p> )}
                        </div>

                         <div className="flex flex-col">
                            <label htmlFor="">Select Destination</label>
                          <select name="destination" id="" className="border p-2 mt-0  outline-blue-400"
                           defaultValue={''}
                          
                           {...register('destination',{
                                required:'Destination is required'
                               })}
                          >
                            <option value="" disabled>Select</option>
                            {FetchAllDestination&&FetchAllDestination?.length > 0 ?
                              
                              FetchAllDestination.map((destination)=>
                         
                                <option key={destination._id} value={destination.name}>{destination.name}</option>
                         
                            )
                              :
                              <h1>No destination found</h1>
                        }
                            
                          </select>
                           {errors.destination &&( <p className="text-red-400 p-2">{errors.destination.message}</p> )}
                        </div>
                        
                    </div>
                <div className="p-4">
                    <button type='submit'
                    className={`${loading ? 'bg-blue-200 p-2 cursor-not-allowed text-white font-medium text-center flex items-center gap-2' : 
                    'bg-blue-400 p-2 cursor-pointer text-white font-medium text-center flex items-center gap-2'}`}>
                       {loading && <AiOutlineLoading3Quarters className="animate-spin" />}Add New Visitor</button>
                </div>
                </div>
               
            </form>

           
           

         

            {/* <CardEdgeToEdge/> */}
           
        </div>
    )
}