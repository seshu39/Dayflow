import React from 'react'
import "../Event/Event.css"
const Event = () => {
    const handleClick = () =>
 {
  alert("Meeting Scheduled")
  
 }
  return (
    <div class="adding">
    <div class='add_meeting'>
      <h1 class='icon-calendar-empty'>Add Meeting</h1>
    <section class="secevent">
      <form>
        <label class="eventlab">Title</label>
        <input type='text' class="eventin" placeholder='Meeting Name'/>
        <label class="eventlab">Location</label>
        <input type='text' class="eventin" placeholder='Location'/>
        <label class="eventlab">Start</label>
        <input type='text' class="eventin" placeholder='Start Time'/>
        <label class="eventlab">End</label>
        <input type='text' class="eventin" placeholder='End Time'/>
        <label class="eventlab">Guests</label>
        <input type='text' class="eventin" placeholder='Add Guest'/>
      </form>
    </section>
    
    <div class="addbutton"><center>
            <button onClick={handleClick}>ADD</button>            
             </center></div>
    
    
  </div>
  </div>
  )
}

export default Event