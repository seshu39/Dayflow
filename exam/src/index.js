import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Getorganized from './Getorganized/Getorganized';

 import App from './App';

import Calendarapp from './Calendarapp/Calendarapp';

// import Counterexam from './Counterexam/Counterexam';import Props1 from './Props/Props1';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Aboutcal from './Aboutcal/Aboutcal';'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App></App> */}
  {/* <Aboutcal/> */}
  
  {/* <Getorganized/> */}
   {/* <Calendarapp/> */}
<App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

