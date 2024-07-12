import mongoose from "mongoose";

let blogpostData = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    AdminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    content: { type: String, required: true },
    authername: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", blogpostData);
