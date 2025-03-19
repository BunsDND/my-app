import { useState } from "react";
import "./Home.css"; // Import the external CSS file

const randomFacts_animals = [
  "Polar bears have black skin.",
  "Sloths only poop once a week.",
  "A group of flamingos is called a 'flamboyance'.",
  "Octopuses have three hearts.",
  "Wombat poop is cube-shaped.",
];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts_animals.length);
  return randomFacts_animals[randomIndex];
}

export default function Animals() {
  const [fact, setFact] = useState(getRandomFact());

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  return (
    <div className="container">
      <h1 className="title">Random Facts about the Animals!</h1>
      <p className="content">
        Welcome to my random facts page! Here you will find interesting and fun
        facts that you might not know.
      </p>
      <div className="random-fact">
        <strong>Random Fact:</strong> {fact}
      </div>
      <button className="new-fact-button" onClick={handleNewFact}>
        Get Another Random Fact
      </button>

      <h2 className="subtitle">More Interesting Facts</h2>
      <ul className="fact-list">
        {randomFacts_animals.map((fact, index) => (
          <li key={index} className="fact-item">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
