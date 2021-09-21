import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card, { array } from "./components/Card";
// eslint-disable-next-line
import Character from "./components/Characters";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");

  const handleScore = (id) => {
    handleHighScore();
    setScore((oldScore) => oldScore + 1);
  };

  const handleHighScore = () => {
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  };

  const reset = () => {
    setScore(0);
    setCards([]);
  };

  const handleCards = (cardId) => {
    setCards((card) => [...card, cardId]);
  };

  const gameLogic = (id) => {
    if (cards.includes(id)) {
      reset();
      setMessage("You Lost Play Again?");
    } else {
      if (cards.length + 1 === array.length) {
        setMessage("You Win");
        handleScore();
        reset();
        return;
      }
      handleScore();
      handleCards(id);
      setMessage("");
    }
  };

  return (
    <div>
      <Header
        message={message}
        score={score}
        highScore={highScore}
        reset={reset}
      />
      <Card handleScore={gameLogic} cards={cards} />
    </div>
  );
}

export default App;
