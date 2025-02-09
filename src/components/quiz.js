import React, { useState } from "react";
import "../styles.css";

const quizData = [
  {
    question: "What’s my favorite color?",
    options: ["Purple", "Orange", "Red", "Black"],
    answer: "Purple",
  },
  {
    question: "Where did we first talk?",
    options: ["Instagram", "Discord", "Snapchat", "Twitter"],
    answer: "Discord",
  },
  {
    question: "Favorite Food?",
    options: ["Pizza", "Sushi", "Orange Chicken", "Ground Turkey"],
    answer: "Orange Chicken",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      {!showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-4">{quizData[currentQuestion].question}</h2>
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold">You did it! 🎉</h2>
          <p className="mt-4">Click below for a surprise!</p>
          <a
            href="https://open.spotify.com/playlist/6fjwXHY3BN0I9KICof5oxG?si=398c9ebde12b4f11"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-white text-green-700 font-bold py-2 px-4 rounded"
          >
            Open Your Surprise 🎶
          </a>
        </div>
      )}
    </div>
  );
};

export default Quiz;
