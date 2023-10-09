import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchListStyles from "../../assets/styles/SearchListStyles";
import { RingLoader } from 'react-spinners';
import SearchItem from '../cards/SearchItem'

const apikey = import.meta.env.VITE_API_ACCESS_KEY;

const SearchList = ({ searchTerm, category }) => {
	let searchURL = '';

	if (searchTerm && category === 'movies') {
		searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apikey}`;
	} else if (searchTerm && category === 'TV series') {
		searchURL = `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&include_adult=false&language=en-US&api_key=${apikey}&page=1',`;
	}

	console.log(searchURL);

  const fetchSearchTerm = useQuery({
		queryKey: ['searchResult', searchTerm],
		queryFn: async () => {
			const result = await axios.get(searchURL);

			return result;
		},
	});

  const { data, status, error, fetchStatus } = fetchSearchTerm

  if (
		status === 'loading' &&
		fetchStatus === 'fetching' &&
		data === undefined
	) {
		return (
			<SearchListStyles>
				<h3>search results:</h3>
				<RingLoader
					color='#e1ca4c'
					size={200}
					speedMultiplier={1}
					className='spinner'
				/>
			</SearchListStyles>
		);
	}

	if (status === 'loading' && fetchStatus === 'paused' && data === undefined) {
		return (
			<SearchListStyles>
				<h3>search results:</h3>
				<p>
					Sorry, could not load results. check your network!{' '}
				</p>
			</SearchListStyles>
		);
	}

	if (error) {
		return (
			<SearchListStyles>
				<h3>search results:</h3>
				<p>`Sorry, technical error: ${error.message}`</p>
			</SearchListStyles>
		);
	}

  console.log(data.data.results);

	return (
    <SearchListStyles>
      <h3>Search results:</h3>
      <SearchItem searchResult={data.data.results}/>
    </SearchListStyles>
  );
};

export default SearchList;
