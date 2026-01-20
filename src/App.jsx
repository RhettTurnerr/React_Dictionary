import "./App.css";

import WordForm from "./components/WordForm/WordForm";
import CardsContainer from "./components/CardsContainer/CardsContainer";

import React from "react";

function App() {
  const [words, setWords] = React.useState([
    { front: "translation", back: "ubersetzung" },
    { front: "egg", back: "Ei" },
    { front: "taxi", back: "Taxi" },
    { front: "paper", back: "Papier" },
    { front: "square", back: "Platz" },
  ]);

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  };

  const deleteWord = (front) =>{
    const newWords = words.filter(words => words.front !== front);
    setWords(newWords);
  };

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordForm addWord={addWord} />
        <CardsContainer words={words} deleteWord={deleteWord}/>
      </main>
    </div>
  );
}

export default App;
