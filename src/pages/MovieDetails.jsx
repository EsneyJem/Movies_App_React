import {get} from "../data/httpsClient"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() =>{
    get("/movie/"+movieId).then((data)=>{
      setMovie(data);
      setGenres(data.genres[0])
    });
  },[movieId]);
  const imgURL = getMovieImg(movie.poster_path, 500);

  return(
    <div className="detailContainer">
      <img src={imgURL} alt="movie.title" className="col detailImg"/>
      <div className="col movieDetails">
        <p className="title"> 
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {genres.name}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>

      </div>
    </div>
  )
};