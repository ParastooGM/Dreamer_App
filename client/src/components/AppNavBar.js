import React, { useState } from "react";
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

function AppNavBar() {
    const [isOpen, setOpen] = useState(false);

    function toggle() {
        setOpen(!isOpen);
    }

    return ( <
        Navbar dark expand = "sm"
        className = "mb-5 dream-nav-bar" >
        <
        NavbarBrand className = "dream-nav-brand"
        href = "/" > { " " } <
        GiDreamCatcher / > Dream Journal { " " } <
        /NavbarBrand>{" "} <
        NavbarToggler onClick = { toggle }
        />{" "} <
        Collapse isOpen = { isOpen }
        navbar > { " " } <
        Nav className = "ml-auto"
        style = {
            { marginLeft: "92%" } }
        navbar >
        <
        NavItem >
        <
        RegisterModal / >
        <
        /NavItem>{" "} <
        /Nav>{" "} <
        /Collapse>{" "} <
        /Navbar>
    );
}

export default AppNavBar;