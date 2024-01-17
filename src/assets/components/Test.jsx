import Star from "./Star.jsx";
import StarRating from "./StarRating.jsx";
import { useState } from "react";

export default function Test({ onSetRating }) {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
