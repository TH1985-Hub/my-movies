import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./options.css";

export function Options() {
  const { questions, index, answer, dispatch } = useContext(QuizContext);
  const currentQuestion = questions[index];

  const handleOptionClick = (optionIndex) => {
    dispatch({ type: "NEW_ANSWER", payload: optionIndex });
  };

  return (
    <div className="options-container">
      {currentQuestion.options.map((option, optionIndex) => (
        <button
          key={optionIndex}
          className={`option-button ${answer !== null && optionIndex === currentQuestion.correctOption ? "correct" : ""} ${answer === optionIndex && answer !== currentQuestion.correctOption ? "wrong" : ""}`}
          onClick={() => handleOptionClick(optionIndex)}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}