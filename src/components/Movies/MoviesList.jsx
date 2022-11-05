import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../img/no_poster.jpg';
import {
  MovieList,
  MovieItem,
  MovieLink,
  LinkDescription,
} from './MoviesList.style';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies &&
        movies.map(({ id, name, title, poster_path }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ location }}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="150"
                  height="200"
                />
              ) : (
                <img src={image} alt={name} width="150" height="200" />
              )}
              <LinkDescription>{name || title}</LinkDescription>
            </MovieLink>
          </MovieItem>
        ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
