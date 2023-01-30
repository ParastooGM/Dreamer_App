import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
} from "reactstrap";
import { GiDreamCatcher } from "react-icons/gi";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function AppNavBar(props) {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <Fragment>
      <NavItem className="welcome">
        {user ? `Welcome ${user.name} !` : ""}
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );
  return (
    <Navbar dark expand="sm" className="mb-5 dream-nav-bar">
      <NavbarBrand className="dream-nav-brand" href="/">

        <GiDreamCatcher /> Dream Journal
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        
        <Nav
          className="ml-auto"
          style={{ marginLeft: isAuthenticated ? "78%" : "86%" }}
          navbar
        >
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

AppNavBar.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavBar);
