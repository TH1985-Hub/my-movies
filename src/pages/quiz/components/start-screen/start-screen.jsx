// import { useContext } from "react";
// import { QuizContext } from "../../context/quiz-context";

// export const StartScreen = () => {
//   const { questions, dispatch } = useContext(QuizContext);
//   const numberOfQuestions = questions.length;

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center">
//       <h2 
//       style={{color: "#EC8305"}}>Welcome to The Movie Quiz!</h2>
//       <h3>{numberOfQuestions} questions to test your movie knowledge skills</h3>
//       <button
//         className="btn btn-warning"
//         onClick={() => dispatch({ type: "START" })}
//       >
//         Let's start
//       </button>
//     </div>
//   );
// };

// import { useContext } from "react";
// import { QuizContext } from "./context/QuizContext";

// const StartScreen = () => {
//   const { status, dispatch } = useContext(QuizContext);

//   const handleStart = () => {
//     dispatch({ type: "START" });
//   };

//   return (
//     <div className="start-screen">
//       <h2>Welcome to the Quiz!</h2>
//       <button onClick={handleStart} disabled={status !== "ready"}>
//         Start Quiz
//       </button>
//     </div>
//   );
// };

// export default StartScreen;

// import { useContext } from "react";
// import { QuizContext, STATUSES } from "../../context/quiz-context";

// const StartScreen = () => {
//   const { status, dispatch } = useContext(QuizContext);

//   const handleStart = () => {
//     dispatch({ type: "START" });
//   };

//   return (
//     <div className="start-screen">
//       <h2>Welcome to the Quiz!</h2>
//       <button onClick={handleStart} disabled={status !== STATUSES.ready}>
//         Start Quiz
//       </button>
//     </div>
//   );
// };

// export default StartScreen; 

import { useContext } from "react";
import { QuizContext, STATUSES } from "../../context/quiz-context";
//import ./start-screen.css;

const StartScreen = () => {
  const { status, dispatch } = useContext(QuizContext);
  //const numberOfQuestions = questions.length;


  const handleStart = () => {
    dispatch({ type: "START" });
  };

  return (
    <div className="quiz-container   d-flex flex-column justify-content-center align-items-center">
      {/* Beautiful Header */}
      <header className="quiz-header d-flex flex-column justify-content-center align-items-center">
        <h1>🚀 Quiz Master</h1>
        <p    d-flex flex-column justify-content-center align-items-center>Test your knowledge and have fun!</p>
      </header>

      <div className="start-screen">
        <h2 style={{color: "#EC8305"}}>Welcome to the Quiz!</h2>
        <button className="start-btn" onClick={handleStart} disabled={status !== STATUSES.ready}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
