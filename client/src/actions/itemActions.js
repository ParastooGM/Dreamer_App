import {
    GET_ITEMS,
    DELETE_ITEM,
    ADD_ITEM,
    GENERATE_IMG,
    ITEMS_LOADING,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios
        .get("/api/items/")
        .then((res) => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteItem = (id) => (dispatch, getState) => {
    axios
        .delete(`api/items/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: DELETE_ITEM,
                payload: id,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addItem = (item) => (dispatch, getState) => {
    axios
        .post("/api/items/", item, tokenConfig(getState))
        .then((res) =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const generateIMG = (id, prompt) => (dispatch, getState) => {
    document.getElementById("spinner-img").style.display = "inline-grid";
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
            .put(
                `api/items/${id}`, { url: response.data.data[0].url },
                tokenConfig(getState)
            )
            .then((res) =>
                dispatch({
                    type: GENERATE_IMG,
                    payload: [id, response.data.data[0].url],
                })
            )
            .then(() => {
                document.getElementById("spinner-img").style.display = "none";
            });
    });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};