import React, { useState, useRef } from "react";
import "../Game/Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  guesses,
  score,
  wrongLetters,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };
  return (
    <div>
      <h1>Game</h1>
      <p className="points">
        <span>Sua pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica da palavra:
        <span> {pickedCategory} </span>
      </h3>
      <p>Você ainda tem {guesses} tentativas.</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button onClick={handleSubmit}>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>
          Letras já utilizadas:
          {wrongLetters.map((letter, i) => (
            <span key={i} className="wrong_letters">
              {" "}
              {letter},{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Game;
