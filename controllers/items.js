import { Item } from "../models/Item.js";

export const findItems = (req, res) => {
    Item.find().sort({ date: -1 })
        .then(items => res.json(items))
        .catch(err => console.log(err));
}

export const createItems = (req, res) => {
    const { name } = req.body;
    const newItem = new Item({ name });
    
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false, error: err }));
}

export const editItems = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    Item.findByIdAndUpdate(id, { name }, { new: true })
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false, error: err }));
}

export const removeItems = (req, res) => {
    const { id } = req.params;
    
    Item.findByIdAndDelete(id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false, error: err }));
}
