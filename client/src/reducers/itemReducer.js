import {
    GET_ITEMS,
    DELETE_ITEM,
    ADD_ITEM,
    ITEMS_LOADING,
    GENERATE_IMG,
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
        case GENERATE_IMG:
            state.items.forEach(function(obj) {
                if (obj._id === action.payload[0]) {
                    obj.url = action.payload[1];
                }
            });
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default itemReducer;