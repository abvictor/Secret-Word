import React from "react";
import "../Game/Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <p className="points">
        <span>Sua pontuação: 000</span>
      </p>
      <h1>Adivinha a palavra: </h1>
      <h3 className="tip">
        Dica da palavra:
        <span> Profissão </span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>
          Letras já utilizadas:
          <span> a,</span>
          <span> b,</span>
          <span> c,</span>
        </p>
      </div>
    </div>
  );
};

export default Game;
