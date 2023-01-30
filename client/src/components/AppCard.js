import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import { generateIMG } from "../actions/itemActions";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function AppCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    function visualizeTitle(event) {
        event.preventDefault();
        props.generateIMG(props.id, props.title);
    }

    return ( <
        div className = "AppCard" >
        <
        div style = {
            {
                margin: "auto",
                textAlign: "center",
                padding: "2%",
            }
        } >
        { " " } {
            props.isAuthenticated ? ( <
                div >
                <
                button className = "cardbutton"
                onClick = { handleClick } >
                <
                Tooltip title = "Delete" >
                <
                DeleteForeverRoundedIcon / >
                <
                /Tooltip>{" "} <
                /button>{" "} <
                button className = "cardbutton"
                style = {
                    { marginRight: "5px" } }
                onClick = { visualizeTitle } >
                <
                Tooltip title = "Visualize Title" >
                <
                RemoveRedEyeIcon / >
                <
                /Tooltip>{" "} <
                /button>{" "} <
                CircularProgress id = "spinner-img"
                style = {
                    {
                        display: "none",
                        width: "25px",
                        height: "25px",
                    }
                }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        h4 className = "item-date" > { String(props.date).slice(0, 10) } < /h4>{" "} <
        /div>{" "} <
        div >
        <
        h1 > { " " } <
        b > { props.title } < /b>{" "} <
        /h1>{" "} <
        p > { props.content } < /p>{" "} <
        /div>{" "} <
        div style = {
            { margin: "auto", textAlign: "center", padding: "3%" } } > { " " } {
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
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { generateIMG })(AppCard);