import React from "react";

export default function NavButton(props) {
    return (
        <a href={`#${props.name}`}><button id="navbutton">{props.name}</button></a>
    )
}