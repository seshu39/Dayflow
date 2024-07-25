import React, { useState } from 'react';
import './Todolist.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ToDoList = () => {
 
  const [toDoListArray, setToDoListArray] = useState([]);
  const [toDoItem, setToDoItem] = useState('');

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const itemId = String(Date.now());
    
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    
    setToDoItem('');
  };
                                                                                                                                                                                                                                          
  const handleItemClick = (id) => {
    
    removeItemFromDOM(id);
    removeItemFromArray(id);
  };

  
  const addItemToDOM = (itemId, toDoItem) => {
    
    const li = document.createElement('li');
    li.setAttribute('data-id', itemId);
    
    li.innerText = toDoItem;
    
    const ul = document.querySelector('.toDoList');
    ul.appendChild(li);
  };

  const addItemToArray = (itemId, toDoItem) => {
  
    setToDoListArray((prevList) => [...prevList, { itemId, toDoItem }]);
    console.log(toDoListArray);
  };

  const removeItemFromDOM = (id) => {
    
    const ul = document.querySelector('.toDoList');
    const li = document.querySelector(`[data-id="${id}"]`);
    ul.removeChild(li);
  };

  const removeItemFromArray = (id) => {
    
    setToDoListArray((prevList) => prevList.filter((item) => item.itemId !== id));
    console.log(toDoListArray);
  };

  return (
    <div className='t-wrapper'>
       {/* <nav>
        <div className="nav-logo-container">
        <img src='./logo.png' alt="Wl" /><span>DayFlow</span>
        </div> 
        </nav> */}
        <Navbar/>
    <div class="we">
      <section className="container1s">
        <div className="headingofto">
          <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" alt="laptop icon" />
          <h1 className="heading__title">To-Do List</h1>
        </div>
        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <label className="form__label" htmlFor="todo">~ Today I need to ~</label>
            <input
              className="form__input"
              type="text"
              id="todo"
              name="to-do"
              size="30"
              required
              value={toDoItem}
              onChange={(e) => setToDoItem(e.target.value)}
            />
            <button className="buttones"><span class="todospan">Submit</span></button>
          </div>
        </form>
        <div>
          <ul className="toDoList" onClick={(e) => handleItemClick(e.target.getAttribute('data-id'))}></ul>
        </div>
     
      </section>
      
    </div>
     <Footer/>
    </div>
  );
};  
export default ToDoList;

