import React, { useState } from "react"; 
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 
import "./Calendarapp.css"; 
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const App = () => { 
	
	const [selectedDate, setSelectedDate] = useState(null); 
	const [eventName, setEventName] = useState(""); 
	const [events, setEvents] = useState([]); 

	const Date_Click_Fun = (date) => { 
		setSelectedDate(date); 
	}; 

	const Event_Data_Update = (event) => { 
		setEventName(event.target.value); 
	}; 

	const Create_Event_Fun = () => { 
		if (selectedDate && eventName) { 
			const newEvent = { 
				id: new Date().getTime(), 
				date: selectedDate, 
				title: eventName, 
			}; 
			setEvents([...events, newEvent]); 
			setSelectedDate(null); 
			setEventName(""); 	
			setSelectedDate(newEvent.date); 
		} 
	}; 

	const Update_Event_Fun = (eventId, newName) => { 
		const updated_Events = events.map((event) => { 
			if (event.id === eventId) { 
				return { 
					...event, 
					title: newName, 
				}; 
			} 
			return event; 
		}); 
		setEvents(updated_Events); 
	};                 

	const Delete_Event_Fun = (eventId) => { 
		const updated_Events = events.filter((event) => event.id !== eventId); 
		setEvents(updated_Events); 
	}; 

	return ( 
		<div>
			<Navbar/>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		
			
		<div class="train">
		<div className="app"> 
			<img src="https://www.colorhexa.com/202d3e.png" width='1200px' height='300px'></img>		
			<h1 class="hopeh1"> "Mark your moments and seize the day with our calendar – <br></br>where every date becomes a masterpiece of memories." </h1> 
		   <h2 class="hopeh2">-Team Dayflow</h2>
			<div className="containers"> 
				<div className="calendar-container"> 
					<Calendar 
						value={selectedDate} 
						onClickDay={Date_Click_Fun} 
						tileClassName={({ date }) => 
							selectedDate && 
							date.toDateString() === selectedDate.toDateString() 
								? "selected"
								: events.some( 
									(event) => 
										event.date.toDateString() === 
										date.toDateString(), 
								) 
								? "event-marked"
								: ""
						} 
					/>{" "} 
				</div> 
				<div className="event-container"> 
					{" "} 
					{selectedDate && ( 
						<div className="event-form"> 
							<h2 style={{color:"black"}}> Create Event </h2>{" "} 
							<p class="pink"> 
								{" "} 
								<div class="eve">
								Selected Date: {selectedDate.toDateString()}{" "} 
								</div>
							</p>{" "} 
							<input 
								type="text"
								placeholder="Event Name"
								value={eventName} 
								onChange={Event_Data_Update} 
							/>{" "} 
							<button 
								className="create-btn"
								onClick={Create_Event_Fun} 
							> 
								Click Here to Add Event{" "} 
							</button>{" "} 
						</div> 
					)} 
					{events.length > 0 && selectedDate && ( 
						<div className="event-list"> 
							<h2 style={{color:"black"}}> My Created Event List </h2>{" "} 
							<div className="event-cards"> 
								{" "} 
								{events.map((event) => 
									event.date.toDateString() === 
									selectedDate.toDateString() ? ( 
										<div 
											key={event.id} 
											className="event-card"
										> 
											<div className="event-card-header"> 
												<span className="event-date"> 
													{" "} 
													{event.date.toDateString()}{" "} 
												</span>{" "} 
												<div className="event-actions"> 
													<button 
														className="update-btn"
														onClick={() => 
															Update_Event_Fun( 
																event.id, 
																prompt( 
																	"ENTER NEW TITLE", 
																), 
															) 
														} 
													> 
														Update Event{" "} 
													</button>{" "} 
													<button 
														className="delete-btn"
														onClick={() => 
															Delete_Event_Fun( 
																event.id, 
															) 
														} 
													> 
														Delete Event{" "} 
													</button>{" "} 
												</div>{" "} 
											</div>{" "} 
											<div className="event-card-body"> 
												<p className="event-title"> 
													{" "} 
													{event.title}{" "} 
												</p>{" "} 
											</div>{" "} 
										</div> 
									) : null, 
								)}{" "} 
							</div>{" "} 
						</div> 
					)}{" "} 
				</div>{" "} 
			</div>{" "} 
		</div> 
		
		<Footer/>
		</div>
		</div>
	); 
}; 

export default App; 
