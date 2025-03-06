// import { createContext, useReducer } from "react";

// export const QuizContext = createContext();

// export const STATUSES = {
//     loading: "loading", 
//     error: "error", 
//     ready: "ready", 
//     active: "active", 
//     finished: "finished"
// };

// const initialState = {
//     status: STATUSES.loading,
//     index: 0,
//     answer: null,
//     points: 0,
//     correctAnswersCount: 0,
//     questions: [],
//     maxPossiblePoints: 0,
//     secondsRemaining: null,
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case "DATA_RECEIVED":
//             // Add basic validation for payload
//             if (!Array.isArray(action.payload)) {
//                 return { ...state, status: STATUSES.error };
//             }
            
//             const maxPossiblePoints = action.payload.reduce((prev, cur) => {
//                 return prev + (cur.points || 0);
//             }, 0);

//             return { 
//                 ...state, 
//                 questions: action.payload, 
//                 status: STATUSES.ready, 
//                 maxPossiblePoints,
//             };
        
//         case "DATA_FAILED":
//             return { ...state, status: STATUSES.error };
        
//         case "START":
//             return { 
//                 ...state, 
//                 status: STATUSES.active, 
//                 secondsRemaining: state.questions.length * 30 
//             };

//         case "NEW_ANSWER":
//             const question = state.questions[state.index];
//             const isCorrect = action.payload === question.correctOption;
//             const newCorrectAnswersCount = isCorrect ? state.correctAnswersCount + 1 : state.correctAnswersCount;
//             return {
//                 ...state,
//                 answer: action.payload,
//                 points: isCorrect ? state.points + question.points : state.points,
//                 correctAnswersCount: newCorrectAnswersCount,
//             };

//         case "NEXT_QUESTION":
//             return { 
//                 ...state, 
//                 answer: null, 
//                 index: state.index + 1 
//             };

//         case "FINISH":
//             return { 
//                 ...state, 
//                 status: STATUSES.finished 
//             };

//         case "RESTART":
//             return { 
//                 ...initialState, 
//                 questions: state.questions, 
//                 status: STATUSES.ready 
//             };

//         case "TICK":
//             return {
//                 ...state,
//                 secondsRemaining: state.secondsRemaining - 1,
//                 status: state.secondsRemaining === 0 ? STATUSES.finished : state.status,
//             };

//         default:
//             throw new Error("Unhandled action type");
//     }
// }

// export function QuizProvider({ children }) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <QuizContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </QuizContext.Provider>
//     );
// }

// src/context/QuizContext.jsx
import { createContext, useReducer, useEffect } from "react";
import { fetchQuestions } from "../../../api/quiz.api";

export const QuizContext = createContext();

export const STATUSES = {
  loading: "loading",
  error: "error",
  ready: "ready",
  active: "active",
  finished: "finished",
};

const initialState = {
  status: STATUSES.loading,
  index: 0,
  answer: null,
  points: 0,
  correctAnswersCount: 0,
  questions: [],
  maxPossiblePoints: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      // Add basic validation for payload
      if (!Array.isArray(action.payload)) {
        return { ...state, status: STATUSES.error };
      }

      const maxPossiblePoints = action.payload.reduce((prev, cur) => {
        return prev + (cur.points || 0);
      }, 0);

      return {
        ...state,
        questions: action.payload,
        status: STATUSES.ready,
        maxPossiblePoints,
      };

    case "DATA_FAILED":
      return { ...state, status: STATUSES.error };

    case "START":
      return {
        ...state,
        status: STATUSES.active,
        secondsRemaining: state.questions.length * 30,
      };

    case "NEW_ANSWER":
      const question = state.questions[state.index];
      const isCorrect = action.payload === question.correctOption;
      const newCorrectAnswersCount = isCorrect
        ? state.correctAnswersCount + 1
        : state.correctAnswersCount;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
        correctAnswersCount: newCorrectAnswersCount,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };

    case "FINISH":
      return {
        ...state,
        status: STATUSES.finished,
      };

    case "RESTART":
      return {
        ...initialState,
        questions: state.questions,
        status: STATUSES.ready,
      };

    case "TICK":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? STATUSES.finished : state.status,
      };

    default:
      throw new Error("Unhandled action type");
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch questions when the app loads
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        dispatch({ type: "DATA_RECEIVED", payload: data });
      } catch (error) {
        dispatch({ type: "DATA_FAILED" });
      }
    };

    loadQuestions();
  }, []);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}