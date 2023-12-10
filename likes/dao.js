import model from "./model.js";
export const createLike = (like) => model.create(like);
export const findAllLikes = () => model.find();
export const findAllLikesForPost = (postId) => model.findById(postId);
export const findAllLikesForUser = (likerId) => 
    model.findOne({ likerId: likerId });
export const deleteLike = (likeId) => model.deleteOne({ _id: likeId });

