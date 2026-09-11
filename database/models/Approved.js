import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    
    fname:String,
    lname:String,
    email:String,
    phone:String,
    visitDate:String,
    travellars:String,
    gender:String,
    destination: {
    type: [String],
    default: [], // 🔥 muhimu sana
  },
       
    approvedByFname:String,
    approvedByLname:String,

    

},{
    timestamps:true
})

const approve = mongoose.models.approve || mongoose.model('approve',userSchema)
export default approve;