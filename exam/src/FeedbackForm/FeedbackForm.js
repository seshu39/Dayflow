// FeedbackForm.js

import React, { useState } from 'react';
import './FeedbackForm.css';
import Navbar from '../Navbar/Navbar';
import RatingComponent from '../RatingComponent/RatingComponent';
import Getorganized from '../Getorganized/Getorganized';
import Footer from '../Footer/Footer';

const FeedbackForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (!username || !email || !feedback) {
      alert('Please fill in all fields before submitting.');
      return;
    }

   
    setTimeout(() => {
      console.log('Feedback submitted:', { username, email, feedback });
      setSubmitted(true);
    }, []);
  };

  return (
    <div>
    <div class="FF">
    <div class="Fees">
     <Navbar/>
     <br></br>
    <div class="feedback1">
    <div className="feedback-forme">
      <h2 class="fee">Feedback Form</h2>
      {submitted ? (
        <p className="success-messagee">Thank you for your feedback!!</p>
      ) : (
        <form onSubmit={handleSubmit} class="ffform">
          <label htmlFor="username" class="lab">Username:</label>
          <input class="int"
            type="text"
            id="username"
            name="username"
            // value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />

          <label htmlFor="email">Email:</label>
          <input class="int"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />

          <label htmlFor="feedback">Your Feedback:</label>
          <textarea class="fft"
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Type your feedback here..."
          ></textarea>

          <button type="submit" class="sub">Submit Feedback</button>
        </form>
      )}
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Getorganized/>
    </div>
    <RatingComponent/>
    <Footer/>
    </div>
    </div>
  );
};

export default FeedbackForm;
