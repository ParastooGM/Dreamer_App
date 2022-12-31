import React from "react";

function AppCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return ( <
        div className = "AppCard" >
        <
        h1 > { props.title } < /h1> <p> {props.content} </p > { " " } <
        button onClick = { handleClick } > Delete < /button>{" "} <
        /div>
    );
}

export default AppCard;