import mongoose from "mongoose";
const followerRelationSchema = new mongoose.Schema({
    _id: String,
    followerId: String,
    followedId: String,
},
  { collection: "followerRelation" });
export default followerRelationSchema;