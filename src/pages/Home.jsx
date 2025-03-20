import { useState } from "react";
import "./Home.css"; // Import the external CSS file
import Card from "react-bootstrap/Card";

const randomFacts = [
  {
    title: "Polar Bears",
    content: "Polar bears have black skin.",
    link: "https://en.wikipedia.org/wiki/Polar_bear",
  },
  {
    title: "Sloths",
    content: "Sloths only poop once a week.",
    link: "https://en.wikipedia.org/wiki/Sloth",
  },
  {
    title: "Flamingos",
    content: 'A group of flamingos is called a "flamboyance".',
    link: "https://en.wikipedia.org/wiki/Flamingo",
  },
  {
    title: "Octopuses",
    content: "Octopuses have three hearts.",
    link: "https://en.wikipedia.org/wiki/Octopus",
  },
  {
    title: "Wombats",
    content: "Wombat poop is cube-shaped.",
    link: "https://en.wikipedia.org/wiki/Wombat",
  },
  {
    title: "Venus",
    content: "A day on Venus is longer than a year on Venus.",
    link: "https://en.wikipedia.org/wiki/Venus",
  },
  {
    title: "Neutron Stars",
    content:
      "Neutron stars are so dense that a sugar-cube-sized amount would weigh billions of tons.",
    link: "https://en.wikipedia.org/wiki/Neutron_star",
  },
  {
    title: "The Sun",
    content: "The Sun accounts for 99.8% of the mass in our solar system.",
    link: "https://en.wikipedia.org/wiki/Sun",
  },
  {
    title: "Sagittarius B",
    content:
      "There's a giant cloud of alcohol in space, Sagittarius B, that could make 400 trillion pints of beer.",
    link: "https://en.wikipedia.org/wiki/Sagittarius_B2",
  },
  {
    title: "Napoleon",
    content: "Napoleon was once attacked by a horde of bunnies.",
    link: "https://en.wikipedia.org/wiki/Napoleon",
  },
  {
    title: "Eiffel Tower",
    content:
      "The Eiffel Tower can be 15 cm taller during the summer due to expansion.",
    link: "https://en.wikipedia.org/wiki/Eiffel_Tower",
  },
  {
    title: "Ancient Romans",
    content:
      "Ancient Romans used urine as mouthwash because of its ammonia content.",
    link: "https://en.wikipedia.org/wiki/Ancient_Rome",
  },
  {
    title: "Shortest War",
    content:
      "The shortest war in history was between Britain and Zanzibar in 1896—it lasted 38 to 45 minutes.",
    link: "https://en.wikipedia.org/wiki/Anglo-Zanzibar_War",
  },
  {
    title: "Cleopatra",
    content:
      "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
    link: "https://en.wikipedia.org/wiki/Cleopatra",
  },
  {
    title: "First Computer Virus",
    content:
      'The first computer virus was created in 1986 and was called "Brain".',
    link: "https://en.wikipedia.org/wiki/Brain_(computer_virus)",
  },
  {
    title: "Apollo 11",
    content:
      "The Apollo 11 guidance computer had less processing power than a modern smartphone.",
    link: "https://en.wikipedia.org/wiki/Apollo_11",
  },
  {
    title: "First Website",
    content:
      "The first-ever website is still online and was created by Tim Berners-Lee in 1991.",
    link: "https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web",
  },
  {
    title: "Connected Devices",
    content: "There are more connected devices than people on Earth.",
    link: "https://en.wikipedia.org/wiki/Internet_of_things",
  },
  {
    title: "Robot",
    content: 'The term "robot" comes from a Czech word meaning "forced labor".',
    link: "https://en.wikipedia.org/wiki/Robot",
  },
  {
    title: "Honey",
    content:
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    link: "https://en.wikipedia.org/wiki/Honey",
  },
  {
    title: "Apples",
    content: "Apples float in water because they are 25% air.",
    link: "https://en.wikipedia.org/wiki/Apple",
  },
  {
    title: "Pineapples",
    content: "Pineapples take about two years to grow.",
    link: "https://en.wikipedia.org/wiki/Pineapple",
  },
  {
    title: "White Chocolate",
    content:
      "White chocolate isn’t actually chocolate since it doesn’t contain cocoa solids.",
    link: "https://en.wikipedia.org/wiki/White_chocolate",
  },
  {
    title: "Peanuts",
    content: "Peanuts aren’t nuts—they’re legumes, like beans and lentils.",
    link: "https://en.wikipedia.org/wiki/Peanut",
  },
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
        Welcome to my random facts page! Here you will find interesting and fun
        facts that you might not know.
      </p>
      <div className="random-fact">
        <strong>Random Fact:</strong> {fact.content}
      </div>

      <button className="new-fact-button" onClick={handleNewFact}>
        Get Another Random Fact
      </button>

      <div className="fact-container">
        {randomFacts.map((fact, index) => (
          <Card
            bg="white"
            key={index}
            text="dark"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{fact.title}</Card.Title> {/* Display the title */}
              <Card.Text>{fact.content}</Card.Text> {/* Display the content */}
              <Card.Link
                href={fact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More!
              </Card.Link>{" "}
              {/* Link to Wikipedia */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
