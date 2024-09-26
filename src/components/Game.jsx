import { useEffect, useState } from "react";
import api from "../api/api.js";
import Card from "./Card.jsx";
import "../styles/Game.css";

function Game({ setScore, setHighScore, score, highScore }) {
  const [items, setItems] = useState([]);
  const [pressed, setPressed] = useState([]);

  const fetchData = async () => {
    try {
      const pokemons = await Promise.all(
        Object.keys(api).map(async (pokemon) => {
          const response = await fetch(api[pokemon]);
          if (!response.ok) {
            throw new Error(
              `Error fetching pokemon: ${pokemon}: ${response.status}`,
            );
          }
          const json = await response.json();
          return {
            img: json.sprites.other.home.front_default,
            name: pokemon,
          };
        }),
      );
      return pokemons;
    } catch (error) {
      console.error("Error in fetchData: " + error);
      return [];
    }
  };

  useEffect(() => {
    const effect = async () => {
      const data = await fetchData();
      setItems(data);
    };
    effect();
  }, []);

  function handleClick(pokemon) {
    if (pressed.includes(pokemon)) {
      setHighScore(Math.max(highScore, score));
      setScore(0);
      setPressed([]);
    } else {
      setScore(score + 1);
      setPressed([...pressed, pokemon]);
    }
  }

  return (
    <div className={"game"}>
      {items.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          name={item.name}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Game;
