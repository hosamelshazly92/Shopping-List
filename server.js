import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const DBURL = process.env.DBURL;
const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: true }));

mongoose
    .connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('==========> db connection success'))
    .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
    console.log('==========> server listening success');
});
