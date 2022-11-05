import { searchMovieByCast } from '../servise/serviseAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../img/CastNoFoto.jpg';
import { CastList, CastItem, CastDiscription } from './Cast.style';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    searchMovieByCast(moviesId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  return (
    <CastList>
      {cast &&
        cast.map(({ character, profile_path, name, id }) => (
          <CastItem key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            ) : (
              <img src={image} alt={name} width="200" height="300" />
            )}
            <CastDiscription>
              <h3>{name}</h3>
              <h4>Character: </h4>
              <p>{character}</p>
            </CastDiscription>
          </CastItem>
        ))}
    </CastList>
  );
};

export default Cast;
