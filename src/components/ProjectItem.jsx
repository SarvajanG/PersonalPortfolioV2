import React from "react";

//Template of a project item used in the projects section
export default function ProjectItem(props) {
    return (
        <div id="project-item">
            <div id="project-item-image">
                <img src={props.imageLink} alt={`preview for ${props.name}`}/>
                <a href={props.github} target="_blank" rel="noreferrer"><button class="project-item-button" id="github-button">Github</button></a>
                {props.tryMe !== "" ? <a href={props.tryMe} target="_blank" rel="noreferrer"><button class="project-item-button" id="try-me-button">Try me!</button></a> : ''}
                
            </div>
            <p>{props.name}</p>
        </div>
    )
}