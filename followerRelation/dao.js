import model from "./model.js";
export const createFollow = (follow) => model.create(follow);
export const findAllFollowRelations = () => model.find();
export const findFollowById = (followId) => model.findById(followId);
export const findFollowsByFollowerId = (followerId) => 
    model.find({ followerId: followerId });
export const findFollowsByFollowedId = (followedId) =>
    model.find({ followedId: followedId });
export const deleteFollow = (followId) => model.deleteOne({ _id: followId });

