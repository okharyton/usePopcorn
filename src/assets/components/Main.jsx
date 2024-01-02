import ListBox from "./ListBox.jsx";
import WatchedBox from "./WatchedBox.jsx";

export default function Main({ average, tempMovieData, tempWatchedData }) {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
