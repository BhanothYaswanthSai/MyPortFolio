import React from 'react';
import profile_img from '../../../assets/Profilez.jpg';
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    return(

        <div id="home"className="hero">
            <img src={profile_img}/>
            <h1><span>I'm Yaswanth Sai</span></h1>
            <p>Full Stack Developer | Java, Python, React | Machine Learning Enthusiast | Passionate about Building Scalable Solutions</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1GoKDBztLijD90mzjwt8F6optk9NYGedz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-resume-btn">My Resume</a> </div>
            </div>
        </div>

    )
};

export default Hero;