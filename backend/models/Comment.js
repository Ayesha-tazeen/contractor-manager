import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  projectId: String,
  text: String,
  sender: String,
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);