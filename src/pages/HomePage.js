import React, { useEffect, useState } from "react";
import Axios from "axios";

import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
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

  return (
    <>
    <div className="container">
        <h1 className="title"> Trending Movies </h1>
        
      </div>

      
        <div className="grid">
          {movies.map((each_movie) => {
            return (
              <article>
              <img src={each_movie.show.image.medium} alt="default" />
              <div className="text">
              <h4>{each_movie.show.name}</h4>
              <button>Here's why</button>
              </div>
                   

                   
              </article>
            );
          })}
        </div>
      
    </>
  );
};

export default HomePage;
