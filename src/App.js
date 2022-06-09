import { useCallback, useEffect, useState } from "react";
import { wordsList } from "../src/data/words";

import "./App.css";
import Game from "../src/components/Game/Game";
import EndGame from "../src/components/End/EndGame";
import StartScreen from "./components/StartScreen/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  //pega uma categoria aleatória
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pegar uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  //começar a jogar
  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    setGameStage(stages[1].name);

    //criar um array das letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //preencher os estados

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);
  };

  //verificar a letra no input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //recomeçar o jogo
  const restart = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndGame restart={restart} />}
    </div>
  );
}

export default App;
