import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import itemsRoutes from "./routes/items.js";

const app = express();
dotenv.config();

const DBURL = process.env.DBURL;
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

app.use((req, res, next) => {
    let dateObj = new Date();
    let date = `${ dateObj.getDate() }/${ dateObj.getMonth() }/${ dateObj.getFullYear() }`;
    let time = `${ dateObj.getHours() }:${ dateObj.getMinutes() }:${ dateObj.getSeconds() }`;
    console.log(`==========> ${ req.method } [${ res.statusCode }] ${ req.url } [${ date }-${ time }]`);
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

app.use('/items', itemsRoutes);

// ==================== server & mongo setup ====================

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log('==========> server listening success');
});
