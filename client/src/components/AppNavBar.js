import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { GiDreamCatcher } from "react-icons/gi";

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
        /Collapse>{" "} <
        /Navbar>
    );
}

export default AppNavBar;