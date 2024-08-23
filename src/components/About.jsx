import React from "react";

//About section used in App.jsx
export default function About() {
    return (
        <div id="About">
            <div className="section-title">
                <p>About</p>
            </div>
            <div id="about-outer-flex">
                <img src="./images/About-me-sarvajan.JPG" alt="Sarvajan Gnaneswaran holding a pumpkin in a pumpkin patch"/>
                <div id="about-inner-flex">
                    <p id="about-title">Sarvajan Gnaneswaran</p>
                    <p>
                        Hello! I’m Sarvajan Gnaneswaran, an aspiring software developer from Vancouver, BC, Canada. I recently graduated from the University of British Columbia
                        with a Bachelor of Science, majoring in a Combined Major of Sciences with a focus on Computer Science, Chemistry, and Environmental Sciences. 
                        I’m passionate about leveraging technology to create impactful solutions that address real-world problems. 
                        I’m eager to continue growing as a developer and apply my diverse scientific background to innovative software projects. 
                        Outside of coding, I’m an avid sports enthusiast. I enjoy playing soccer, participating in track and field, and staying active at the gym. 
                        Balancing my love for technology and my passion for sports keeps me energized and focused in everything I do.
                    </p>
                </div>
            </div>
        </div>
    )
}