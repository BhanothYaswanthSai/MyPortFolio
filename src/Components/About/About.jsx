import React from "react";
import profile_img from '.././../assets/About (1).jpg';
import '../About/About.css';

const About = () =>
{
    return(

        <div id="about"className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src= {profile_img}alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Yaswanth, a passionate Software Engineer with a strong foundation in web development, Comptitive Coding and Machine Learning.</p>
                        <p>My work blends creativity and logic, whether I’m predicting health outcomes or developing seamless web applications. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>300+</h1>
                    <p>PROBLEMS SOLVED ON LEETCODE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div> 
            </div>

        </div>
    )

}

export default About;