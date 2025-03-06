
// import React, { useState } from 'react';
// import Header from './components/header';
// import MovieTable from './components/movietable/movietable';
// import Pagination from './components/pagination/pagination';
// import { MovieProvider } from './context/MovieContext';
// import './styles/main.css';

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   //const [showSearchModal, setShowSearchModal] = useState(false);
//   //const [showListModal, setShowListModal] = useState(false);
//  // const [showQuizModal, setShowQuizModal] = useState(false);

//   return (
//     <MovieProvider>
//       <div className="app-container">
//         <Header 
//          // onSearchOpen={() => setShowSearchModal(true)}
//          // onListOpen={() => setShowListModal(true)}
//           //onQuizOpen={() => setShowQuizModal(true)}
//         />
        
//         <main className="main-content">
//           <MovieTable />
//           <Pagination 
//             currentPage={currentPage}
//             totalPages={10} // Replace with dynamic value
//             onPageChange={setCurrentPage}
//           />
//         </main>

//         {/* Modals
//         {showSearchModal && (
//           <SearchModal onClose={() => setShowSearchModal(false)} />
//         )}
        
//         {showListModal && (
//           <ListModal onClose={() => setShowListModal(false)} />
//         )}
        
//         {showQuizModal && (
//           <QuizModal onClose={() => setShowQuizModal(false)} />
//         )} */}
//       </div>
//     </MovieProvider>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import Header from './components/header';
// //import {omdbApi} from "./api/movie.api";
// import MovieCards from './components/movieCards/movie-cards';
// import Pagination from './components/pagination/pagination';
// import './App.css';


// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showSearch, setShowSearch] = useState(true);
//   const [activeTab, setActiveTab] = useState('search');

//   // Example movie data - replace with real data
//   const movies = Array(12).fill({
//     title: "Sample Mo",
//     year: "2023",
//     type: "Movie",
//     poster: "http://www.omdbapi.com/",
//   });

//   return (
//     <div className="app-container">
//       < Header showSearch={showSearch} setShowSearch={setShowSearch} />
      
//       <main className="main-content">
//         <div className="action-buttons">
//           <button 
//             className={`tab-btn ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => {
//               setActiveTab('search');
//               setShowSearch(true);
//             }}
//           >
//             Search Movies
//           </button>
          
//           <button 
//             className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
//             onClick={() => {
//               setActiveTab('list');
//               setShowSearch(false);
//             }}
//           >
//             My Movie List
//           </button>
          
//           <button 
//             className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
//             onClick={() => {
//               setActiveTab('quiz');
//               setShowSearch(false);
//             }}
//           >
//             Quiz
//           </button>
//         </div>

//         <MovieCards movies={movies} />
//         <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import Header from "./components/header";
import MovieCards from "./components/movieCards/movie-cards";
import {omdbApi} from "./api/movie.api";
//import {MovieDetails} from "./pages/movies/movie-details/movie-details";
//import {SearchMovies} from "./pages/search-movies/searchmovies";
import {Movies} from "./pages/movies/movie-details/movies"; 
import {Quiz} from "./pages/quiz/quiz";
import Pagination from "./components/pagination/pagination";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeTab, setActiveTab] = useState("search"); // Store current tab
//   const [movies, setMovies] = useState([]); // Store search results
//   const [loading, setLoading] = useState(false);

//   // Function to handle search results from Header
//   const handleSearchResults = (results) => {
//     setMovies(results);
//   };

//   return (
//     <div className="app-container">
//       <Header onSearchResults={handleSearchResults} />

//       <main className="main-content">
//         {/* Tab Buttons */}
//         <div className="action-buttons">
//           <button
//             className={`tab-btn ${activeTab === "search" ? "active" : ""}`}
//             onClick={() => setActiveTab("search")}
//           >
//             Search Movies
//           </button>

//           <button
//             className={`tab-btn ${activeTab === "list" ? "active" : ""}`}
//             onClick={() => setActiveTab("list")}
//           >
//             My Movie List
//           </button>

//           <button
//             className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`}
//             onClick={() => setActiveTab("quiz")}
//           >
//             Quiz
//           </button>
//         </div>

//         {/* Render Components Based on Active Tab */}
//         {activeTab === "search" && (loading ? <p>Loading movies...</p> : <MovieCards movies={movies} />)}
//         {activeTab === "list" && <Movies />} {/* My Movie List */}
//         {activeTab === "quiz" && <p>Quiz section coming soon!</p>}

//         <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
//       </main>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeTab, setActiveTab] = useState("search"); // Store current tab
//   const [movies, setMovies] = useState([]); // Store movies
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch Default Movies on Page Load
//   useEffect(() => {
//     const fetchDefaultMovies = async () => {
//       setLoading(true);
//       const response = await omdbApi.fetchMoviesBySearch("Batman"); // Example: Show Batman movies on load
//       setLoading(false);

//       if (response.success) {
//         setMovies(response.data);
//       } else {
//         setMovies([]);
//       }
//     };

//     fetchDefaultMovies(); // Call function on mount
//   }, []);

//   // 🔹 Function to handle search results from Header
//   const handleSearchResults = (results) => {
//     setMovies(results);
//   };

//   return (
//     <div className="app-container">
//       <Header onSearchResults={handleSearchResults} />

//       <main className="main-content">
//         {/* Tab Buttons */}
//         <div className="action-buttons">
//           <button
//             className={`tab-btn ${activeTab === "search" ? "active" : ""}`}
//             onClick={() => setActiveTab("search")}
//           >
//             Search Movies
//           </button>

//           <button
//             className={`tab-btn ${activeTab === "list" ? "active" : ""}`}
//             onClick={() => setActiveTab("list")}
//           >
//             My Movie List
//           </button>

