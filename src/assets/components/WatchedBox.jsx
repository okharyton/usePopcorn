import { useState } from "react";
import WatchedSummary from "./WatchedSummary.jsx";
import WatchedMoviesList from "./WatchedMoviesList.jsx";

export default function WatchedBox({ tempWatchedData, average, movie }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary
            tempWatchedData={tempWatchedData}
            average={average}
            watched={watched}
          />
          <WatchedMoviesList movie={movie} watched={watched} />
        </>
      )}
    </div>
  );
}
