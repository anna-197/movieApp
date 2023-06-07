import React, { useContext, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../pages/MovieContext";
import BookMovie from "../pages/BookMovie";

const Summary = () => {
  const { id } = useParams();
  const { selectedMovie, handleBookMovie } = useContext(MovieContext);
  const [showForm, setShowForm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleBookButtonClick = (selectedMovie) => {
    console.log("Button Clicked");
    handleBookMovie(selectedMovie);
    setShowForm(true);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };


  useEffect(() => {
    // Retrieve user data from local storage
    const name = localStorage.getItem("name");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const seats = localStorage.getItem("seats");
    // Update the user data state
    setUserData({ name, phoneNumber, seats });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="summary-container">
      {selectedMovie && (
        <>
          <h2 className="summary-movie-name">{selectedMovie.name}</h2>
          <h3>Summary</h3>
          <div className="summary-description" > {selectedMovie.summary}</div>
          {userData && (
            <div className="user-details">
              <h3>User Details of Pre-Booking</h3>
              <p>Name: {userData.name}</p>
              <p>Phone Number: {userData.phoneNumber}</p>
              <p>Seats Booked: {userData.seats}</p>
              {/* Add more user details if needed */}
            </div>
          )}
          {showForm ? (
            <BookMovie
              movie={selectedMovie}
              onClose={() => setShowForm(false)}
            />
          ) : (
            <button
              className="book-movie-btn"
              onClick={() => handleBookButtonClick(selectedMovie)}
            >
              Book Movie
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Summary;
