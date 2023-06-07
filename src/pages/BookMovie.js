import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const BookMovie = ({ movie, onClose }) => {
    // const { bookedMovie } = useContext(MovieContext);
    const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
    });
    const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., storing data in local storage
    localStorage.setItem('name', formData.name);
    localStorage.setItem('phoneNumber', formData.phoneNumber);
    // Add more items to store as needed
    onClose(); // Close the form after submission
  };

  return (
   <div className={`book-movie-container ${visible ? 'visible' : ''}`}>
      <h1>Booking Details</h1>
      <h2> Name:  {movie?.name}
      </h2>
      <h2> Language:  {movie?.language}
      </h2>
      <h2> Genre:  {movie?.genres[0]}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='Form-details'>
        <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="seats">Seats:</label>
          <input type="number" id="seats" name="seats" value={formData.seats} onChange={handleChange} />
        </div>
        <div className='Form-details'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookMovie;
