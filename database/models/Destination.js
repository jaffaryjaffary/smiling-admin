import mongoose from "mongoose";


const DestinationSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  location: { type: String, trim: true },
  imageUrl: { type: String, trim: true },
}, { timestamps: true });

const Destination = mongoose.models.Destination || mongoose.model("Destination", DestinationSchema);
export default Destination;