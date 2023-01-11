import {
    GET_ITEMS,
    DELETE_ITEM,
    ADD_ITEM,
    GENERATE_IMG,
    ITEMS_LOADING,
} from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios.get("/api/items/").then((res) => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data,
        });
    });
};

export const deleteItem = (id) => (dispatch) => {
    axios.delete(`api/items/${id}`).then((res) => {
        dispatch({
            type: DELETE_ITEM,
            payload: id,
        });
    });
};

export const addItem = (item) => (dispatch) => {
    axios.post("/api/items/", item).then((res) =>
        dispatch({
            type: ADD_ITEM,
            payload: res.data,
        })
    );
};

export const generateIMG = (id, prompt) => (dispatch) => {
    axios({
        method: "post",
        url: "https://api.openai.com/v1/images/generations",
        data: {
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(window.env.OPENAI_API_KEY),
        },
    }).then(function(response) {
        axios
            .put(`api/items/${id}`, { url: response.data.data[0].url })
            .then((res) =>
                dispatch({
                    type: GENERATE_IMG,
                    payload: [id, response.data.data[0].url],
                })
            );
    });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};