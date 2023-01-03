import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import AppList from "./components/AppList";
import AppNavBar from "./components/AppNavBar";
import CreateArea from "./components/AppCreateArea";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "App" >
        <
        AppNavBar / >
        <
        CreateArea / >
        <
        AppList / >
        <
        /div>{" "} <
        /Provider>
    );
}

export default App;