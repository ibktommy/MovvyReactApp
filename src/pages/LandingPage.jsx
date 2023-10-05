import { useQuery } from '@tanstack/react-query';
import LandingPageStyles from '../assets/styles/LandingPageStyles';
import MoviesFrame from '../components/MoviesFrame';
import SeriesFrame from '../components/SeriesFrame';
import requests from '../requests/requests';
import axios from 'axios';

const LandingPage = () => {
	// Setting Queries for fetching Trending Movies
	const fetchTrendingMovies = useQuery({
		queryKey: ['trendingMovies'],
		queryFn: async () => {
			const result = await axios.get(requests.requestTrendingMovies);

			return result.data;
		},
	});

	// Setting Queries for fetching Trending Movies
	const fetchTrendingSeries = useQuery({
		queryKey: ['trendingSeries'],
		queryFn: async () => {
			const result = await axios.get(requests.requestTrendingSeries);

			return result.data;
		},
	});

	return (
		<LandingPageStyles>
			<h1>Discover movies and tv series that include your favourites</h1>

			<MoviesFrame
				title='Trending Movies'
				linkText='movies'
				status={fetchTrendingMovies.status}
				error={fetchTrendingMovies.error}
				fetchStatus={fetchTrendingMovies.fetchStatus}
				data={fetchTrendingMovies.data}
			/>
			<SeriesFrame
				title='Trending Series'
				linkText='series'
				status={fetchTrendingSeries.status}
				error={fetchTrendingSeries.error}
				fetchStatus={fetchTrendingSeries.fetchStatus}
				data={fetchTrendingSeries.data}
			/>
		</LandingPageStyles>
	);
};

export default LandingPage;
