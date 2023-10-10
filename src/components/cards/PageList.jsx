import { useQuery } from "@tanstack/react-query";
import PageListStyles from "../../assets/styles/PageListStyles"
import requests from "../../requests/requests"
import axios from "axios";
import { RingLoader } from "react-spinners";
import CardItem from "./CardItem";

const PageList = ({pageMenu, title}) => {
	let apiURL = '';


	if (pageMenu === `top rated ${title}` && title === 'movies') {
		apiURL = requests.requestTopRatedMovies;
	} else if (pageMenu === `trending ${title}` && title === 'movies') {
		apiURL = requests.requestTrendingMovies;
	} else if (pageMenu === `popular ${title}` && title === 'movies') {
		apiURL = requests.requestPopularMovies;
	} else if (pageMenu === `popular ${title}` && title === 'series') {
		apiURL = requests.requestPopularSeries;
	} else if (pageMenu === `trending ${title}` && title === 'series') {
		apiURL = requests.requestTrendingSeries;
	} else if (pageMenu === `top rated ${title}` && title === 'series') {
		apiURL = requests.requestTopRatedSeries;
	}

  console.log(apiURL);

	// Fetch data from api-server based on the apiURL passed and the pageMenu
	const fetchPageData = useQuery({
		queryKey: ['pageData', pageMenu],
		queryFn: async () => {
			const result = await axios.get(apiURL);

			return result;
		},
	});

	const { data, status, error, fetchStatus } = fetchPageData;

	if (
		status === 'loading' &&
		fetchStatus === 'fetching' &&
		data === undefined
	) {
		return (
			<PageListStyles>
				<RingLoader
					color='#e1ca4c'
					size={200}
					speedMultiplier={1}
					className='spinner'
				/>
			</PageListStyles>
		);
	}

	if (status === 'loading' && fetchStatus === 'paused' && data === undefined) {
		return (
			<PageListStyles>
				<p>Sorry, could not load results. check your network! </p>
			</PageListStyles>
		);
	}

	if (error) {
		return (
			<PageListStyles>
				<p>`Sorry, technical error: ${error.message}`</p>
			</PageListStyles>
		);
	}

	//Get the data to be parsed to the CardItem
	const pageData = data.data.results;
  
	return (
		<PageListStyles>
			{pageData.map((dataItem) => (
				<div className='page-card' key={dataItem.id}>
					<CardItem dataItem={dataItem} />
				</div>
			))}
		</PageListStyles>
	);
}

export default PageList