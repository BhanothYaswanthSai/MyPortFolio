import React from 'react';
import '../Contact/Contact.css';
import linked_in from '../../assets/linkedin.png'
import gmail from '../../assets/envelop.png';
import phone from '../../assets/phone-call.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a73655cb-8400-452a-8051-be6d54e7fd47");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div  className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                                <img src={gmail} alt="/"/>
                                <p>bhanothyaswanth2801@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                                <img src={phone} alt="/"/>
                                <p>+91 9110723142</p>
                        </div>
                        <div className="contact-detail">
                                <img src={linked_in} alt="/"/>
                                <p>Bhanoth Yaswanth Sai</p>
                        </div>
                    </div>
                </div>
                    <form onSubmit={onSubmit}className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name"/>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your email address' name="email"/>
                        <label htmlFor="">Write your message here</label>
                        <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                        <button type ="submit" className="contact-submit">Submit now</button>
                    </form>
            </div>

        </div>
    )

}

export default Contact; 