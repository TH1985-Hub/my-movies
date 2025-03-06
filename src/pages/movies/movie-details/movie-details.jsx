import React, {useEffect, useState} from "react";
import {omdbApi} from "../../../api/movie.api";
import { useLocalStorageState } from "../../../hooks/use-local-storage-state";


export const MovieDetails = ({id}) => {
    const [movie, setMovie] = useState({});
    const [isMovieFavorite, setIsMovieFavorite] = useState(false);
    const [moviesState, setMovies] = useLocalStorageState([], "movies");


    useEffect(() => {
       //const movies = moviesState.find((m) => m.imdbID === id);

       setIsMovieFavorite (!!moviesState.filter((m) => m.imdbID === id).length);
    }, [id, moviesState] );


    useEffect(() =>  {
        const getMovie = async () => {
            try {
                const response = await  omdbApi.fetchByID(id);
                setMovie(response.data);
            }catch (error) {
                console.error ("Error fetching movie details:", error);
            }
         
        };

        if (id) {
            getMovie();
        }else {
            setMovie({});
        }

        return () => {
            console.log("cleanup");
        };
        
}, [id]);


    const handleUpdateFavoriteStatus = () => {
        //setIsMovieFavorite(!isMovieFavorite);
        const movies = [...moviesState];
        const target = movies.find((m) => m.imdbID === id);

        if(target) {
            const index = movies.findIndex((m) => m.imdbID === id);
            movies.splice(index, 1);
            setMovies(movies);  
            setIsMovieFavorite(false);          
        } else {
            movies.push(movie);
            setMovies(movies);
            setIsMovieFavorite(true);

        }

    };

    

    return(
        
        <div>
            <div className="d-flex justify-content-between">
                <div className="me-5">
                    <img
                    src={movie.Poster}
                    alt={movie.Title}
                    width={300}
                    className="h-auto rounded d-block"
                    />
                    <ul className="list-group list-group-flush">
                        {(movie?.Ratings || []).map ((rating) => (
                            <li
                            key={rating.Source}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            >
                             {rating.Source}
                             <span className="badge text-bg-primary rounded-pill">
                              {rating.Value}  
                            </span>   
                            </li>
                        ))}
                    </ul>
                </div>
            <div>
            <p className="text-grey-600 d-flex align-items-center justify-content-between">
                <span>
                    <strong>Directed by:</strong> {movie.Director}
                </span>
                <button className="btn btn-link" 
                   onClick={handleUpdateFavoriteStatus}
                   >
                    {isMovieFavorite ? (
                    <i
                    className="bi-star-fill"
                    style={{fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                    >
                    </i>
                    ) : (
                      <i
                    className="bi-star"
                    style={{fontSize: "2rem", color: "rgb(245, 197, 24)"}}
                    ></i>
                    )}

                </button>
            </p>
            <p className="text-grey-600">
            <strong>Writer:</strong> {movie.Writer}
            </p>
            <p className="text-grey-600">
               <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="text-grey-600">
                <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-grey-600">
                <strong>Language:</strong> {movie.Language}
            </p>

          
            <p className="text-grey-600">
                <strong>Released:</strong> {movie.Released}
            </p>
        
            <p className="text-grey-600">
                <strong>Rating:</strong> {movie.imdbRating}
            </p>
            <p className="text-grey-600">
                <strong>IMDB Votes:</strong> {movie.imdbRating} ({movie.imdbVotes}{" "} votes)
            </p>
        
               <p className="mt-4 text-grey-700">{movie.Plot}</p>
               <p className="mt-2 text-grey-600">
                <strong>Box Office:</strong> {movie.BoxOffice}
               </p>
               <p className="mt-2 text-grey-600">
                <strong>Awards:</strong> {movie.Awards}
               </p>
            </div>
        </div> 
     </div>     
          
    );
};