import { getMovieCastById } from 'moviesAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImageContainer, StyledLi, StyledUl } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCastById() {
      try {
        setStatus('pending');
        const castData = await getMovieCastById(movieId);
        setCast(castData.data.cast);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        alert(error);
        
      }
    }
    fetchMovieCastById();
  }, [movieId]);
  return (
    <div>
      {status === 'resolved' && (
        <StyledUl>
          {cast.length !== 0 && cast.map(item => {
              return (
                <StyledLi key={item.id}>
                  <ImageContainer>
                    <img width="200px" src={item.profile_path ? `https://image.tmdb.org/t/p/w300/${item.profile_path}` : 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'}
                    alt="" />
                  </ImageContainer>
                  <h3>{item.name}</h3>
                  <span>{item.character}</span>
                </StyledLi>
              );
          })}
          {cast.length === 0 && <p>There are no cast</p>}
        </StyledUl>
      )}
    </div>
  );
};
export default Cast;
