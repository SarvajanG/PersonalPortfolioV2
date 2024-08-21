import React from "react";
import NavButton from "./NavButton";
import MobileNav from "./MobileNav";

//html for navigation bar which is returned to App.jsx
export default function NavBar() {
    return (
        <div id="navbar">
            <div id="button-container">
                <NavButton name = "About"/>
                <NavButton name = "Projects"/>
                <NavButton name = "Contact"/>
            </div>
            <MobileNav/>
        </div>
    )
}