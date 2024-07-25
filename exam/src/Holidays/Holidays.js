import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalendarList = () => {
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.addevent.com/api/v1/me/calendars/list/?token=USER-TOKEN-ID');
        setCalendars(response.data.calendars);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Calendar List</h2>
      <ul>
        {calendars.map((calendar) => (
          <li key={calendar.id}>
            <strong>Title:</strong> {calendar.title}<br />
            <strong>Description:</strong> {calendar.description}<br />
            <strong>Total Followers:</strong> {calendar.followers_total}<br />
            {/* Add more details as needed */}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarList;

