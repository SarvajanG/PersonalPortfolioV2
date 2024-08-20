import React from "react";
import ProjectItem from "./ProjectItem";

//Projects section compiling all of the project items used in App.jsx 
export default function Projects() {
    return (
        <div id="Projects">
            <div id="section-title">
                <p>Projects</p>
            </div>
            <div id="project-items-container">
                <ProjectItem
                name = "Weather Application"
                imageLink = "./images/Weather App Preview.jpg"
                github = "https://github.com/SarvajanG/Weather-App"
                tryMe = "https://sarvajang.github.io/Weather-App/"
                />
                <ProjectItem
                name = "BMI Calculator"
                imageLink = "./images/BMI Calculator Preview.jpg"
                github = "https://github.com/SarvajanG/BMI-Calculator-App"
                tryMe = "https://sarvajang.github.io/BMI-Calculator-App/"
                />
                <ProjectItem
                name = "Solar System Model"
                imageLink = "./images/Solar System Model Preview.jpg"
                github = "https://github.com/SarvajanG/Solar-System-Model"
                tryMe = "https://sarvajang.github.io/Solar-System-Model/"
                />
                <ProjectItem
                name = "BlackJack"
                imageLink = "./images/BlackJack Preview.jpg"
                github = "https://github.com/SarvajanG/BlackJack"
                tryMe = ""
                />
                <ProjectItem
                name = "Shipping Company Database"
                imageLink = "./images/Database Preview.png"
                github = "https://github.students.cs.ubc.ca/CPSC304-2023W-T1/project_c7a3b_h7u7l_n3j3b"
                tryMe = ""
                />
            </div>
        </div>
        
    )
}