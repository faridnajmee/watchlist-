import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) 
    : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) 
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
    const [state, dispath] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    //actions
    const addMovieToWatchList = (movie) => {
        dispath({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    };

    const removeMovieFromWatchlist = (id) => {
        dispath ({ type: "REMOVE_MOVIE_FROM_WATHCLIST", payload: id});
    }

    const addMovieToWatched = movie => {
        dispath({ type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    }

    const moveToWatchlist = (movie) => {
        dispath({ type: "MOVE_TO_WATCHLIST", payload: movie});
    }

    const removeFromWatched = (movie) => {
        dispath({ type: "REMOVE_FROM_WATCHED", payload: movie});
    }

    return (
        <GlobalContext.Provider
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};