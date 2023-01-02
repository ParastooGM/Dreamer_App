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
import { red } from "@material-ui/core/colors";

function AppNavBar() {
    const [isOpen, setOpen] = useState(false);

    function toggle() {
        setOpen(!isOpen);
    }

    return ( <
        div >
        <
        Navbar style = {
            { backgroundColor: "#B2BEB5" } }
        dark expand = "sm"
        className = "mb-5" >
        <
        Container style = {
            { marginLeft: 0 } } >
        <
        NavbarBrand href = "/" > { " " } <
        SettingsSystemDaydreamRoundedIcon / > Dreams { " " } <
        /NavbarBrand>{" "} <
        NavbarToggler onClick = { toggle }
        />{" "} <
        Collapse isOpen = { isOpen }
        navbar > { " " } <
        /Collapse>{" "} <
        /Container>{" "} <
        /Navbar>{" "} <
        /div>
    );
}

export default AppNavBar;