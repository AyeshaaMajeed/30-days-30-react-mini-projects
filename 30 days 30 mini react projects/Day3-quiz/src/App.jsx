import React, { useState } from "react";

const questions = [
  {
    question: "1) What is the print function in C#?",
    options: [
      "a. Print()",
      "b. Console.WriteLine",
      "c. Console.Write",
      "d. System.out.println",
    ],
    correctAnswer: "b. Console.WriteLine",
  },
  {
    question:
      "2) Which language is used for client-side scripting in web development?",
    options: ["a. Java", "b. Python", "c. Javascript", "d. C++"],
    correctAnswer: "c. Javascript",
  },
  {
    question: "3) What is the data type for storing text in java?",
    options: ["a. String", "b. Integer", "c. Float", "d. Boolean"],
    correctAnswer: "a. String",
  },
  {
    question: "4) What is the ability of an object to take multiple forms?",
    options: [
      "a. Encapsulation",
      "b. Abstraction",
      "c. Inheritance",
      "d. Polymorphism",
    ],
    correctAnswer: "d. Polymorphism",
  },
  {
    question: "5) What is the keyword for defining a class in C++?",
    options: ["a. Class", "b. Struct", "c. Interface", "d. Abstract"],
    correctAnswer: "a. Class",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-purple-700 to-purple-500 min-h-screen p-4">
      <main className="bg-purple-100 shadow-lg rounded-lg p-8 max-w-xl w-full">
        {showScore ? (
          <div className="text-center ">
            <h1 className="font-bold text-4xl mb-4 animate-bounce">Result</h1>
            <p className="font-bold text-2xl mb-4">
              Your score is: {score} / {questions.length}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={() => window.location.reload()}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h1 className="font-bold text-4xl mb-4 text-center">QuizUp!</h1>
            <div className="bg-purple-200 p-6 rounded-lg shadow-inner">
              <h2 className="font-bold text-2xl mb-4">
                {questions[currentQuestion].question}
              </h2>
              <ul className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <li
                    className="transition duration-300 ease-in-out border border-gray-300 p-4 bg-purple-300 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                    key={index}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
