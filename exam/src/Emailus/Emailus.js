import React from 'react';
import './Emailus.css'; 

const Emailus = () => {
    const phoneNumber = '+1234567890';   
    const emailAddress = 'Dayflow@example.com';

    return (
        <div className="contact-us-container">
            {/* <h2 class="contactus">Contact Us</h2>     */}
            <div className="contact-boxes">   
                <div className="contact-box">
                    <h3 class="wapp">WhatsApp</h3>
                    <br></br>
                   <a href={'https://web.whatsapp.com/'} className="whatsapp-link">Chat with us</a>
                </div>
                <div className="contact-box">
                    <h3 class="wapp">Email</h3>
                    <br></br>
                    <a href={`mailto:${emailAddress}`} className="email-link">{emailAddress}</a>
                </div>
            </div>
        </div>     
    );       
}

export default Emailus;


