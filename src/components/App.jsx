import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav, NavBtn } from './App.style';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Nav>
        <NavBtn to="/" end>
          Home
        </NavBtn>
        <NavBtn to="movies">Movies</NavBtn>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
