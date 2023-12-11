import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("followerRelations", schema);
export default model;