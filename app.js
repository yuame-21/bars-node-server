import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './barzUsers/routes.js';
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/barz");
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(cors());
app.use(express.json());
UserRoutes(app)
app.listen(process.env.PORT || 4000)