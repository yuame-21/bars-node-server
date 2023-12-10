import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    artist: Boolean,
},
  { collection: "barzUsers" });
export default userSchema;