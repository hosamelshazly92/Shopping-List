import express from "express";
import {
    findItems,
    createItems,
    editItems,
    removeItems
} from "../controllers/items.js";

const router = express.Router();

router.get('/', findItems)
    .post('/', createItems)
    .patch('/:id', editItems)
    .delete('/:id', removeItems);

export default router;
