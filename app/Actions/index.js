'use server'
import connectionToDb from "@/database";
import User from "@/database/models/Users";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import Profile from "@/database/models/Visitor";
import { revalidatePath } from "next/cache";
import approve from "@/database/models/Approved";
import Destination from "@/database/models/Destination";
import cloudinary from "@/app/Config/cloudinary";


// register user
export async function RegisterActions(formData,pathToRevalidate) {

    try {
        await connectionToDb()

      const{fname,lname,email,gender,role,password} = formData

   
      
       
     const EmailExist = await User.findOne({email})
    if(EmailExist){

         return{
            success:false,
            message: "Please email already exist. Try another email",
        }

    }
    const fnameRegex = /^[A-Za-z]+$/;
     const lnameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!fnameRegex.test(fname)){
        return{
            success:false,
             message: "Firstname must contain letters only.",
        }
    }

    if(!lnameRegex.test(lname)){
         return{
            success:false,
             message: "Lastname must contain letters only.",
        }

    }

    if(!emailRegex.test(email)){

        return{
            success:false,
            message: "Please enter a valid email address.",
        }

    }
    const HashPassword = await bcrypt.hash(password , 10)

  const saveUser =  await User.create({
        fname,lname,email,gender,role, password:HashPassword
    })

    if(saveUser){

          return{
            success:true,
            message: "User created successfully........",
        }

    }
        revalidatePath(pathToRevalidate)
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }


    
}


//login user

export async function LoginUserActions(formData) {

    try {
        await connectionToDb();

        const {email,password} = await formData;

    
        const checkUser = await User.findOne({email})
        if(!checkUser){
              return{
            success:false,
            message: "Please user email does not exist !. Try again",
        }
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password)

        if(!checkPassword){
              return{
            success:false,
            message: "Please incorrect password !. Try again.",
        }
        }

        const token = jwt.sign({
         id:checkUser._id
        }, process.env.JWT_SECRET, {expiresIn: '1d'})

        const cookiesStore = await cookies()
        cookiesStore.set('token', token,{
            httpOnly: true,
           secure: process.env.NODE_ENV === "production",
           sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24,
        })

        return{
            success:true,
            message:"Login successfully",
        }
    } catch (error) {
        return{
            success:false,
            message:'Internal server error !. Check your network',
            error:error.message
        }
        
    }
    
}


///fetch user information

export async function FetchUserInfoActions() {

    try {

        await connectionToDb()

        const cookiesStore = await cookies()
        const token = cookiesStore.get('token')?.value || '';
        if(!token){
            return{
                success:false,
                message:'Invalid token'
            }
        }

        const decodedToken = jwt.verify(token , process.env.JWT_SECRET)
        const UserToken = await User.findOne({_id:decodedToken.id})

        if(UserToken){
            return{
                success:true,
                data:JSON.parse(JSON.stringify(UserToken))
            }
        }
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server errorr',
            error:error.message
        }
        
    }
    
}

///Logout 

export default async function LogoutActions() {

    const cookiesStore = await cookies()

    cookiesStore.set('token', '' ,{
      path: "/",
      maxAge: 0,
    })
    
}

///fetch contact visitor

export async function FetchContactVisitorActions() {
    try {

        await connectionToDb()

        const data = await Profile.find().sort({_id:-1})

        return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
    }
}

///Fetch Visitor contact by id

