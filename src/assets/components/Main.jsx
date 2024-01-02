import ListBox from "./ListBox.jsx";
import WatchedBox from "./WatchedBox.jsx";

export default function Main({
  average,
  tempMovieData,
  tempWatchedData,
  movies,
}) {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
