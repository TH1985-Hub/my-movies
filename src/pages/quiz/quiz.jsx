// import { useContext, useEffect } from "react"
// import { QuizProvider, QuizContext, STATUES} from "./context/quiz-context"
// import{ quizApi } from "../../api/quiz.api"
// import { Loading } from "./components/loading/loading"
// import { Error } from "./components/error/error"
// import { StartScreen } from "./components/start-screen/start-screen"
// import { Progress } from "./components/progress/progress"
// import { Questions } from "./components/questions/questions"
// import { Footer } from "./components/footer/footer"
// import { FinishScreen } from "./components/finish-screen/finish-screen"

// const QuizApp = () => {
//     const { status, dispatch } = useContext(QuizContext);
//     console.log("status:", status);
    
    
//     useEffect(() => {
//         quizApi.getQuestions().then((response) => {
//           if (response.success) {
//             dispatch({ type: "DATA_RECEIVED", payload: response.data });
//           } else {
//             dispatch({ type: "DATA_FAILED" });
//           }
//         });
//       }, [dispatch])
    
//     return(
//        <div className="mt-4 text-white">
//             <main>
//                 {status === STATUES.loading && <Loading />}
//                 {status === STATUES.error && <Error />}
//                 {status === STATUES.ready && <StartScreen />}
//                 {status === STATUES.active &&  (<>
//                 <Progress />
//                 <Questions />
//                 <Footer />
//                   </>
//                  ) }
//                  {status === STATUES.finished && <FinishScreen />}
//             </main>
//         </div> 
//     )  
// }

// export const Quiz = () => {
//     return (
//         <QuizProvider>
//             <QuizApp />
//         </QuizProvider>
//     )
// }

// import { useContext, useEffect } from "react";
// import { QuizProvider, QuizContext, STATUSES } from "./context/quiz-context";
// import { fetchQuestions } from "../../api/quiz.api"; // Updated import
// import { Loading } from "./components/loading/loading";
// import { Error } from "./components/error/error";
// import { StartScreen } from "./components/start-screen/start-screen";
// import { Progress } from "./components/progress/progress";
// import { Questions } from "./components/questions/questions";
// import { Footer } from "./components/footer/footer";
// import { FinishScreen } from "./components/finish-screen/finish-screen";

// const QuizApp = () => {
//   const { status, dispatch } = useContext(QuizContext);
//   console.log("status:", status);

//   // Fetch questions when the component mounts
//   useEffect(() => {
//     const loadQuestions = async () => {
//       try {
//         const data = await fetchQuestions(); // Fetch questions from the API or localStorage
//         dispatch({ type: "DATA_RECEIVED", payload: data }); // Dispatch the data to the reducer
//       } catch (error) {
//         dispatch({ type: "DATA_FAILED" }); // Handle errors
//       }
//     };

//     loadQuestions();
//   }, [dispatch]);

//   return (
//     <div className="mt-4 text-white">
//       <main>
//         {/* Render components based on the current status */}
//         {status === STATUSES.loading && <Loading />}
//         {status === STATUSES.error && <Error />}
//         {status === STATUSES.ready && <StartScreen />}
//         {status === STATUSES.active && (
//           <>
//             <Progress />
//             <Questions />
//             <Footer />
//           </>
//         )}
//         {status === STATUSES.finished && <FinishScreen />}
//       </main>
//     </div>
//   );
// };

// export const Quiz = () => {
//   return (
//     <QuizProvider>
//       <QuizApp />
//     </QuizProvider>
//   );
// };

import { useContext, useEffect } from "react";
import { QuizProvider, QuizContext, STATUSES } from "./context/quiz-context";
import { fetchQuestions } from "../../api/quiz.api";
import { Loading } from "./components/loading/loading";
import { Error } from "./components/error/error";
import StartScreen from "./components/start-screen/start-screen"; 
import { Progress } from "./components/progress/progress";
import { Questions } from "./components/question-options/questions";
import {Options}  from  "./components/question-options/options";
import { Footer } from "./components/footer/footer";
import { FinishScreen } from "./components/finish-screen/finish-screen";


const QuizApp = () => {
  const { status, dispatch } = useContext(QuizContext);
  console.log("status:", status);

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
  }, [dispatch]);

  return (
    <div className="mt-4 text-white">
      <main>
        {status === STATUSES.loading && <Loading />}
        {status === STATUSES.error && <Error />}
        {status === STATUSES.ready && <StartScreen />}
        {status === STATUSES.active && (
          <>
            <Progress />
            <Questions />
            <Options/>
            <Footer />            
          </>
      
        )}
        {status === STATUSES.finished && <FinishScreen />}
      </main>
    </div>
  );
};

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
};