//           <button
//             className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`}
//             onClick={() => setActiveTab("quiz")}
//           >
//             Quiz
//           </button>
//         </div>

//         {/* 🔹 Show Movies on Load */}
//         {activeTab === "search" && (loading ? <p>Loading movies...</p> : <MovieCards movies={movies} />)}
//         {activeTab === "list" && <Movies />} {/* My Movie List */}
//         {activeTab === "quiz" && <p>Quiz section coming soon!</p>}

//         <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
//       </main>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeTab, setActiveTab] = useState("search");
//   const [movies, setMovies] = useState(null); // ✅ Start with null (no default movies)
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch movies before rendering
//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await omdbApi.fetchMoviesBySearch("Batman"); // Example: Load Batman movies
//       if (response.success) {
//         setMovies(response.data.Search || []);
//       } else {
//         setMovies([]);
//       }
//       setLoading(false); // ✅ Prevents flashing "Loading..."
//     };

//     fetchMovies();
//   }, []);

//   // Function to handle search results
//   const handleSearchResults = (results) => {
//     setMovies(results || []);
//   };

//   return (
//     <div className="app-container">
//       <Header onSearchResults={handleSearchResults} />

//       <main className="main-content">
//         <div className="action-buttons">
//           <button className={`tab-btn ${activeTab === "search" ? "active" : ""}`} onClick={() => setActiveTab("search")}>
//             Search Movies
//           </button>

//           <button className={`tab-btn ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
//             My Movie List
//           </button>

//           <button className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`} onClick={() => setActiveTab("quiz")}>
//             Quiz
//           </button>
//         </div>

//         {/* 🔹 Only show movies when API has loaded */}
//         {activeTab === "search" && movies !== null && <MovieCards movies={movies} />}
//         {activeTab === "list" && <Movies />}
//         {activeTab === "quiz" && <p>Quiz section coming soon!</p>}

//         <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
//       </main>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [currentPage, setCurrentPage] = useState(1); // ✅ Store page number
//   const [activeTab, setActiveTab] = useState("search");
//   const [movies, setMovies] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1); // ✅ Store total pages

//   // 🔹 Fetch Movies with Pagination
//   useEffect(() => {
//     const fetchMovies = async () => {
//       setLoading(true);
//       const response = await omdbApi.fetchMoviesBySearch("Batman", currentPage); // ✅ Use currentPage
//       setLoading(false);

//       if (response.success) {
//         setMovies(response.data.Search || []);
//         setTotalPages(Math.ceil(Number(response.data.totalResults) / 10)); // ✅ Calculate total pages
//       } else {
//         setMovies([]);
//         setTotalPages(1);
//       }
//     };

//     fetchMovies();
//   }, [currentPage]); // ✅ Refetch movies when page changes

//   // Function to handle search results
//   const handleSearchResults = (results) => {
//     setMovies(results || []);
//     setCurrentPage(1); // ✅ Reset to first page on new search
//   };

//   return (
//     <div className="app-container">
//       <Header onSearchResults={handleSearchResults} />

//       <main className="main-content">
//         <div className="action-buttons">
//           <button className={`tab-btn ${activeTab === "search" ? "active" : ""}`} onClick={() => setActiveTab("search")}>
//             Search Movies
//           </button>

//           <button className={`tab-btn ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
//             My Movie List
//           </button>

//           <button className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`} onClick={() => setActiveTab("quiz")}>
//             Quiz
//           </button>
//         </div>

//         {/* 🔹 Only show movies when API has loaded */}
//         {activeTab === "search" && movies !== null && <MovieCards movies={movies} />}
//         {activeTab === "list" && <Movies />}
//         {activeTab === "quiz" && <p>Quiz section coming soon!</p>}

//         <MovieDetails/>

//         {/* ✅ Pass pagination props */}
//         <Pagination 
//           currentPage={currentPage} 
//           totalPages={totalPages} 
//           onPageChange={setCurrentPage} 
//         />
//       </main>
//     </div>
//   );
// }

// export default App;

function App() {
  const [currentPage, setCurrentPage] = useState(1); // ✅ Start from Page 1
  const [activeTab, setActiveTab] = useState("search");
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  // 🔹 Fetch Movies with Pagination
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await omdbApi.fetchMoviesBySearch("Batman", currentPage); // ✅ Use currentPage
      setLoading(false);

      if (response.success) {
        setMovies(response.data.Search || []);
        setTotalPages(Math.ceil(Number(response.data.totalResults) / 10)); // ✅ Calculate total pages
      } else {
        setMovies([]);
        setTotalPages(1);
      }
    };

    fetchMovies();
  }, [currentPage]); // ✅ Fetch movies whenever page changes

  // Function to handle search results (RESET PAGE TO 1)
  const handleSearchResults = (results) => {
    setMovies(results || []);
    setCurrentPage(1); // ✅ Reset to page 1 when searching
  };

  return (
    <div className="app-container">
      <Header onSearchResults={handleSearchResults} />

      <main className="main-content">
        <div className="action-buttons">
          <button className={`tab-btn ${activeTab === "search" ? "active" : ""}`} onClick={() => setActiveTab("search")}>
            Search Movies
          </button>

          <button className={`tab-btn ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
            My Movie List
          </button>

          <button className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`} onClick={() => setActiveTab("quiz")}>
            Quiz
          </button>
        </div>

        {/* 🔹 Only show movies when API has loaded */}
        {activeTab === "search" && movies !== null && <MovieCards movies={movies} />}
        {activeTab === "list" && <Movies />}
        {activeTab === "quiz" && <Quiz/>}

        {/* ✅ Pass pagination props */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </main>
    </div>
  );
}

export default App;