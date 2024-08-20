import React from "react";

//About section used in App.jsx
export default function About() {
    return (
        <div id="About">
            <div id="section-title">
                <p>About</p>
            </div>
            <div id="about-outer-flex">
                <img src="./images/About-me-sarvajan.JPG" alt="Sarvajan Gnaneswaran holding a pumpkin in a pumpkin patch"/>
                <div id="about-inner-flex">
                    <p id="about-title">Sarvajan Gnaneswaran</p>
                    <p>
                        Greetings! I'm Sarvajan Gnaneswaran, a dedicated software developer hailing from the vibrant city of Vancouver, BC, Canada. Armed with a Bachelor of Science degree 
                        in the combined major of Computer Science, Chemistry, and Environmental Science, I bring a diverse range of skills and perspectives to my work. My passion for technology 
                        stems from a desire to innovate and create solutions that positively impact our world. Whether I'm coding elegant algorithms or diving into the intricacies of web development, 
                        I thrive on the intersection of science and technology. Outside of coding, I enjoy pursuing my interests in track and field and soccer, finding inspiration and challenge in these 
                        athletic endeavors. Let's collaborate and harness the power of technology to make a difference together!
                    </p>
                </div>
            </div>
        </div>
    )
}