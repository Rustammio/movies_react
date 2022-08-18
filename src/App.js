import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import SearchIcon from "./search.svg";
//10a1fc1f
const API_URL = "http://www.omdbapi.com?apikey=10a1fc1f";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const searhMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        searhMovies("spiderman");
    }, []);
    return (
        <div className="app">
            <h1>RusMovieTheatre</h1>
            <Search
                searchInp={search}
                findM={searhMovies}
                chan={setSearch}
                search={SearchIcon}
            />
            <div className="container">
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard movie={movie} />)
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
