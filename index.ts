import express, { Express, Request, Response } from "express";
import commentController from "./controllers/commentController";
import articleController from "./controllers/articleController";
import authorController from "./controllers/authorController";

import mongoose from "mongoose";

const app: Express = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Sanks:RFHyvxXT6NKVhaaL@mongo-ts.weyyukl.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', commentController);
app.use('/', articleController);
app.use('/', authorController);




app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});