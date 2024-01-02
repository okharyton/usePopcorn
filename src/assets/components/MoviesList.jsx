import { useState } from "react";
import Movie from "./Movie.jsx";

export default function MoviesList({ tempMovieData, movies, setMovies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
