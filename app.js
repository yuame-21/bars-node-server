import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './barzUsers/routes.js';
import cors from "cors";
import PostRoutes from './posts/routes.js';

// mongoose.connect("mongodb://127.0.0.1:27017/barz");
const atlas = "mongodb+srv://nagishaca:S0JPLeKkXzocpddn@cluster0.0t0gakn.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_STRING = atlas || 'mongodb://127.0.0.1:27017/barz';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.get('/', (req, res) => {res.send('Welcome to Barz Server!')})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your actual allowed origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(cors());
app.use(express.json());
UserRoutes(app)
PostRoutes(app)
app.listen(process.env.PORT || 4000)