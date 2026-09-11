import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  gender: String,
  role: { type: String},
  password: String,
}, { timestamps: true });

// export default mongoose.models.User || mongoose.model("User", userSchema);

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User