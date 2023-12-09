import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });