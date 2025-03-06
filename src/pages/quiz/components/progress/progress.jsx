import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./progress.css";

export function Progress() {
  const { questions, index } = useContext(QuizContext);
  const totalQuestions = questions.length;
  const currentQuestionNumber = index + 1;

  // Calculate progress percentage
  const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div className="progress-text">
        Question {currentQuestionNumber} of {totalQuestions}
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}