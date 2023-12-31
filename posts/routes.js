import * as dao from "./dao.js";

function PostRoutes(app){
    const createPost = async (req, res) => {
        const post = await dao.createPost(req.body);
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

    const findPostsByUsername = async (req, res) => {
        const posts = await dao.findPostsByUsername(req.params.username);
        res.json(posts);
    }

    const updatePost = async (req, res) => {
        const { postId } = req.params;
        const status = await dao.updatePost(postId, req.body);
        const currentPost = await dao.findPostById(postId);
        //req.session['currentPost'] = currentPost;
        res.json(status);
    };

    const findPostsBySong = async (req, res) => {
        const posts = await dao.findPostsBySong(req.params.songId);
        res.json(posts);
    }

    app.post("/api/posts", createPost);
    app.delete("/api/posts/:postId", deletePost);
    app.get("/api/posts", findAllPosts);
    app.get("/api/posts/:postId", findPostById);
    app.get("/api/posts/username/:username", findPostsByUsername);
    app.get("/api/posts/song/:songId", findPostsBySong);
    app.put("/api/posts/:postId", updatePost);

}
 export default PostRoutes;