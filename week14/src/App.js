import React, { useState } from 'react';
import './App.css';

// Stars component for rating
const Stars = ({ rating, onRate }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      onClick={() => onRate(index + 1)}
      style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
    >
      ★
    </span>
  ));

  return <div>{starIcons}</div>;
};

// Review component for displaying individual reviews
const Review = ({ text }) => <p>{text}</p>;

// ReviewForm component for submitting new reviews
const ReviewForm = ({ onReviewSubmit }) => {
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      onReviewSubmit(newReview);
      setNewReview('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="3"
        placeholder="Leave a review..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

// Movie component that includes Stars, ReviewList, and ReviewForm
const Movie = ({ movie, onRate, onReviewSubmit }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{width :'200px', height: '300px'}}/>
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} onRate={(rating) => onRate(movie.id, rating)} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm onReviewSubmit={(text) => onReviewSubmit(movie.id, text)} />
    </div>
  );
};

// ReviewList component for displaying a list of reviews
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

// MovieList component as a container for Movie components
const MovieList = ({ movies, onRate, onReviewSubmit }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onRate={onRate} onReviewSubmit={onReviewSubmit} />
      ))}
    </div>
  );
};

// App component
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Kanyombya Comedy',
      image: 'kanyombya.jpeg',
      synopsis: 'One of iconic comedian in Rwandan industry',
      rating: 4,
      reviews: ['Kanyombya has done everything in the movie industry with no recognition!'],
    },
    {
      id: 2,
      title: 'Hotel Rwanda',
      image: 'hotel.jpg',
      synopsis: 'Fiction movie about a Rwandan Business man',
      rating: 1,
      reviews: ['To the world, Rusesabagina is a hero, but to Rwandans He was a business man!'],
    },
    {
      id: 3,
      title: 'The 600',
      image: '600.jpg',
      synopsis: '600 solders of RPA',
      rating: 5,
      reviews: ['Great informative history of what actually happened in Rwanda!'],
    },
    {
      id: 4,
      title: 'Impanga Series',
      image: 'impanga.jpeg',
      synopsis: 'Drama about twins',
      rating: 5,
      reviews: ['Good movie that you can watch with your family and actually enjoy the story!'],
    },
   
     
    // Add more movie entries as needed
  ]);

  const handleRate = (movieId, rating) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, rating } : movie
      )
    );
  };

  const handleReviewSubmit = (movieId, text) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, reviews: [...movie.reviews, text] } : movie
      )
    );
  };

  return (
    <div className="App">
      <h1>Movie Voting and Review App</h1>
      <MovieList movies={movies} onRate={handleRate} onReviewSubmit={handleReviewSubmit} />
    </div>
  );
}

export default App;
