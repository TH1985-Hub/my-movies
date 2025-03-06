import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./questions.css";

export function Questions() {
  const { questions, index } = useContext(QuizContext);
  const currentQuestion = questions[index];

  return (
    <div className="question-container">
      <h2 className="question-text">{currentQuestion.question}</h2>
    </div>
  );
}