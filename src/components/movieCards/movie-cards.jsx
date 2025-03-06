// src/components/MovieCards.jsx
// import React from 'react';
// //import { omdbApi } from '../../api/movie.api';
// import './movie-cards.css';

// const MovieCards = ({ movies }) => {
//   return (
//     <div className="movies-grid">
//       {movies.map((movie, index) => (
//         <div key={index} className="movie-card">
//           <img src={movie.poster} alt={movie.title} className="movie-poster" />
//           <div className="movie-info">
//             <h3>{movie.title}</h3>
//             <p>{movie.year} • {movie.type}</p>
//             <button className="favorite-btn">❤️ Add to List</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieCards;

// import React, { useState } from "react";
// import "./movie-cards.css";
// import { Modal } from "./components/modal"; 


//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to handle movie click
//   const handleMovieClick = async (movieId) => {
//     const response = await omdbApi.fetchByID(movieId); // Fetch movie details
//     if (response.success) {
//       setSelectedMovie(response.data);
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <div className="movies-grid">
//       {movies.length === 0 ? (
//         <p>No movies found.</p>
//       ) : (
//         movies.map((movie, index) => (
//           <div key={index} className="movie-card" onClick={() => handleMovieClick(movie.imdbID)}>
//             <img
//               src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
//               alt={movie.Title}
//               className="movie-poster"
//             />
//             <div className="movie-info">
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year} • {movie.Type}</p>
//             </div>
//           </div>
//         ))
//       )}

//       {/* Modal Component */}
//       {isModalOpen && selectedMovie && (
//         <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedMovie.Title}>
//           <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="modal-poster" />
//           <p><strong>Year:</strong> {selectedMovie.Year}</p>
//           <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
//           <p><strong>Director:</strong> {selectedMovie.Director}</p>
//           <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default MovieCards;

import React, { useState } from "react";
import "./movie-cards.css";
import { Modal } from "../../components/modal/modal"; 
import { omdbApi } from "../../api/movie.api"; // Import OMDB API

const MovieCards = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle movie click
  const handleMovieClick = async (movieId) => {
    const response = await omdbApi.fetchByID(movieId); // Fetch movie details
    if (response.success) {
      setSelectedMovie(response.data);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="movies-grid">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((movie, index) => (
          <div key={index} className="movie-card" onClick={() => handleMovieClick(movie.imdbID)}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year} • {movie.Type}</p>
              <button className="favorite-btn">❤️ Add to List</button>
            </div>
          </div>
        ))
      )}

      {/* Modal Component */}
      {isModalOpen && selectedMovie && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedMovie.Title}>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="modal-poster" />
          <p><strong>Year:</strong> {selectedMovie.Year}</p>
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
        </Modal>
      )}
    </div>
  );
};

export default MovieCards;
