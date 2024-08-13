import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
    // html for navigation bar which is returned to App.jsx
    return (
        <div id="navbar">
            <div id="button-container">
                <NavButton name = "About"/>
                <NavButton name = "Projects"/>
                <NavButton name = "Contact"/>
            </div>
        </div>
    )
}