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

// Register a user
export const register =
    ({ name, email, password }) =>
    (dispatch) => {
        // Headers
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        // Requesr body
        const body = JSON.stringify({ name, email, password });

        axios
            .post("api/users", body, config)
            .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
            .catch((err) => {
                dispatch(
                    returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
                );
                dispatch({
                    type: REGISTER_FAIL,
                });
            });
    };

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

// Logout a user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

// Log in a user
export const login =
    ({ email, password }) =>
    (dispatch) => {
        // Headers
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        // Requesr body
        const body = JSON.stringify({ email, password });

        axios
            .post("api/users/auth", body, config)
            .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
            .catch((err) => {
                dispatch(
                    returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
                );
                dispatch({
                    type: LOGIN_FAIL,
                });
            });
    };