export async function FetchVisitorContactByIdActions(id) {
    try {

        await connectionToDb()

        const data = await Profile.findOne({_id:id})

        return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}


/// approve visitor

export async function ApproveVisitorAction(formData, pathToRevalidate) {

    try {

        await connectionToDb()

        const VisitorApp = await approve.create(formData)

        if(VisitorApp){
            return{
                success:true,
                message:'Your approve is successfully !......'
            }
        }
        revalidatePath(pathToRevalidate)

        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}

/// Handle delete visitor

export async function DeleteVisitorAction(id, pathToRevalidate) {
    try {

        await connectionToDb()

        await Profile.findByIdAndDelete(id)
      
          revalidatePath(pathToRevalidate)
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}

/// add visitor
export async function AddVisiorActions(FormData, pathToRevalidate) {

    try {
        await connectionToDb()
       const{fname,lname,email,phone,visitDate,travellars, gender, destination} = FormData
       if(!fname || !lname || !email || !phone || !visitDate  || !travellars || !gender || !destination){
        return{
            success:false,
        }
       }

    

    
     const fnameRegex = /^[A-Za-z]+$/;
     const lnameRegex = /^[A-Za-z]+$/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const phoneRegex = /^[0-9]+$/;

     if(!fnameRegex.test(fname)){
        return{
            success:false,
            message:"Firstname must contain letters only.",
        }

     }

     if(!lnameRegex.test(lname)){
        return{
           success:false,
           message:"Firstname must contain letters only.",
        }
     }
     if(!emailRegex.test(email)){
      return{
          success:false,
        message:'Please enter valid email address'
      }
     }

     if(!phoneRegex.test(phone)){
        return{
            success:false,
            message:'Please enter valid phone number'
        }
     }

     

     const saveVisitor = await approve.create(FormData)

     if(saveVisitor){
        return{
            success:true,
            message:'Visitor added succssfully ! ..........'
        }
     }

     revalidatePath(pathToRevalidate)

    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}


///Fetch all destination

export async function FetchAllDestinationActions() {

    try {

        await connectionToDb()

        const data = await Destination.find().sort({_id:-1})

        return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}

///fetch all approved visitor
export async function FetchAllApprovedVisitorActions() {

    try {       
        await connectionToDb()

        const data = await approve.find().sort({ _id: -1 })

        return JSON.parse(JSON.stringify(data))
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
    }
}

///FetchApprovedUserById

export async function FetchApproveUserByIdAction(id) {

    try {

        await connectionToDb()

        const data = await approve.findOne({_id:id})

    return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}

///Delete approved visitor by id
 export async function DeleteApproveVisitorAction(id,pathToRevalidate) {

        await connectionToDb()
        await approve.findByIdAndDelete(id)
        revalidatePath(pathToRevalidate)
    }


///fetch approved visitor by id
export async function FetchApprovedVisitorByIdActions(id) {
    try {
        await connectionToDb()
        const data = await approve.findOne({_id:id})
        return JSON.parse(JSON.stringify(data))
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
    }
}


/// upload destination
export async function UploadDestinationActins(formData) {

    try {

    await connectionToDb()
    const name = formData.get("name");
    const description = formData.get("description");
    const location = formData.get("location");
    const imageUrl = formData.get("image");

  if (!imageUrl || imageUrl.size === 0) {
      return { success: false, message: "No file uploaded" };
    }
   const bytes = await imageUrl.arrayBuffer();
   const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "Images" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
       
    await Destination.create({
      name,
      description,
      location,
      imageUrl: result.secure_url,
    });
    //  revalidatePath(pathToRevalidate)
    } catch (error) {
        return{
            success:false,
            message:'Internal server error',
            error:error.message
        }
        
    }
    
}


export async function FetchAllUserActions() {

    try {

        await connectionToDb();

        const data = await User.find();
        return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:"Internal server error occur",
            error:error.message
        }
        
    }
    
}


export async function FetchUserByIdActions(id) {

    try {

        await connectionToDb()

        const data = await User.findOne({_id:id})
        return JSON.parse(JSON.stringify(data))
        
    } catch (error) {
        return{
            success:false,
            message:"Internal server error",
            error:error.message
        }
        
    }
    
}

export async function UpdateCreateUserSystemAction(formData) {
  await connectionToDb();
   
  const id = formData.get("id");
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const email = formData.get("email");
  const role = formData.get("role");  
   const gender = formData.get("gender");  




  const existing = await User.findById(id);

  if (!existing) {
    return { success: false, message: "Data not found" };
  }  
  const EmailExist = await User.findOne({ email, _id: { $ne: id } });
  if(EmailExist){
     return{
        success:false,
        message: "Please email already exist. Try another email",
    }
  }
  await User.findByIdAndUpdate(id, {
    fname,
    lname,
    email, 
    role,
    gender     
}
  );

  return { success: true, message: "Updated successfully" };
} 

export async function DeleteCreateUserSystemAction(id,pathToRevalidate) {
  await connectionToDb();
   await User.findByIdAndDelete(id)
   revalidatePath(pathToRevalidate)
  return { success: true, message: "Deleted successfully" };
}