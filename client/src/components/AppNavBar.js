import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from "reactstrap";
import SettingsSystemDaydreamRoundedIcon from "@material-ui/icons/SettingsSystemDaydreamRounded";

function AppNavBar() {
    const [isOpen, setOpen] = useState(false);

    function toggle() {
        setOpen(!isOpen);
    }

    return ( <
        div >
        <
        Navbar color = "dark"
        dark expand = "sm"
        className = "mb-5" >
        <
        Container >
        <
        NavbarBrand href = "/" > { " " } <
        SettingsSystemDaydreamRoundedIcon / > Dreams { " " } <
        /NavbarBrand>{" "} <
        NavbarToggler onClick = { toggle }
        />{" "} <
        Collapse isOpen = { isOpen }
        navbar >
        <
        Nav className = "ml-auto"
        navbar >
        <
        NavItem >
        <
        NavLink href = "" > Github < /NavLink>{" "} <
        /NavItem>{" "} <
        /Nav>{" "} <
        /Collapse> <
        /Container>{" "} <
        /Navbar>{" "} <
        /div>
    );
}

export default AppNavBar;