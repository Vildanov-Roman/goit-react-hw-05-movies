import { MoviesList } from '../Movies/MoviesList';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from '../servise/serviseAPI';
import { Form, Input, SearchBtn } from './MovieSearch.style';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const fetchMovie = useCallback(async () => {
    if (!query) {
      return;
    }
    const response = await searchMoviesByName(query);
    setMovies(response);
  }, [query]);

  const handleSubmit = element => {
    element.preventDefault();
    setSearchParams({ query: searchQuery });
  };
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, query]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your query here, please"
          onChange={element => setSearchQuery(element.target.value)}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
