import React from 'react'
import './Contact.css'
import my from "./img/my.jpg"


function Contact() {
    return (
        <div className="contact Component__space">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">
                                Hire Me
                            </h1>
                            <p className="hire__text white"> I am available for freeLancer work. Connect with me phone </p>
                            <p className="hire__text white"> <strong>+91 7353954668</strong> or Email <strong>patilshivusms@gmail.com</strong> </p>
                        </div>
                        <div className="input__box">
                            <input typ="text" className="contact__name" placeholder="Your Name *"/>
                            <input typ="text" className="contact__name" placeholder="Your Email *"/>
                            <input typ="text" className="contact__name" placeholder="Write Subject *"/>
                            <textarea name="message" id="message" placeholder="write your message"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button> 
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={my} alt="contact" className="contact__img"/>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
