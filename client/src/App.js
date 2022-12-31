import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import AppCard from "./components/AppCard";
import AppNavBar from "./components/AppNavBar";
import CreateArea from "./components/AppCreateArea";

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
        console.log(allDreams);
    }

    return ( <
        div className = "App" >
        <
        AppNavBar / >
        <
        CreateArea onAdd = { addItem }
        />{" "} {
            allDreams.map((dreamItem, index) => {
                return ( <
                    AppCard key = { index }
                    id = { index }
                    title = { dreamItem.title }
                    content = { dreamItem.content }
                    onDelete = { deleteItem }
                    onAdd = { addItem }
                    />
                );
            })
        } { " " } <
        /div>
    );
}

export default App;