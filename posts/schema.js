import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    _id: String,
    username: String,
    songId: String,
    caption: String,
    lyric: String,
    timestamp: Date,
  },
  { collection: "posts" });
export default postSchema;