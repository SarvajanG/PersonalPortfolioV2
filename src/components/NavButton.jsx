import React from "react";

//Navigation buttons used in the NavBar component
export default function NavButton(props) {
    return (
        <a href={`#${props.name}`}><button id="navbutton">{props.name}</button></a>
    )
}