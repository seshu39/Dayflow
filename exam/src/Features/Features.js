import React from "react";
import './Features.css';
import cal from './Assests/cal.gif'

const Features = () => {
  return (
    <div>
    <section className="containerfea" id="about">
      {/* <h2 className="title">Features</h2> */}
      <div className="content">
        <img
          src={cal}
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            {/* <img src="https://img.freepik.com/free-photo/calendar-with-checklist-date-schedule-3d-icon_107791-15691.jpg?size=626&ext=jpg&ga=GA1.1.1473190193.1708421226&semt=ais" alt="Cursor icon" /> */}
            <div className="aboutItemText">
              <h3 class="ab"> Intuitive Event Creation:</h3>
              <br></br>
              <p class="pfe">
              Easily schedule and create events with a user-friendly interface.
              <br></br>
              <br></br>Quick-add options for rapid event setup.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            {/* <img src="https://as2.ftcdn.net/v2/jpg/03/04/12/37/1000_F_304123778_IbttypTmYT9Nc4wgKeogv7RmTdUS12PA.jpg" alt="Server icon" /> */}
            <div className="aboutItemText">
              <h3 class="ab">Quick Note Creation:
</h3>
<br></br>
              <p class="pfe">
              Easily jot down ideas, thoughts, or reminders on the go.
<br></br>
<br></br>Create quick notes without leaving your calendar view.. 
              </p>
            </div>
          </li>
          <li className="aboutItem">
            {/* <img src="https://t4.ftcdn.net/jpg/07/30/37/29/240_F_730372995_t3DIWs3sRd87ppjS87YWcg0auiWVeeaK.jpg" alt="UI icon" /> */}
            <div className="aboutItemText">
              <h3 class="ab">To-Do List:</h3>
              <br></br>
              <p class="pfe">
              Combine your to-do list with your calendar for a comprehensive task management experience.
<br></br>
<br></br>Check off tasks directly within the calendar interface.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};
export default Features;