import React, { useState } from 'react';
import "./Notes.css"
import Navbar from '../Navbar/Navbar';

const Notes = () => {
  
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  
  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  
  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim() === '') return; 
    setNotes([...notes, newNote]);
    setNewNote('');
  };


  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div class="notee">
      <Navbar/>
    <div class="Notesapp">
      <div class="notes-container">
    <div className="notes-app">
      <h1 class="head">Notepad</h1>
      <form onSubmit={handleAddNote} class="formsi">
        <textarea class="Inputt"
          type="text"
          
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Enter your note"
        />
        <br></br>
        <button type="submit" class="buttonsub">Add Note</button>
      </form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p class="pclass">{note}</p>
            <button onClick={() => handleDeleteNote(index)} class="notebut">Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Notes;