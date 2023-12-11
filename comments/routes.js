import * as dao from "./dao.js"

function CommentRoutes(app){
    const createComment = async (req, res) => {
        const comment = await dao.createComment(req.body);
        res.json(comment);
    }

    const findAllComments = async (req, res) => {
        const comments = await dao.findAllComments();
        res.json(comments);
    }

    const findCommentById = async (req, res) => {
        const comment = await dao.findCommentById(req.params.commentId);
        res.json(comment);
    }

    const findAllCommentsByUser = async (req, res) => {
        const comment = await dao.findAllCommentsByUser(req.params.userId);
        res.json(comment);
    }

    const findAllCommentsByPost = async (req, res) => {
        const comment = await dao.findAllCommentsByPost(req.params.postId);
        res.json(comment);
    }

    const deleteComment = async (req, res) => {
        const status = await dao.deleteComment(req.params.commentId);
        res.json(status);
    }

    app.post("/api/comments", createComment);
    app.get("/api/comments", findAllComments);
    app.get("/api/comments/:commentId", findCommentById);
    app.get("/api/comments/user/:userId", findAllCommentsByUser);
    app.get("/api/comments/post/:postId", findAllCommentsByPost);
    app.delete("/api/comments/:commentId", deleteComment);

}