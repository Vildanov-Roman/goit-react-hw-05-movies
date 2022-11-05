import { searchMovieByReviews } from '../servise/serviseAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewItem, ReviewAbsence } from './Reviews.style';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchMovieByReviews(moviesId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  return (
    <>
      {reviews.length ? (
        <ReviewList>
          {reviews.map(({ content, author, id }) => (
            <ReviewItem key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <ReviewAbsence>We have no reviews for this movie</ReviewAbsence>
      )}
    </>
  );
};

export default Reviews;
