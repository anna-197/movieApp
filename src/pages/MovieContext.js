import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookedMovie, setBookedMovie] = useState(null);

  const handleBookMovie = (movie) => {
    setBookedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, handleBookMovie  }}>
      {children}
    </MovieContext.Provider>
  );
};
