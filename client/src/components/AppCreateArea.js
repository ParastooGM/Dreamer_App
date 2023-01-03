import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { addItem } from "../actions/itemActions";
import { connect } from "react-redux";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

function CreateArea(props) {
    const [newItem, setNewItem] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setExpanded] = useState(false);

    function handleClick(event) {
        props.addItem(newItem);
        event.preventDefault();
        setNewItem({
            title: "",
            content: "",
        });
    }

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNewItem((prevItem) => {
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
                value = { newItem.title }
                onChange = { handleChange }
                placeholder = "Title" >
                < /input>
            )
        } { " " } <
        textarea name = "content"
        value = { newItem.content }
        onChange = { handleChange }
        onClick = { expand }
        placeholder = "Describe your dream..."
        rows = { isExpanded ? 5 : 2 } >
        < /textarea>{" "} <
        Fab onClick = { handleClick } > { " " } <
        AddIcon / > { " " } <
        /Fab>{" "} <
        button className = "visualize-button" > { " " } <
        RemoveRedEyeIcon / >
        <
        /button>{" "} <
        /form>{" "} <
        /div>
    );
}

const mapStateToProps = (state) => ({
    item: state.item, // the itemReducer, named as item in the combined root reducer.
});

export default connect(mapStateToProps, { addItem })(CreateArea);