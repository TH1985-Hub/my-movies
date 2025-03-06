// import React from 'react';
// import { ButtonGroup, Button } from 'react-bootstrap';
// import './pagination.css';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div className="pagination-container">
//       <ButtonGroup>
//         <Button
//           variant="outline-light"
//           disabled={currentPage === 1}
//           onClick={() => onPageChange(currentPage - 1)}
//         >
//           Previous
//         </Button>
        
//         {[...Array(totalPages).keys()].map(page => (
//           <Button
//             key={page + 1}
//             variant={currentPage === page + 1 ? 'primary' : 'outline-light'}
//             onClick={() => onPageChange(page + 1)}
//           >
//             {page + 1}
//           </Button>
//         ))}
        
//         <Button
//           variant="outline-light"
//           disabled={currentPage === totalPages}
//           onClick={() => onPageChange(currentPage + 1)}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// };

// export default Pagination;

// src/components/Pagination.jsx
// import React from 'react';
// import './pagination.css';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div className="pagination-container">
//       <button 
//         onClick={() => onPageChange(Math.max(1, currentPage - 1))}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
      
//       {Array.from({ length: totalPages }, (_, i) => (
//         <button
//           key={i + 1}
//           className={currentPage === i + 1 ? 'active' : ''}
//           onClick={() => onPageChange(i + 1)}
//         >
//           {i + 1}
//         </button>
//       ))}
      
//       <button 
//         onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// import React from "react";
// import "./pagination.css";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div className="pagination-container">
//       <button 
//         onClick={() => onPageChange(1)} // ✅ Jump to page 1 when clicking "Previous"
//         disabled={currentPage === 1}
//       >
//         First
//       </button>

//       <button 
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
      
//       {Array.from({ length: totalPages }, (_, i) => (
//         <button
//           key={i + 1}
//           className={currentPage === i + 1 ? "active" : ""}
//           onClick={() => onPageChange(i + 1)}
//         >
//           {i + 1}
//         </button>
//       ))}

//       <button 
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>

//       <button 
//         onClick={() => onPageChange(totalPages)} // ✅ Jump to last page
//         disabled={currentPage === totalPages}
//       >
//         Last
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5; // ✅ Change this to 8 if you want more numbers

  // Calculate visible page range
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  return (
    <div className="pagination-container">
      <button 
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Show limited page numbers */}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          className={currentPage === startPage + i ? "active" : ""}
          onClick={() => onPageChange(startPage + i)}
        >
          {startPage + i}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <button 
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
