import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Item } from "./models/Item.js";

const app = express();
dotenv.config();

const DBURL = process.env.DBURL;
const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: true }));

app.use((req, res, next) => {
    let dateObj = new Date();
    let date = `${ dateObj.getDate() }/${ dateObj.getMonth() }/${ dateObj.getFullYear() }`;
    let time = `${ dateObj.getHours() }:${ dateObj.getMinutes() }:${ dateObj.getSeconds() }`;
    console.log(`==========> ${ req.method } ${ req.url } ${ date }-${ time }`);
    next();
});

mongoose
    .connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('==========> db connection success'))
    .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);

// ==================== server & mongo setup ====================

app.get('/shop', (req, res) => {
    res.send('<h1>a7la app</h1>');
});

// ==================== server & mongo setup ====================

app.listen(PORT, () => {
    console.log('==========> server listening success');
});
