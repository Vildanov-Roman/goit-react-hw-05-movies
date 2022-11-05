import { searchMovieById } from '../servise/serviseAPI';
import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Wrapper,
  WrapTitle,
  WrapDescription,
  Error,
  MovieLink,
  MovieInfo,
} from './Movies.style';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  const from = location.state?.from ?? '/';
  const [movieById, setMovieById] = useState();

  useEffect(() => {
    searchMovieById(moviesId)
      .then(response => {
        setMovieById(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  if (!movieById) {
    return <Error>404 Not Found</Error>;
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieById;
  return (
    <Wrapper>
      <MovieLink to={refLocation.current ?? '/'}>Go back</MovieLink>
      <WrapTitle>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <WrapDescription>
          <h2>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </WrapDescription>
      </WrapTitle>
      <Wrapper>
        <WrapTitle>
          <MovieInfo to="cast" state={{ from: from }}>
            Cast
          </MovieInfo>
          <MovieInfo to="reviews" state={{ from: from }}>
            Reviews
          </MovieInfo>
        </WrapTitle>
        <Outlet />
      </Wrapper>
    </Wrapper>
  );
};

export default MovieDetails;
