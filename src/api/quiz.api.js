// class QuizApi {
//     constructor() {
//       this.baseUrl = "https://simple-blog-api-red.vercel.app/quiz?limit=5";
//     }
  
//     async getQuestions() {
//       try {
//         const response = await fetch(this.baseUrl);
        
//         if (!response.ok) {
//           return {
//             success: false,
//             data: null,
//             error: response.statusText || 'Failed to fetch questions'
//           };
//         }
        
//         const data = await response.json();
//         return {
//           success: true,
//           data,
//           error: null
//         };
//       } catch (error) {
//         return { 
//           success: false, 
//           data: null, 
//           error: error.message 
//         };
//       }
//     }
//   }
  
//   export const quizApi = new QuizApi();

// src/api/quiz.api.js
// const API_URL = "http://localhost:3001/questions";

// export const fetchQuestions = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) throw new Error("Failed to fetch questions");
//     const data = await response.json();
//     localStorage.setItem("quizQuestions", JSON.stringify(data)); // Save to local storage
//     return data;
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     const localData = JSON.parse(localStorage.getItem("quizQuestions")); // Fallback to local storage
//     return localData || [];
//   }
// };

// src/api/quiz.api.js
// import questions from '../data/questions.json'; 

// const LOCAL_STORAGE_KEY = "quizQuestions";

// export const fetchQuestions = async () => {
//   try {
    
//     const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (localData) return localData;

   
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questions.questions));
//     return questions.questions;
//   } catch (error) {
//     console.error("Error loading questions:", error);
//     throw new Error("Failed to fetch questions");
//   }
// };

import questions from '../data/questions.json'; 
const LOCAL_STORAGE_KEY = "quizQuestions";

export const fetchQuestions = async () => {
  try {
    
    const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (localData) return localData;

   
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questions.questions));
    return questions.questions;
  } catch (error) {
    console.error("Error loading questions:", error);
    throw new Error("Failed to fetch questions");
  }
};