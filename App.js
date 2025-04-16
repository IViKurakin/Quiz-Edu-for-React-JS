import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const questions = [
    {
      question: "Какой язык программирования используется для создания React-приложений?",
      options: ["Java", "Python", "JavaScript", "C#"],
      correctAnswer: "JavaScript"
    },
    {
      question: "Какой метод используется для рендеринга элементов React в DOM?",
      options: ["ReactDOM.render()", "React.render()", "DOM.render()", "render()"],
      correctAnswer: "ReactDOM.render()"
    },
    {
      question: "Какой хук React используется для управления состоянием?",
      options: ["useEffect", "useContext", "useState", "useReducer"],
      correctAnswer: "useState"
    }
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Ваш результат: {score} из {questions.length}</h2>
          <button onClick={restartQuiz}>Попробовать снова</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;