import styles from "../components/MoviesCard.module.css"
import {Link} from "react-router-dom";

export function MoviesCard({movie}) {
  const imgURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/"+movie.id} >
      <img width={230} height={345} src={imgURL} alt={movie.title} className={styles.movieImg}/>
      </Link>
      <div className={styles.titles}>
        <p className={styles.title}>{movie.title}</p>
        </div>
    </li>
  )
}

