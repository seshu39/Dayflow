import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <div className='flexColStart c-left'>
          <span className='headText'>Get in Touch</span>
          <span className='descText'>Simple means of getting in touch</span>
          <span className='desc1Text'>Reach out seamlessly for personalized beauty advice or any assistance you may need with our products.</span>
          
          <div className='flexStart contactModes'>

            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                      <IoLogoWhatsapp  size={25} style={{ color: 'green' }}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>WhatsApp</span>
                    <span className='secondaryText'>9876543210</span>
                  </div>
                </div>
                <div className='flexCenter button'>Contact</div>
              </div>

              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdEmail size={25}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>E-mail</span>
                    <span className='secondaryText'>eclatique@gmail.com</span>
                  </div>
                </div>
                <div className='flexCenter button'>Communicate</div>
              </div>
                          

            </div> 


          </div>
        </div>

        {/* <div className='c-right'>
            <img src='./contact1.avif' alt='contact'/>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;