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

    const findFollowsByFollowerId = async (req, res) => {
        const follow = await dao.findFollowsByFollowerId(req.params.followerId);
        res.json(follow);
    };

    const findFollowsByFollowedId = async (req, res) => {
        const follow = await dao.findFollowsByFollowedId(req.params.followedId);
        res.json(follow);
    };

    app.post("/api/follows", createFollow);
    app.delete("/api/follows/:followId", deleteFollow);
    app.get("/api/follows", findAllFollowRelations);
    app.get("/api/follows/:followId", findFollowById);
    app.get("/api/follows/follower/:followerId", findFollowsByFollowerId);
    app.get("/api/follows/followed/:followedId", findFollowsByFollowedId);
}

export default FollowRoutes;