import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const Item = model('Item', ItemSchema);
