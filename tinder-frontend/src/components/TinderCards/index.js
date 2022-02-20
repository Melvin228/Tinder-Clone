import React, { useState, useEffect } from "react";
import axios from "../../repository/cards";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  const [lastDirection, setLastDirection] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/cards");
      setPeople(req.data);
    };

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
