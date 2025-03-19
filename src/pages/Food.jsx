import  { useState } from 'react';
import './Home.css'; // Import the external CSS file

const randomFacts_food = [
    "The first computer virus was created in 1986 and was called 'Brain'.",
    "The Apollo 11 guidance computer had less processing power than a modern smartphone.",
    "The first-ever website is still online and was created by Tim Berners-Lee in 1991.",
    "There are more connected devices than people on Earth.",
    "The term 'robot' comes from a Czech word meaning 'forced labor'.",
  ];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts_food.length);
  return randomFacts_food[randomIndex];
}

export default function Food() {
  const [fact, setFact] = useState(getRandomFact());

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  return (
    <div className="container">
      <h1 className="title">Random Facts about the Food!</h1>
      <p className="content">
        Welcome to my random facts page! Here you will find interesting and fun facts that you might not know.
      </p>
      <div className="random-fact">
        <strong>Random Fact:</strong> {fact}
      </div>
      <button className="new-fact-button" onClick={handleNewFact}>
        Get Another Random Fact
      </button>

      <h2 className="subtitle">More Interesting Facts</h2>
      <ul className="fact-list">
        {randomFacts_food.map((fact, index) => (
          <li key={index} className="fact-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
}