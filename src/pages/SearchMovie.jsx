import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMoviesByName } from 'moviesAPI';

const SearchMovie = () => {
  const [params, setParams] = useSearchParams();
  const movieName = params.get('movieName') ?? "";
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const clearUrl = e => {
    const update = e.target.value !== '' ? {movieName: e.target.value} : {}
    setParams(update);
  }
  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getMoviesByName(movieName);
        setMovies(moviesData.data.results);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchMovies();
  },[movieName])
  return (
    <div>
      <input
        value={movieName}
        onChange={clearUrl}
      />
      <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
              </li>
            );
          })}
        </ul>
    </div>
  );
};
export default SearchMovie;
