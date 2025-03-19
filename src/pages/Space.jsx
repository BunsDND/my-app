import { useState } from "react";
import "./Home.css"; // Import the external CSS file

const randomFacts_space = [
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars are so dense that a sugar-cube-sized amount would weigh billions of tons.",
    "The Sun accounts for 99.8% of the mass in our solar system.",
    "There's a giant cloud of alcohol in space, Sagittarius B, that could make 400 trillion pints of beer.",
    "A spoonful of a neutron star would weigh about a billion tons.",
  ];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts_space.length);
  return randomFacts_space[randomIndex];
}

export default function Space() {
  const [fact, setFact] = useState(getRandomFact());

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  return (
    <div className="container">
      <h1 className="title">Random Facts about SPACE!</h1>
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
        {randomFacts_space.map((fact, index) => (
          <li key={index} className="fact-item">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
