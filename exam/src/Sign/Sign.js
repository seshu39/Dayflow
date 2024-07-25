import React from 'react';
import "../Sign/Sign.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Sign = () => {
  const handleClick = () => {
    const meetingDetails = {
      title: document.getElementById('title').value,
      location: document.getElementById('location').value,
      start: document.getElementById('start').value,
      end: document.getElementById('end').value,
      guests: document.getElementById('guests').value
    };

    const emailBody = `
      Title: ${meetingDetails.title}
      Location: ${meetingDetails.location}
      Start: ${meetingDetails.start}
      End: ${meetingDetails.end}
      Guests: ${meetingDetails.guests}
    `;

    const mailtoLink = `mailto:recipient@example.com?subject=Meeting Details&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return ( <div>
    {/* <nav class="Signnn">
        <div className="nav-logo-container">
        <img src='./logo.png' alt="Wl" class="Signimg"/><span>DayFlow</span>
        </div> 
        </nav> */}
       <Navbar/>
       <br></br>
    <div class="meets">
    <div className='add_meeting'>
      <h1 className='icon-calendar-empty'>Add Meeting</h1>
      <section class="signad">
        <form class="formad">
          <label class="labad">Title</label>
          <input id="title" type='text' class="adsign" placeholder='Meeting Name'/>
          <label class="labad">Location</label>
          <input id="location" type='text' class="adsign" placeholder='Location'/>
          <label class="labad">Start</label>
          <input id="start" type='time' class="adsign" placeholder='Start Time'/>
          <label class="labad">End</label>
          <input id="end" type='time' class="adsign" placeholder='End Time'/>
          <label class="labad">Note</label>
          {/* <input id="guests" type='text' placeholder='Add Guest'/> */}
          <textarea id="guests" type='text'></textarea>

        </form>
      </section>
      <center>
        <button onClick={handleClick} class="signbutton">ADD</button>
      </center>
    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Sign;
