// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Header.css';

// const Header = ({ onSearchOpen, onListOpen, onQuizOpen }) => {
//   return (
//     <header className="app-header">
//       <div className="header-content">
//         <div className="branding">
//           <img src="/logo.png" alt="Movie Logo" className="logo" />
//           <h1>My Movies</h1>
//         </div>
        
//         <div className="header-actions">
//           <Button 
//             variant="outline-light" 
//             className="action-btn"
//             onClick={onSearchOpen}
//           >
//             <i className="bi bi-search"></i> Search Movies
//           </Button>
//           <Button 
//             variant="outline-light" 
//             className="action-btn"
//             onClick={onListOpen}
//           >
//             <i className="bi bi-collection"></i> My List
//           </Button>
//           <Button 
//             variant="outline-light" 
//             className="action-btn"
//             onClick={onQuizOpen}
//           >
//             <i className="bi bi-question-circle"></i> Quiz
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.jsx
// import React from 'react';
// import './header.css';

// const Header = ({ showSearch, setShowSearch }) => {
//   return (
//     <header className="app-header">
//       <div className="header-content">
//         <div className="logo-section">
//           <div className="logo">🎬</div>
//           <h1>My Movies</h1>
//         </div>
//         {showSearch && (
//           <input
//             type="text"
//             placeholder="Search movies..."
//             className="search-input"
//           />
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./header.css";

const Header = ({ onSearchResults }) => {
  const [query, setQuery] = useState(""); // Store search input
  const [loading, setLoading] = useState(false);

  
  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) { // Fetch only if input is longer than 2 chars
      setLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=8df2f100`);
      const data = await response.json();
      setLoading(false);
      
      if (data.Response === "True") {
        onSearchResults(data.Search || []); // Send results to parent (App.js)
      } else {
        onSearchResults([]); // Clear results if not found
      }
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">🎬</div>
          <h1>My Movies</h1>
        </div>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={query}
          onChange={handleSearch}
        />
        {loading && <span>Loading...</span>}
      </div>
    </header>
  );
};

export default Header;
