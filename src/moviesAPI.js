import axios from 'axios';
export async function getMovies() {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const options = {
    params: {
      api_key: '148118ff38ec61bf8d4b2aa895c3f69e',
    },
    headers: {
      accept: 'application/json',
    },
  };
  const response = await axios.get('trending/movie/day', options);

  return response;
}

export async function getMoviesByName(search) {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const options = {
    params: {
      api_key: '148118ff38ec61bf8d4b2aa895c3f69e',
    },
    headers: {
      accept: 'application/json',
    },
  };
  const response = await axios.get(`search/movie?query=${search.replace(/ /g, '+')}`, options);

  return response;
}

export async function getMovieById(movieId) {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const options = {
    params: {
      api_key: '148118ff38ec61bf8d4b2aa895c3f69e',
    },
    headers: {
      accept: 'application/json',
    },
  };
  const response = await axios.get(`movie/${movieId}`, options);

  return response;
}

export async function getMovieReviewsById(movieId) {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const options = {
    params: {
      api_key: '148118ff38ec61bf8d4b2aa895c3f69e',
    },
    headers: {
      accept: 'application/json',
    },
  };
  const response = await axios.get(`movie/${movieId}/reviews`, options);

  return response;
}

export async function getMovieCastById(movieId) {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const options = {
    params: {
      api_key: '148118ff38ec61bf8d4b2aa895c3f69e',
    },
    headers: {
      accept: 'application/json',
    },
  };
  const response = await axios.get(`movie/${movieId}/credits`, options);

  return response;
}