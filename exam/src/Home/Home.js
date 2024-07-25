import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Emailus from '../Emailus/Emailus';
import Call from '../Call/Call';
import Home2 from '../Home2/Home2';

const Home = () => {
    return(         
        <div className='mains'>
            <Navbar/>
        <div className="additional-content">
           
            <div class="change"><p style={{ fontSize: '60px',  letterSpacing: '2.5px' }}><b>Make the <br></br>most of <br></br>Every Day</b></p>
           <p style={{ fontSize: '25px', fontFamily: 'popins', letterSpacing: '2px', color: 'black' }}> 
          Every day is an opportunity waiting to be seized. 
            <br></br>Our calendar app transforms your routine into a strategic <br></br>plan for success. With intuitive features and user-friendly <br></br>design, it empowers you to organize your days with <br></br>precision.Embrace a future where each entry on your <br></br>calendar propels you toward your goals!!!</p></div>
              <img src= "https://i.gifer.com/76au.gif" alt="wl" className="small-image"/>
                {/* <Link to="/Cal"> 
                    <button className="primary-button1">Get Started</button>                
                </Link> */}
                <div className="topBlur" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <Features/>
       <br></br>
       <br></br>
        <Call/>
       <Emailus/>
       <br></br>
       <Footer/>
        </div>
    )
}
export default Home;