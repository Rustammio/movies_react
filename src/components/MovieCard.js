import React from "react";

const MovieCard = ({ movie }) => {
    console.log(movie);

    const { Poster, Year, Title, Type, imdbID } = movie;
    console.log(Poster, Year, Title, Type, imdbID);
    return (
        <div key={imdbID} className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img
                    src={
                        Poster !== "N/A"
                            ? Poster
                            : "https://via.placeholder.com/400"
                    }
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <span>{Year}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
