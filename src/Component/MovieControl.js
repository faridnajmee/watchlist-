import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const MovieControl = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button
                        className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <li className="fa -fw far fa-eye"></li>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <li className="fa -fw fa fa-times"></li>
                    </button>
                </>
            )}

            {type === 'watched' &&
                (
                    <>
                        <button
                            className="ctrl-btn"
                            onClick={() => moveToWatchlist(movie)}
                        >
                            <li className="fa-fw far fa-eye-slash"></li>
                        </button>

                        <button
                            className="ctrl-btn"
                            onClick={() => removeFromWatched(movie.id)}
                        >
                            <li className="fa -fw fa fa-times"></li>
                        </button>
                    </>
                )
            }
        </div>
    )
}
