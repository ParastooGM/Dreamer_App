import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppCard from "./components/AppCard";
import AppNavBar from "./components/AppNavBar";
import CreateArea from "./components/AppCreateArea";
import { CSSTransition } from "react-transition-group";

function App() {
    const [allDreams, setAllDreams] = useState([]);

    function addItem(item) {
        setAllDreams((prevDreams) => {
            return [...prevDreams, item];
        });
    }

    function deleteItem(id) {
        setAllDreams((prevDreams) => {
            return prevDreams.filter((dream, index) => {
                return index !== id;
            });
        });
    }

    return ( <
        div className = "App" >
        <
        AppNavBar / >
        <
        CreateArea onAdd = { addItem }
        /> {
            allDreams.map((dreamItem, index) => {
                return ( <
                    CSSTransition key = { index }
                    timeout = { 500 }
                    className = "fade" > { " " } <
                    AppCard key = { index }
                    id = { uuidv4() }
                    title = { dreamItem.title }
                    content = { dreamItem.content }
                    onDelete = { deleteItem }
                    onAdd = { addItem }
                    />{" "} <
                    /CSSTransition>
                );
            })
        } { " " } <
        /div>
    );
}

export default App;