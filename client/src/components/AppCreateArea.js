import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { addItem } from "../actions/itemActions";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

function CreateArea(props) {
    const [newItem, setNewItem] = useState({
        title: "",
        content: "",
        url: "",
    });

    const [isExpanded, setExpanded] = useState(false);

    function handleClick(event) {
        props.addItem(newItem);
        event.preventDefault();
        setNewItem({
            title: "",
            content: "",
            url: "",
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
        placeholder = {
            props.isAuthenticated ?
            "Describe your dream..." :
                "Login or register to add dreams..."
        }
        rows = { isExpanded ? 5 : 2 } >
        < /textarea>{" "} {
            props.isAuthenticated ? ( <
                Fab onClick = { handleClick } > { " " } <
                Tooltip title = "Add To Journal" >
                <
                AddIcon / >
                <
                /Tooltip>{" "} <
                /Fab>
            ) : (
                ""
            )
        } { " " } <
        /form>{" "} <
        /div>
    );
}

CreateArea.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    item: state.item, // the itemReducer, named as item in the combined root reducer.
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(CreateArea);