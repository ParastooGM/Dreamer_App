import axios from "axios";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/types";

import { returnErrors } from "./errorActions";

// Helper function
export const tokenConfig = (getState) => {
    // Get token from local storage
    const token = getState().auth.token; // uses the auth reducer

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };

    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios
        .get("api/users/user", tokenConfig(getState))
        .then((res) =>
            dispatch({
                type: USER_LOADED,
                payload: res.data, // Contains the user object and the token
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};