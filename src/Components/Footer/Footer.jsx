import React from 'react';
import logo from '../../assets/Logo.png';
import userIcon from '../../assets/circle-user.png';
import '../Footer/Footer.css';

const Footer = () => {

        return(
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                    <img src={logo} alt="/" />
                    <p>I am a front end developer from India.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={userIcon} alt=""></img>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <p className="footer-bottom-left">© 2024 Bhanoth Yaswanth Sai. All rights reserved.</p>
                    <div className="footer-bottom-right">
                        <p>Terms of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>

            </div>
        )
}

export default Footer;