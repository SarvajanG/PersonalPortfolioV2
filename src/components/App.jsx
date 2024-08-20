import React from "react";
import NavBar from "./NavBar";
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact";

//App component compiling all main components
export default function App() {
    return (
        <div>
            <NavBar/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}