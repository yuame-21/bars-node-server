import mongoose from "mongoose";
import userSchema from "./schema.js";
const model = mongoose.model("barzUsers", userSchema);
export default model;