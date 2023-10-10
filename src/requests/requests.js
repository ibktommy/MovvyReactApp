const apikey = import.meta.env.VITE_API_ACCESS_KEY;
const authKey = import.meta.env.VITE_API_AUTHORIZATION_KEY;

const requests = {
	requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/week?language=en-US&Authorization=${authKey}&api_key=${apikey}`,
	requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`,
	requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`,
	requestTrendingSeries: `https://api.themoviedb.org/3/trending/tv/week?language=en-US&Authorization=${authKey}&api_key=${apikey}`,
	requestTopRatedSeries: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`,
	requestPopularSeries: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`,
};

export default requests;