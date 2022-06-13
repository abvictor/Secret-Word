import React from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame, word }) => {
  return (
    <div className="start">
      <h1 className="secret_title">
        Secret
        <span
          style={{
            backgroundColor: "#0F0A0A",
            marginLeft: 10,
            color: "#FFF",
            borderRadius: 15,
            width: 180,
          }}
        >
          {" "}
          Word
        </span>
      </h1>
      <p>Clique no botão para começar a jogar</p>
      <button onClick={startGame}> Começar </button>
    </div>
  );
};

export default StartScreen;
