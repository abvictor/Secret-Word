import React from "react";
import "../End/EndGame.css";

const EndGame = ({ restart }) => {
  return (
    <div>
      <h1>Recomeçar?</h1>
      <button onClick={restart}>Recomeçar</button>
    </div>
  );
};

export default EndGame;
