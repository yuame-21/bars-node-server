import model from "./model.js";
export const createLike = (like) => model.create(like);
export const findLike = (postId, likerId) => model.findOne({ postId: postId, likerId: likerId });
export const findAllLikes = () => model.find();
export const findAllLikesForPost = (postId) => model.find(postId);
export const findAllLikesForUser = (likerId) => 
    model.find({ likerId: likerId });
export const deleteLike = (likeId) => model.deleteOne({ _id: likeId });

