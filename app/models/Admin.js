import mongoose from "mongoose";
let AdminData = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);
export default mongoose.models.Admin || mongoose.model("Admin", AdminData);
