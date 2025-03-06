// import React, { useContext } from 'react';
// import { Table } from 'react-bootstrap';
// import { MovieContext } from '../../context/MovieContext';
// import './movietable.css';

// const MovieTable = () => {
//   const { state } = useContext(MovieContext);

//   return (
//     <div className="movie-table-container">
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>Poster</th>
//             <th>Title</th>
//             <th>Year</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {state.movies.slice(0, 10).map(movie => (
//             <tr key={movie.imdbID}>
//               <td>
//                 <img 
//                   src={movie.Poster} 
//                   alt={movie.Title} 
//                   className="movie-poster"
//                 />
//               </td>
//               <td>{movie.Title}</td>
//               <td>{movie.Year}</td>
//               <td>{movie.Type}</td>
//               <td>
//                 <button className="action-btn">
//                   <i className="bi bi-star-fill"></i> Favorite
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default MovieTable;

export const Table = ({data, onRowClick}) => {
    const handleOpenIMDBMovie = (event, imdbID) => {
      event.stopPropagation();
      window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
    };
  
    
       return(
      <table className="table table-striped mt-3 table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Poster</th>
                <th>Title</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Type</th>
                < th className="text-md-end">IMDB ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie) => (
                <tr key={movie.imdbID} onClick={() => onRowClick(movie)} >
                  <td>
                    <img width="60" src={movie.Poster}  alt={movie.Title}/>
                  </td>
                    <td>{movie.Title}</td>
                    <td>{movie.Year}</td>
                    <td>{movie.Genre}</td>
                    <td>{movie.Type}</td>
                    <td className="text-md-end">
                    <div className="d-flex justify-content-end">
                      <button                
                         type="button"
                         className="btn btn-link"
                         onClick={(event) => handleOpenIMDBMovie(event, movie.imdbID)}
                      >
                       Watch on IMDB
                    </button>
  
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
       );
  };