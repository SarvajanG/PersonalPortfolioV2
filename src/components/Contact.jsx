import React from "react";

//Contact section component used in App.jsx
export default function Contact() {
    return (
        <div id="Contact">
            <p>Contact</p>
            <div id="icon-container">
                <a href="mailto:sarvajan321@hotmail.com">
                    <img src="./svgs/envelope.svg" alt="email icon"/>
                </a>
                <a href="https://github.com/SarvajanG">
                    <img src="./svgs/github.svg" alt="github icon"/>
                </a>
                <a href="https://www.linkedin.com/in/sarvajanG/">
                    <img src="./svgs/linkedin.svg" alt="linked in icon"/>
                </a>
            </div>
        </div>
    )
}