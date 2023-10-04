import { useQuery } from '@tanstack/react-query';
import LandingPageStyles from '../assets/styles/LandingPageStyles';
import LandingFrame from '../components/LandingFrame';
import requests from '../requests/requests';
import axios from 'axios';

const LandingPage = () => {
	// Setting Queries for fetching Trending Movies
	const fetchTrendingMovies = useQuery({
		queryKey: ['trendingMovies'],
		queryFn: async () => {
      const result = await axios.get(requests.requestTrendingMovies);

      return result.data
    },

	});

  // console.log(fetchTrendingMovies.status);
  // console.log(fetchTrendingMovies.error);
  // console.log(fetchTrendingMovies);
  // console.log(fetchTrendingMovies.fetchStatus);

	return (
		<LandingPageStyles>
			<h1>Discover movies and tv series that include your favourites</h1>

			<LandingFrame
				title='Trending Movies'
				linkText='movies'
				status={fetchTrendingMovies.status}
				error={fetchTrendingMovies.error}
				fetchStatus={fetchTrendingMovies.fetchStatus}
				data={fetchTrendingMovies.data}
			/>
			<LandingFrame
				title='Trending Series'
				linkText='series'
				status={fetchTrendingMovies.status}
				error={fetchTrendingMovies.error}
				fetchStatus={fetchTrendingMovies.fetchStatus}
				data={fetchTrendingMovies.data}
			/>
		</LandingPageStyles>
	);
};

export default LandingPage;
