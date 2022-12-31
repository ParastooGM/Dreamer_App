import React, { useState } from "react";

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
        form className = "create-note" >
        <
        input name = "title"
        value = { item.title }
        onChange = { handleChange }
        placeholder = "Title" >
        < /input>{" "} <
        textarea name = "content"
        value = { item.content }
        onChange = { handleChange }
        placeholder = "Dream description..." >
        < /textarea>{" "} <
        button onClick = { handleClick } > Add < /button>{" "} <
        /form>{" "} <
        /div>
    );
}

export default CreateArea;