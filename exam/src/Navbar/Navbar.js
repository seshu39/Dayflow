
import React from 'react';
import './Navbar.css';
// import { LoginHandle } from '../Signup/LoginContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo-container">
                <img src='./logo.png' alt="Wl" class="navimg"/><span>DAYFLOW</span>
            </div>
            <div className="navbar-links-container">
                <a href="http://localhost:3000/">Home</a>
                <a href="http://localhost:3000/Aboutcal">Aboutus</a>
                <a href="http://localhost:3000/FeedbackForm">Customers</a>
                <div className="dropdown">
                    <button className="dropbtn">MeetDayFlow</button>
                    <div className="dropdown-content">
                        <a href="http://localhost:3000/Calendarpage" class="navba">Calendar</a>
                        <a href="http://localhost:3000/Calendarapp" class="navba">Event Calendar</a>
                        <a href="http://localhost:3000/Todolist" class="navba">To-Do List</a>
                        <a href="http://localhost:3000/Sign" class="navba">Add Meeting</a>
                        <a href="http://localhost:3000/Notes" class="navba">Notepad</a>
                        <a href="http://localhost:3000/Timer" class="navba">Timer/Alarm</a>
                    </div>
                </div>
                {/* {LoginHandle.islogedin  ? <h3>{LoginHandle.name}</h3> :  */}
                <a href="http://localhost:3000/Signup">Login</a>          
                <a href="http://localhost:3000/Profile"><AccountCircleIcon/></a>
            </div>
        </nav>
    );
}

export default Navbar;
