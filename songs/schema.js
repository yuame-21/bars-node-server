import mongoose from "mongoose";
const songsSchema = new mongoose.Schema({
    _id: String,
    name: String,
    artistName: String,
    primaryArtistId: String,
    featuredArtistIds: { type: Array, "default" : [] },
    lyrics: String,
    coverArtURL: String,
},
  { collection: "songs" });
export default songsSchema;