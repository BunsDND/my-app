import  { useState } from 'react';
import './Home.css'; // Import the external CSS file

const randomFacts = [
  "Honey never spoils.",
  "Bananas are berries, but strawberries aren't.",
  "A group of flamingos is called a 'flamboyance'.",
  "Octopuses have three hearts.",
  "Wombat poop is cube-shaped.",
];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts.length);
  return randomFacts[randomIndex];
}

export default function Home() {
  const [fact, setFact] = useState(getRandomFact());

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  return (
    <div className="container">
      <h1 className="title">Hello World</h1>
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
        {randomFacts.map((fact, index) => (
          <li key={index} className="fact-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
}