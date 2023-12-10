import model from "./model.js";
export const createFollow = (follow) => model.create(follow);
export const findAllFollowRelations = () => model.find();
export const findFollowById = (followId) => model.findById(followId);
export const findFollowByFollowerId = (followerId) => 
    model.findOne({ followerId: followerId });
export const findFollowByFollowedId = (followedId) =>
    model.findOne({ followedId: followedId });
export const deleteFollow = (followId) => model.deleteOne({ _id: followId });

