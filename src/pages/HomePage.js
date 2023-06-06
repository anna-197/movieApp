import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'
import { MovieContext } from "./MovieContext";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { setSelectedMovie } = useContext(MovieContext);
  // const [search, setSearch]=useState('');

//   useEffect(() => {
//     fetch("https://api.tvmaze.com/search/shows?q=all")
//     .then((res)=>res.json())
//     .then(response=>{
//       console.log(response);
//       setMovies(response.data);
//     })
//   }, [])

  useEffect(() => {
    Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      console.log(response);
      setMovies(response.data);
    });
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
        <div className="grid">
          {movies.map((each_movie) => {
            return (
              <article>
              <img className="grid-article-img" src={each_movie.show.image.medium} alt="default" />
              <div className="text">
              <h4>{each_movie.show.name}</h4>
              <h4>{each_movie.show.genres[0]}</h4>
              <Link
                  to={`/summary/${each_movie.show.id}`}
                  onClick={() => handleMovieClick(each_movie.show)}
                >
                  Read More
                </Link>
              </div>
                   

                   
              </article>
            );
          })}
        </div>
      
    </>
  );
};

export default HomePage;
