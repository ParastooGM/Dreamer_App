import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
    function handleClick(event) {
        props.onAdd(item);
        event.preventDefault();
        setItem({
            title: "",
            content: "",
        });
    }

    const [item, setItem] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setItem((prevItem) => {
            return {
                ...prevItem,
                [name]: value,
            };
        });
    }

    return ( <
        div >
        <
        form className = "create-note" > { " " } {
            isExpanded && ( <
                input name = "title"
                value = { item.title }
                onChange = { handleChange }
                placeholder = "Title" >
                < /input>
            )
        } { " " } <
        textarea name = "content"
        value = { item.content }
        onChange = { handleChange }
        onClick = { expand }
        placeholder = "Describe your dream..."
        row = { isExpanded ? 3 : 1 } >
        < /textarea>{" "} <
        Fab onClick = { handleClick } > { " " } <
        AddIcon / > { " " } <
        /Fab>{" "} <
        /form>{" "} <
        /div>
    );
}

export default CreateArea;