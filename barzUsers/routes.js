import * as dao from "./dao.js"
let currentUser = null;

function UserRoutes(app) {

    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    }
    
    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(
          req.body.username);
        if (user) {
          res.status(400).json(
            { message: "Username already taken" });
          return;
        }
        currentUser = await dao.createUser(req.body);
        res.json(currentUser);
    };

    const signin = async (req, res) => { 
        const { username, password } = req.body;
        currentUser = await dao.findUserByCredentials(username, password);
        if(currentUser) {
            res.json(currentUser);
            return; 
        }
        res.status(400).json(
            { message: "User Not Found" });
    };

    const signout = (req, res) => {
        currentUser = null;
        res.json(200);
    };

    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    };

    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };

    const getUserById = async (req, res) => {
        currentUser = await dao.findUserById(req.params.userId);
        res.json(currentUser);
    };

    const profile = async (req, res) => {
        res.json(currentUser);
    };
    
    app.get("/api/users/:userId", getUserById);
    app.get("/api/users", findAllUsers)
    app.post("/api/users", createUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/profile", profile);
}

export default UserRoutes;