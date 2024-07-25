// import React from 'react';
// import './Aboutcal.css';

// const Aboutcal = () => {
//   return (
//     <div>
//       <section className="info">
//         <img src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?size=626&ext=jpg&ga=GA1.1.1473190193.1708421226&semt=ais" alt="Code The Web" />
//         <h1>
//           DAY FLOW &mdash; <a href="https://codetheweb.blog/" target="_blank" rel="noopener noreferrer">EXPLORE</a>
//         </h1>
//       </section>
//       <section className="cards-wrapper">
//         <div className="card-grid-space">
//           <div className="num"></div>
//           <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{ '--bg-img': 'url(https://cdn.dribbble.com/users/1099127/screenshots/15781250/media/45133f784a8e49afded3842293941df4.gif)' }}>
//             <div>
//               <h1><i>Day Flow</i></h1>
//               <p><h3>Elevate your day, organize your life – Dayflow at your service!!!</h3></p>
           
//               <div className="tags">
//                 <div className="tag">cal</div>
//               </div>
//             </div>
//           </a>
//         </div>
      
//       </section>
//     </div>
//   );
// }

// export default Aboutcal;




// import React from 'react';
// import './Aboutcal.css';

// const Aboutcal = () => {
//   return (
//     <div class="background-container">
//         <aside class="profile-card">
//   <header>
    
//     <a target="_blank" href="#">
//       <img src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?size=626&ext=jpg&ga=GA1.1.1473190193.1708421226&semt=ais" class="hoverZoomLink"></img>
//     </a>
 
//    <div class="card">
//     <h1>
//           DAY FLOW
//           </h1>
// </div>
//   </header>

 
//   <div class="profile-bio">

//     <p>
//         <h2>
//     Elevate your day, <br></br>
//     organize your life<br></br>
//      – Dayflow at your service!!!
//     </h2>
//     </p>

 
//   </div>

//   <ul class="profile-social-links">
//     <li>
//       <a target="_blank" href="https://www.facebook.com/">
//         <i class="fa fa-facebook"></i>
//       </a>
//     </li>
//     <li>
//       <a target="_blank" href="https://twitter.com/dropyourbass">
//         <i class="fa fa-twitter"></i>
//       </a>
//     </li>
//     <li>
//       <a target="_blank" href="https://github.com/vipulsaxena">
//         <i class="fa fa-github"></i>
//       </a>
//     </li>
//     <li>
//       <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
//         <i class="fa fa-behance"></i>
//       </a>
//     </li>
//   </ul>
// </aside>
// </div>

   
    
//   )
// }

// export default Aboutcal


import React from 'react';
import './Aboutcal.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import RandomQuote from '../RandomQuote/RandomQuote';
const Aboutcal = () => {
  return (
    <div class="inf">
      <section className="info">
        <img src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?size=626&ext=jpg&ga=GA1.1.1473190193.1708421226&semt=ais" alt="Code The Web" />
        <h1 class="bla">
          DAY FLOW &mdash; <Link to="/"  rel="noopener noreferrer">HOME</Link>
        </h1>
      </section>
      <section className="cards-wrapper align-left"> {/* Added align-left class */}
        <div className="card-grid-space">
          <div className="num"></div>
          <a className="card"  style={{ '--bg-img': 'url(https://cdn.dribbble.com/users/1099127/screenshots/15781250/media/45133f784a8e49afded3842293941df4.gif)' }}>
            <div>
              <h1 class="cardh1"><i>Day Flow</i></h1>
              <p class="cardp"><h3>Elevate your day, organize your life – Dayflow at your service!!!</h3></p>
           
              <div className="tags">
                <div className="tag"></div>
              </div>
            </div>
          </a>
        </div>
        
        {/* New Box for Additional Information */}
        <div className="additional-info">
          <div class="box">
          <p class="p">
           Day Flow, is designed to help you elevate your day and organize <br></br> your life.With intuitive features and a user-friendly interface, <br></br>Day Flow is your personal assistant for efficient time management.
          
          <br></br>  Explore our website to discover the latest tips and tricks for <br></br>maximizing productivity,setting reminders, and staying on top of <br></br> your schedule.Join our community today and start making<br></br> the most out of every day!
            </p>
            </div>
        </div>
      
      </section>
      <RandomQuote/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer/>
    </div>
  );
}

export default Aboutcal;