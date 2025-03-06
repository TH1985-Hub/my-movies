import React, {useContext, useMemo, useReducer, useCallback, useEffect, useRef} from "react";
import {Table} from "../../components/table/table";
import {omdbApi} from "../../api/movie.api";
import {Modal} from "../../components/modal/modal";
import { MovieDetails } from "../movies/movie-details/movie-details";
import { MoviesContext } from "../../contexts/movie-context";

const initialState = {
  data: [],
  open: false,
  selectedMovie: null,
};

const SearchMovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_MODAL_OPEN":
      return { ...state, open: action.payload };
    case "SET_SELECTED_MOVIE":
      return { ...state, open: true, selectedMovie: action.payload };
    default:
      return state;
  }
};

export const SearchMovies = () => {
  const { searchQuery } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(SearchMovieReducer, initialState);
  const timeoutIdRef = useRef(null);

  // Declare fetchMovies FIRST
  const fetchMovies = async (query) => {
    if (!query) return;

    try {
      const response = await omdbApi.fetchMoviesBySearch(query);
      if (response.success) {
        dispatch({ type: "SET_DATA", payload: response.data.Search || [] });
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  // Search debounce effect
  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => fetchMovies(searchQuery), 1000);

    return () => clearTimeout(timeoutIdRef.current);
  }, [searchQuery]);

  // Initial movie load from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("movieId");
    const title = urlParams.get("title");
    const year = urlParams.get("year");

    if (movieId && title && year) {
      dispatch({
        type: "SET_SELECTED_MOVIE",
        payload: { imdbID: movieId, Title: title, Year: year },
      });
      document.title = `${title} (${year})`;
    }
  }, []);


    useEffect(() => {
      fetchMovies();
      

    }, []);

    
  useEffect(() => {
  
  
    clearTimeout(timeoutIdRef.current);


    const told = setTimeout(() => {
      fetchMovies();
    }, 1000);

    
    timeoutIdRef.current = told;
  }, [searchQuery]);


  const handleRowClick = (row) => {
     dispatch({type: "SET_SELECTED_MOVIE, payload: row"});
    document.title = `${row.Title} (${row.Year})`;
    window.history.pushState(null, "", `?movieId=${row.imdbID}&title=${row.Title}&year=${row.Year}`);
  };

  // Modal close handler
  const handleCloseModal = useCallback(() => {
    dispatch({ type: "SET_MODAL_OPEN", payload: false });
    window.history.pushState("", "", "/");
    document.title = "Movies";
  }, [dispatch]);

  // Memoized filtered movies
  const filteredMovies = useMemo(() => {
    return state.data.filter(movie => 
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [state.data, searchQuery]);

  return (
    <div className="container mt-4">
      <Table data={filteredMovies} onRowClick={handleRowClick} />
      <Modal
        open={state.open}
        onClose={handleCloseModal}
        title={state.selectedMovie ? 
          `${state.selectedMovie.Title} (${state.selectedMovie.Year})` : "Movie details"}
      >
        {state.selectedMovie && <MovieDetails id={state.selectedMovie.imdbID} />}
      </Modal>
    </div>
  );
};
