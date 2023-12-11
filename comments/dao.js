import model from "./model.js";
export const createComment = (comment) => model.create(comment);
export const findAllComments = () => model.find();
export const findCommentById = (commentId) => model.findById(commentId);
export const findAllCommentsByUser = (userId) => 
    model.find({ commenterId: userId });
export const findAllCommentsByPost = (postId) => model.find({postId: postId});
export const deleteComment = (commentId) => model.deleteOne({ _id: commentId });

