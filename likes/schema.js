import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
    _id: String,
    postId: String,
    likerId: String,
    timestamp: Date,
  },
  { collection: "likes" });
export default likesSchema;