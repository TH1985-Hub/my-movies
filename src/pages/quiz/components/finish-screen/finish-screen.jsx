import { useContext, useMemo } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./finish-screen.css";

const getEmojiIcon = (percentage) => {
  let emoji;
  if (percentage >= 0 && percentage < 20) {
    emoji = "🙄";
  } else if (percentage >= 20 && percentage < 40) {
    emoji = "🤔";
  } else if (percentage >= 40 && percentage < 60) {
    emoji = "🙂";
  } else if (percentage >= 60 && percentage < 80) {
    emoji = "😀";
  } else if (percentage >= 80 && percentage <= 100) {
    emoji = "😍";
  }
  return emoji;
};

export const FinishScreen = () => {
  const { points, maxPossiblePoints, dispatch } = useContext(QuizContext);
  const percentage = (points / maxPossiblePoints) * 100;
  const emoji = useMemo(() => getEmojiIcon(percentage), [points, maxPossiblePoints]);

  return (
    <div className="finish-screen">
      <div className="finish-content">
        <p className="emoji">{emoji}</p>
        <p className="score-text">
          You scored{" "}
          <span className="highlight">{points}</span> out of{" "}
          <span className="highlight">{maxPossiblePoints}</span> points.
        </p>
        <button
          className="restart-button"
          onClick={() => dispatch({ type: "RESTART" })}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};