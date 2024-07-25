import React,{useState} from 'react'
import "../RandomQuote/RandomQuote.css"
const quotes = [
  {
    text: "Embrace each day with purpose and let DAYFLOW be your guide to a life well-planned.",
    author: "Team Dayflow"
  },
  {
    text: "Seize the day with DAYFLOW, where every moment is an opportunity to create something amazing.",
    author: "Team Dayflow"
  },
  {
    text: "Your life, your schedule, your way. Make every day count with DAYFLOW.",
    author: "Team Dayflow"
  },
  {
    text: "Time is precious, make it beautiful. DAYFLOW - Your daily dose of organized inspiration.",
    author: "Team Dayflow"
  },         
  {
    text: "Unlock the potential of every day with DAYFLOW, where productivity meets simplicity." ,
    author: "Team Dayflow"
  },
  {
    text: "Plan your day, own your day. DAYFLOW - Your companion in the journey of time.",
    author: "Team Dayflow"
  },
  {
    text: "Experience the magic of a well-organized life. Let DAYFLOW transform your days into masterpieces." ,
    author: "Team Dayflow"
  },
  {
    text: "In the dance of time, let DAYFLOW be your choreographer. Make every step count." ,
    author: "Team Dayflow"
  },
  {
    text: "Rise with the sun, shine with DAYFLOW. Your daily planner for a brighter tomorrow.",
    author: "Team Dayflow"
  },
  {
    text: "Life is a canvas, and with DAYFLOW, every stroke is intentional. Paint your perfect day.",
    author: "Team Dayflow"
  },
];

const RandomQuote = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };

  return (
    <div className="lana">
    <div className="quote-container">
      <div className="quote-text">
        <p>"{quote.text}"</p>
      </div>
      <div className="quote-author"> 
        <p>- {quote.author}</p>
      </div>
      <button onClick={generateQuote} class="rqbut">Generate Quote</button>
    </div>
    </div>
  );
};

export default RandomQuote