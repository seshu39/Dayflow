import React, { useState } from 'react';
import './Timer.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00 AM');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTime, setAlarmTime] = useState('');
  const [ringtone] = useState(new Audio("/files/ringtone.mp3")); // Adjust path as needed


  const handleChange = () =>{
    alert('Alarm has been set');
  }
  const handleSetAlarm = () => {
    if (isAlarmSet) {
      setAlarmTime('');
      ringtone.pause();
      setIsAlarmSet(false);
      return;
    }
    else {
      
      handleChange();
    }


    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const ampm = document.getElementById('ampm').value;

    if (hour === 'Hour' || minute === 'Minute' || ampm === 'AM/PM') {
      return alert('Please select a valid time to set the alarm!');
    }

    setAlarmTime(`${hour}:${minute} ${ampm}`);
    setIsAlarmSet(true);
  };

  setInterval(() => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 12;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    const timeString = `${h}:${m}:${s} ${ampm}`;
    setCurrentTime(timeString);

    if (alarmTime === timeString) {
      ringtone.play();
      ringtone.loop = true;
    }
  }, 1000);


  return (
    <div class="navi">
      <Navbar/>
    <div class="bodyclass">
    <div className="wrappers">
      <img src="https://tse1.mm.bing.net/th?id=OIP.geICClU6rmqOaqbe5TlCJwHaIe&pid=Api&P=0&h=180" alt="clock" class="clock"/>
      <h1 class="time">{currentTime}</h1>
      <div className="content">
        <div className="column">
          <select id="hour">
            <option value="Hour" disabled hidden>Hour</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="column">
          <select id="minute">
            <option value="Minute" disabled hidden>Minute</option>
            {[...Array(60)].map((_, i) => (
              <option key={i} value={i}>{i < 10 ? '0' + i : i}</option>
            ))}
          </select>
        </div>
        <div className="column">
          <select id="ampm">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <button onClick={handleSetAlarm} class="timerbutton">{isAlarmSet ? 'Clear Alarm' : 'Set Alarm'}</button>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Timer;
