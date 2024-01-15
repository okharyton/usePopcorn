import Navbar from "./assets/components/Navbar.jsx";
import Main from "./assets/components/Main.jsx";
import { useEffect, useState } from "react";
import Search from "./assets/components/Search.jsx";
import NumResults from "./assets/components/NumResults.jsx";
import Box from "./assets/components/Box.jsx";
import MoviesList from "./assets/components/MoviesList.jsx";
import WatchedSummary from "./assets/components/WatchedSummary.jsx";
import WatchedMoviesList from "./assets/components/WatchedMoviesList.jsx";
import StarRating from "./assets/components/StarRating.jsx";
import Loader from "./assets/components/Loader.jsx";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "5588ff90";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = "matrix";

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}
`);
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main
        average={average}
        tempMovieData={tempMovieData}
        tempWatchedData={tempWatchedData}
      >
        <Box tempMovieData={tempMovieData} movies={movies}>
          {isLoading ? (
            <Loader />
          ) : (
            <MoviesList tempMovieData={tempMovieData} movies={movies} />
          )}
        </Box>
        <Box>
          <WatchedSummary
            tempWatchedData={tempWatchedData}
            average={average}
            watched={watched}
            movies={movies}
          />
          <WatchedMoviesList movies={movies} watched={watched} />
        </Box>
      </Main>
    </>
  );
}
