import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { LandingPages } from "../pages/LandingPages";
import {MovieDetails} from "../pages/MovieDetails"

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPages/>}/>
        <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>

      </Routes>
    </Router>
  )
};

export default MyRoutes;