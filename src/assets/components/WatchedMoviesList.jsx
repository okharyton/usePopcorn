import WatchedMovie from "./WatchedMovie.jsx";

export default function WatchedMoviesList({ movie, watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
