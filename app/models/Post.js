import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commentText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

let blogpostData = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  AdminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
  authername:{type:String}
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', blogpostData);
