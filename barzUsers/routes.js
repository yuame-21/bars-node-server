import * as dao from "./dao.js"
let currentUser = null;

function UserRoutes(app) {

    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    
    const signup = async (req, res) => {
        console.log("meow");
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
    
    app.post("/api/users", createUser);
    app.post("/api/users/signup", signup);
}

export default UserRoutes;