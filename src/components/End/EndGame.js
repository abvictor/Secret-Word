import React from "react";
import "../End/EndGame.css";

const EndGame = ({ restart, score }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h3>Sua pontuação foi: {score}</h3>
      <button onClick={restart}>Recomeçar</button>
    </div>
  );
};

export default EndGame;
