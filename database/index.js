import mongoose from "mongoose";



export const connectionToDb = async()=>{

    const connectionString = process.env.MONGODB_URI;
     await  mongoose.connect(connectionString).then(()=>{
        console.log("Connection successfully")
        
    }).catch((error)=>{
        console.log("Connection failed", error)
    })

}

export default connectionToDb;

