import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { register } from "../../actions/authActions";

function RegisterModal(props) {
    const [state, setState] = useState({
        modal: false,
        name: "",
        email: "",
        password: "",
        msg: null,
    });

    function toggle() {
        setState({...state, modal: !state.modal });
    }

    function onChange(e) {
        setState({...state, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();

        // Close modal
        this.toggle();
    }

    return ( <
        div >
        <
        NavLink onClick = { toggle }
        href = "#" > { " " }
        Register { " " } <
        /NavLink>{" "} <
        Modal isOpen = { state.modal }
        toggle = { toggle } >
        <
        ModalHeader toggle = { toggle } > Register < /ModalHeader>{" "} <
        ModalBody >
        <
        Form onSubmit = { onSubmit } >
        <
        FormGroup >
        <
        Label
        for = "name" > Name < /Label>{" "} <
        Input type = "text"
        className = "mb-3"
        name = "name"
        id = "name"
        onChange = { onChange } >
        < /Input>{" "} <
        Label
        for = "email" > Email < /Label>{" "} <
        Input type = "email"
        className = "mb-3"
        name = "email"
        id = "email"
        onChange = { onChange } >
        < /Input>{" "} <
        Label
        for = "password" > Password < /Label>{" "} <
        Input type = "password"
        className = "mb-3"
        name = "password"
        id = "password"
        onChange = { onChange } >
        < /Input>{" "} <
        Button color = "dark"
        style = {
            { marginTop: "2rem" } }
        block >
        Register { " " } <
        /Button>{" "} <
        /FormGroup>{" "} <
        /Form>{" "} <
        /ModalBody>{" "} <
        /Modal>{" "} <
        /div>
    );
}

RegisterModal.prototypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated, // the authReducer, named as auth in the combined root reducer.
    error: state.error, // the errorReducer, named as error in the combined root reducer.
});

export default connect(mapStateToProps, {})(RegisterModal);