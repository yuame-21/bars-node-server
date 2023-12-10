import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("followerRelation", schema);
export default model;