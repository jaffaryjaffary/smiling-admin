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
       
    comment:String,
    

},{
    timestamps:true
})

const Profile = mongoose.models.Profile || mongoose.model('Profile',userSchema)
export default Profile;