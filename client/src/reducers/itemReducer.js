import { v1 as uuid } from "uuid";
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from "../actions/types";

const initState = {
    items: [
        { id: uuid(), name: "Computer" },
        { id: uuid(), name: "iPod" },
        { id: uuid(), name: "Laptop" },
        { id: uuid(), name: "iPhone" },
        { id: uuid(), name: "Mobile" }
    ]
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}

export default itemReducer;
