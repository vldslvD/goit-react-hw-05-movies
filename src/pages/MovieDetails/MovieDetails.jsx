import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieById } from 'moviesAPI';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Button, DescrDev, Image, StyledLi, StyledUl } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setStatus('pending');
        const movieData = await getMovieById(movieId);
        setMovie(movieData.data);
        setStatus('resolved');
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <div>
      <Button to={backLinkHref.current}>Go back</Button>
      {status === 'resolved' && (
        <div>
          <DescrDev>
            <Image
            width="300px"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'
            }
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <span></span>
            <div>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <StyledUl>
                {movie.genres.map(genre => {
                  return <StyledLi key={genre.id}>{genre.name}</StyledLi>;
                })}
              </StyledUl>
              </div>
              </div>
          </DescrDev>
            
            <h2>Additional info</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
      )}
    </div>
  );
};
export default MovieDetails;
