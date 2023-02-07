import { useEffect, useState} from "react";
import {get} from "../data/httpsClient";
import {MoviesCard} from "./MoviesCard"
import "../components/ContMoviesCard.css"

export function ContMoviesCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data)=>{
      SetMovies(data.results);
      // console.log(data.results);
    } );
  },[]);

  return (
    <ul className="container">
      {movies.map((movie) => (
      <MoviesCard key={movie.id} movie = {movie}/>
    ))}
    </ul>
  );
};
