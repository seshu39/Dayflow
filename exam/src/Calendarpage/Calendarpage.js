import React from 'react'
import './Calendarpage.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Calendarpage = () => {
  return (

    <div>
    <nav>
        <div className="nav-logo-container">
        <img src='./logo.png' alt="Wl" /><span>DayFlow</span>
        </div>
        {/* <div className="navbar-links-container">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Workflow</a>
            <a href="">Testimonials</a>
            <Popup /> */}
            {/* <a href="./Components/login">
            <button className="primary-button">Login</button></a> */}
        {/* </div> */}
    </nav>


    
<div class="wholie1">
  
      <div class="wholie" >
          <p class="calp">
        <h1><b>The best calendar app <br></br>for life & work.</b></h1>
          <h2><br></br>Control your day, week and month with <br></br>calendar events and tasks in a single view. <br></br>It's the best way to manage your time <br></br>and achieve your ambitious goals.</h2>

          </p>
      </div>
        <div class="holy">
          <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DateCalendar />
      </LocalizationProvider>
          </div>
         <Footer/>
  </div>
       
   
</div>
  )
}

export default Calendarpage

