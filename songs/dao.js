import model from "./model.js";
export const createSong = (song) => model.create(song);
export const findAllSongs = () => model.find();
export const findSongById = (songId) => model.findById(songId);
export const findAllSongsByArtistId = (artId) => 
    model.find({ primaryArtistId: artId });
export const findAllSongsByName = (name) => model.find({name: name});
export const findAllSongsByArtistName = (artName) => model.find({artistName: artName});
export const updateSong = (songId, song) =>  
model.updateOne({ _id: songId }, { $set: song });
export const deleteSong = (songId) => model.deleteOne({ _id: songId });

