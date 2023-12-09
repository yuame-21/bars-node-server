import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './barzUsers/routes.js';
import cors from "cors";
import PostRoutes from './posts/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/barz");
const app = express();
app.get('/', (req, res) => {res.send('Welcome to Barz Server!')})
app.use(cors());
app.use(express.json());
UserRoutes(app)
PostRoutes(app)
app.listen(process.env.PORT || 4000)