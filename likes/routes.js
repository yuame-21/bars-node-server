import * as dao from "./dao.js";

function LikeRoutes(app){
    const createLike = async (req, res) => {
        const like = await dao.createLike(req.body);
        res.json(like);
    };

    const findAllLikes = async (req, res) => {
        const likes = await dao.findAllLikes();
        res.json(likes);
    };

    const findAllLikesForPost = async (req, res) => {
        const likes = await dao.findAllLikesForPost(req.params.postId);
        res.json(likes);
    };

    const findAllLikesForUser = async (req, res) => {
        const likes = await dao.findAllLikesForUser(req.params.likerId);
        res.json(likes);
    };

    const deleteLike = async (req, res) => {
        const status = await dao.deleteLike(req.params.likeId);
        res.json(status);
    };

    app.post("/api/likes", createLike);
    app.get("/api/likes", findAllLikes);
    app.get("/api/likes/post/:postId", findAllLikesForPost);
    app.get("/api/likes/user/:likerId", findAllLikesForUser);
    app.delete("/api/likes/:likeId", deleteLike);

}

export default LikeRoutes;