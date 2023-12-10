import * as dao from "./dao.js";

function FollowRoutes(app){
    const createFollow = async (req, res) => {
        const follow = await dao.createFollow(req.body);
        res.json(follow);
    };

    const deleteFollow = async (req, res) => {
        const status = await dao.deleteFollow(req.params.followId);
        res.json(status);
    };

    const findAllFollowRelations = async (req, res) => {
        const followRelations = await dao.findAllFollowRelations();
        res.json(followRelations);
    };
    
    const findFollowById = async (req, res) => {
        const follow = await dao.findFollowById(req.params.followId);
        res.json(follow);
    };

    const findFollowByFollowerId = async (req, res) => {
        const follow = await dao.findFollowByFollowerId(req.params.followerId);
        res.json(follow);
    };

    const findFollowByFollowedId = async (req, res) => {
        const follow = await dao.findFollowByFollowedId(req.params.followedId);
        res.json(follow);
    };

    app.post("/api/follows", createFollow);
    app.delete("/api/follows/:followId", deleteFollow);
    app.get("/api/follows", findAllFollowRelations);
    app.get("/api/follows/:followId", findFollowById);
    app.get("/api/follows/follower/:followerId", findFollowByFollowerId);
    app.get("/api/follows/followed/:followedId", findFollowByFollowedId);
}

export default FollowRoutes;