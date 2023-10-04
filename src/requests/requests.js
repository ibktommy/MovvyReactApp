const apikey = import.meta.env.VITE_API_ACCESS_KEY;
const authKey = import.meta.env.VITE_API_AUTHORIZATION_KEY;

const requests = {
	requestTrendingSeries: `https://api.themoviedb.org/3/trending/tv/week?language=en-US&Authorization=${authKey}&api_key=${apikey}`,
	requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/week?language=en-US&Authorization=${authKey}&api_key=${apikey}`,
};

export default requests;