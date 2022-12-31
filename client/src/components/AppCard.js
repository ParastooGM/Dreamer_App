import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

function AppCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return ( <
        div className = "AppCard" >
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