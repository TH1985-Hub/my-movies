import React from "react"; 
import {omdbApi} from "../../api/movie.api";
import {MovieDetails} from "../../pages/movies/movie-details/movie-details";
import PropTypes from "prop-types";




export function Modal ({open, onClose, children, title, movieId}) {
    omdbApi("Escape", () => {
        onClose();
});


return (
     
        <div
          className={`modal fade bd-example-modal-xl show ${open && "show"}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          style={{display: open && "block"}}
          aria-modal="true"
        >
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className="modal-title h4" id="myExtraModalLabel">
                            { title}
                            </h5>
                            <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            >
                            </button>
                    </div>
                    <div className="modal-body">

                    {movieId && <MovieDetails id={movieId} />}
                  
                        {children}
                        </div>
                </div>
            </div>

            </div>

        
    ); 
};

Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string
};