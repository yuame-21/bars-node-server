import model from "./model.js";
export const createComment = (comment) => model.create(comment);
export const findAllComments = () => model.find();
export const findCommentById = (commentId) => model.findById(commentId);
export const findCommentByUser = (userId) => 
    model.findOne({ commenterId: userId });
export const findCommentByPost = (postId) => model.findOne({postId: postId});
export const deleteComment = (commentId) => model.deleteOne({ _id: commentId });

