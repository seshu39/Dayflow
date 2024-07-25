import './App.css';
// import Home from './Home/Home';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Features from './Features/Features';
import Home from './Home/Home';
// import Features from './Features/Features';

// import ToDoList from './Todolist/Todolist';

import Calendarapp from './Calendarapp/Calendarapp'

import ToDoList from './Todolist/Todolist';
import Calendarpage from './Calendarpage/Calendarpage';
import Aboutcal from './Aboutcal/Aboutcal';
import RandomQuote from './RandomQuote/RandomQuote';
import Sign from './Sign/Sign';


import Signup from './Signup/Signup';

import Contact from './Contact/Contact';

// import NoteA from './Note/NoteA';

// import Navbar from './Navbar/Navbar';
// import LandingPage from './LandingPage';
// import Event from './Event/Event.js';
// import Login from './Login/Login.js';
import Calci from './FeedbackForm/FeedbackForm.js'
import FeedbackForm from './FeedbackForm/FeedbackForm.js';
import Emailus from './Emailus/Emailus.js'
import Notes from './Notes/Notes.js';
import Timer from './Timer/Timer.js';
import Login from './Login/Login.js'
import Profile from './Profile/Profile.js';
import Getorganized from './Getorganized/Getorganized.js'
import RatingComponent from './RatingComponent/RatingComponent.js';
import Call from './Call/Call.js';
import Holidays from './Holidays/Holidays.js';

function App() {
  return (
    <div>
    <BrowserRouter>
            <Routes>
          <Route path="/Calendarpage" element={<Calendarpage/>}/>
            <Route path="/" element={<Home/>}/>
          <Route path="/Features" element={<Features/>}/> 
          
          <Route path="/Calendarapp" element={<Calendarapp/>}/> 
          <Route path="/Todolist" element={<ToDoList/>}/>
          
          <Route path="/Aboutcal" element={<Aboutcal/>}/>
          <Route path="/RandomQuote" element={<RandomQuote/>}/>
          <Route path="/Sign" element={<Sign/>}/>
         
         
         
          
           <Route path="/Signup" element={<Signup/>}/> 
           <Route path="/Login" element={<Login/>}/> 
           <Route path="/Contact" element={<Contact/>}/>
           <Route path="/FeedbackForm" element={<FeedbackForm/>}/>
           <Route path="/Emailus" element={<Emailus/>}/>
           <Route path="/Notes" element={<Notes/>}/>
           <Route path="/Timer" element={<Timer/>}/>
           <Route path="/Profile" element={<Profile/>}/>
           <Route path="/RatingComponent" element={<RatingComponent/>}/>
           <Route path="/Getorganized" element={<Getorganized/>}/>
           <Route path="/Call" element={<Call/>}/>
           <Route path="/Holidays" element={<Holidays/>}/>
         
         
         
 
             </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
