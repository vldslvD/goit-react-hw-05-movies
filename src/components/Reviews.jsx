import { getMovieReviewsById } from 'moviesAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviewsById() {
      try {
        setStatus('pending');
        const reviewsData = await getMovieReviewsById(movieId);
        setReviews(reviewsData.data.results);
        setStatus('resolved');
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchMovieReviewsById();
  }, [movieId]);
  return (
    <div>
      {status === 'resolved' && (
        <ul>
          {reviews.length !== 0 &&
            reviews.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.author}</h3>
                  <p>{item.content}</p>
                </li>
              );
            })}
          {reviews.length === 0 && (
            <p>We don`t have any reviews for this movie</p>
          )}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
