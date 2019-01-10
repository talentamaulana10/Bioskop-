import React from 'react';
import './Movies.css';
import MovieListItem from './MovieListItem';
//import Buttons from '../navigation/Button';

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => (
  <section>
    <ul className="movies">
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  </section>
);

export default Movies;
