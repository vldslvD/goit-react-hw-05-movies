import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'moviesAPI';

const Home = () => {
    const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData.data.results);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchMovies();
  }, []);

  return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};
export default Home;
