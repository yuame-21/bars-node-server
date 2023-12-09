import * as dao from "./dao.js";

function PostRoutes(app){
    const creatPost = async (req, res) => {
        const post = await dao.creatPost(req.body);
        res.json(post);
    };

    const deletePost = async (req, res) => {
        const status = await dao.deletePost(req.params.postId);
        res.json(status);
    };

    const findAllPosts = async (req, res) => {
        const posts = await dao.findAllPosts();
        res.json(posts);
    };
    
    const findPostById = async (req, res) => {
        const post = await dao.findPostById(req.params.postId);
        res.json(post);
    };

    const findPostByUser = async (req, res) => {
        const posts = await dao.findPostByUser(req.params.userId);
        res.json(posts);
    };

    const updatePost = async (req, res) => {
        const { postId } = req.params;
        const status = await dao.updatePost(postId, req.body);
        const currentPost = await dao.findPostById(postId);
        //req.session['currentPost'] = currentPost;
        res.json(status);
    };


}
