import model from "./model.js";
export const createPost = (post) => model.create(post);
export const findAllPosts = () => model.find();
export const findPostById = (postId) => model.findById(postId);
export const findPostsByUser = (userId) => 
    model.find({ userId: userId });
export const findPostsByUsername = (username) => 
    model.find({username: username}); 
export const findPostsBySong = (songId) => 
    model.find({songId: songId}); 
export const updatePost = (postId, post) =>
    model.updateOne({ _id: postId }, { $set: post });
export const deletePost = (postId) => model.deleteOne({ _id: postId });

