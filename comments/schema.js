import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    _id: String,
    postId: String,
    commenterId: String,
    timeStamp: Date,
    content: String,
  },
  { collection: "comments" });
export default commentSchema;