import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import { generateIMG } from "../actions/itemActions";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";

function AppCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    function visualizeTitle(event) {
        event.preventDefault();
        props.generateIMG(props.id, props.title);
    }

    return ( <
        div className = "AppCard"
        style = {
            {
                width: "30%",
                height: "350px",
                overflowY: "auto",
                padding: "2%",
                paddingTop: "1%",
            }
        } >
        <
        div style = {
            { margin: "auto", textAlign: "center", marginBottom: "3%" } } >
        <
        button className = "cardbutton"
        onClick = { handleClick } > { " " } <
        Tooltip title = "Delete Dream" >
        <
        DeleteForeverRoundedIcon / >
        <
        /Tooltip>{" "} <
        /button>{" "} <
        button className = "cardbutton"
        onClick = { visualizeTitle } >
        <
        Tooltip title = "Visualize Dream Title" >
        <
        RemoveRedEyeIcon / >
        <
        /Tooltip>{" "} <
        /button>{" "} <
        /div>{" "} <
        div >
        <
        h1 > { " " } <
        b > { props.title } < /b>{" "} <
        /h1>{" "} <
        p > { props.content } < /p>{" "} <
        /div>{" "} <
        div style = {
            { margin: "auto", textAlign: "center" } } > { " " } {
            props.url.length !== 0 && ( <
                img src = { props.url }
                alt = { props.title }
                width = "250"
                height = "250" / >
            )
        } { " " } <
        /div>{" "} <
        /div>
    );
}

const mapStateToProps = (state) => ({
    item: state.item, // the itemReducer, named as item in the combined root reducer.
});

export default connect(mapStateToProps, { generateIMG })(AppCard);