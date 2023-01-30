import React, { useState, useEffect } from "react";
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
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

function RegisterModal(props) {
  const [state, setState] = useState({
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
  });

  useEffect(() => {
    if (props.isAuthenticated) {
      setState((state) => ({
        ...state,
        modal: false,
      }));
    } else {
      if (props.error.id === "REGISTER_FAIL") {
        setState((state) => ({ ...state, msg: props.error.msg.msg }));
      } else {
        setState((state) => ({ ...state, msg: null }));
      }
    }
  }, [props.error, props.isAuthenticated]);

  function toggle() {
    // Clear errors
    props.clearErrors();

    setState((state) => ({
      ...state,
      modal: !state.modal,
      name: "",
      email: "",
      password: "",
    }));
  }

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();

    const { name, email, password } = state;

    // Register user
    const newUser = { name, email, password };
    props.register(newUser);
  }

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal id="modal" isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Register </ModalHeader>
        <ModalBody>
          {state.msg ? <Alert color="danger"> {state.msg} </Alert> : null}
          {state.isAuthenticated ? (
            <Alert color="success"> Success </Alert>
          ) : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name"> Name </Label>
              <Input
                type="text"
                className="mb-3"
                name="name"
                id="name"
                onChange={onChange}
              ></Input>
              <Label for="email"> Email </Label>
              <Input
                type="email"
                className="mb-3"
                name="email"
                id="email"
                onChange={onChange}
              ></Input>
              <Label for="password"> Password </Label>
              <Input
                type="password"
                className="mb-3"
                name="password"
                id="password"
                onChange={onChange}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // the authReducer, named as auth in the combined root reducer.
  error: state.error, // the errorReducer, named as error in the combined root reducer.
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
