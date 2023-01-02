import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types";

const initailState = {
    items: [{ title: "Day 1", content: "I was flying." }],
};

const itemReducer = function(state = initailState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((dream, index) => {
                    return index !== action.payload;
                }),
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
            };
        default:
            return state;
    }
};

export default itemReducer;