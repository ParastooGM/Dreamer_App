import {
    GET_ITEMS,
    DELETE_ITEM,
    ADD_ITEM,
    ITEMS_LOADING,
} from "../actions/types";

const initailState = {
    items: [],
    loading: false,
};

const itemReducer = function(state = initailState, action) {
    switch (action.type) {
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((dream) => {
                    return dream._id !== action.payload;
                }),
            };
        default:
            return state;
    }
};

export default itemReducer;