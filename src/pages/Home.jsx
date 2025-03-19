import  { useState } from 'react';
import './Home.css'; // Import the external CSS file

const randomFacts = [
  "Polar bears have black skin.",
  "Sloths only poop once a week.",
  "A group of flamingos is called a 'flamboyance'.",
  "Octopuses have three hearts.",
  "Wombat poop is cube-shaped.",
  "A day on Venus is longer than a year on Venus.",
  "Neutron stars are so dense that a sugar-cube-sized amount would weigh billions of tons.",
  "The Sun accounts for 99.8% of the mass in our solar system.",
  "There's a giant cloud of alcohol in space, Sagittarius B, that could make 400 trillion pints of beer.",
  "A spoonful of a neutron star would weigh about a billion tons.",
  "Napoleon was once attacked by a horde of bunnies.",
  "The Eiffel Tower can be 15 cm taller during the summer due to expansion.",
  "Ancient Romans used urine as mouthwash because of its ammonia content.",
  "The shortest war in history was between Britain and Zanzibar in 1896—it lasted 38 to 45 minutes.",
  "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
  "The first computer virus was created in 1986 and was called 'Brain'.",
  "The Apollo 11 guidance computer had less processing power than a modern smartphone.",
  "The first-ever website is still online and was created by Tim Berners-Lee in 1991.",
  "There are more connected devices than people on Earth.",
  "The term 'robot' comes from a Czech word meaning 'forced labor'.",
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "Apples float in water because they are 25% air.",
  "Pineapples take about two years to grow.",
  "White chocolate isn’t actually chocolate since it doesn’t contain cocoa solids.",
  "Peanuts aren’t nuts—they’re legumes, like beans and lentils.",
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
      <h1 className="title">Random Facts about the WORLD!</h1>
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