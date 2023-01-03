import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

function AppCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return ( <
        div className = "AppCard"
        style = {
            { width: "25%", maxHeight: "250px", overflowY: "auto" } } >
        <
        h1 > { props.title } < /h1> <p> {props.content} </p > { " " } <
        button onClick = { handleClick } > { " " } <
        DeleteForeverRoundedIcon / >
        <
        /button>{" "} <
        /div>
    );
}

export default AppCard;