import  { useState } from 'react';
import './Home.css'; // Import the external CSS file

const randomFacts_history = [
    "Napoleon was once attacked by a horde of bunnies.",
    "The Eiffel Tower can be 15 cm taller during the summer due to expansion.",
    "Ancient Romans used urine as mouthwash because of its ammonia content.",
    "The shortest war in history was between Britain and Zanzibar in 1896—it lasted 38 to 45 minutes.",
    "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
  ];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * randomFacts_history.length);
  return randomFacts_history[randomIndex];
}

export default function History() {
  const [fact, setFact] = useState(getRandomFact());

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  return (
    <div className="container">
      <h1 className="title">Random Facts about the History!</h1>
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
        {randomFacts_history.map((fact, index) => (
          <li key={index} className="fact-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
}